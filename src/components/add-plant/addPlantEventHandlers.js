// addPlantEventHandling.js
/**
 * Event handler logic for adding a new plant to 'My Plants'.
 */

import { plantLog, renderMyPlants } from "../plant-log";
import { localEventManager } from "../global/event-handlers";
import { uploadImageToFirebase } from "../../config";
import { clearSection, domElements, removeModal, resetSection } from "../global/dom-utils";
import { appendChildren, isFile } from "../global/utils";
import { createModalElements } from "./addPlantDomUtils";

/**
 * Sets up event listener for uploading user image.
 * @param {HTMLElement} input 
 * @param {HTMLElement} imageInputImg 
 * @param {HTMLElement} heading 
 */
export const setUpInputChangeListener = (input, imageInputImg, heading) => {
  let imageFile;

  localEventManager.addEventListener(input, 'change', (event) => {
    const file = event.target.files[0];
    if (file) {
      imageFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        imageInputImg.src = e.target.result;
        imageInputImg.classList.add('large-image');
        heading.classList.toggle('hidden');
      };
      reader.readAsDataURL(file);
    }
  }, 'ADD_PLANT');

  return () => imageFile;
}

/**
 * Validates the form data, creates a new plant object, adds it to the plant log,
 * and updates the UI to reflect the new addition.
 * @param {Event} event 
 * @param {HTMLElement} plantName - user input field for plant name (date, description etc.)
 * @param {HTMLElement} dateAdded 
 * @param {HTMLElement} description 
 * @param {File} imageFile - image file
 */
export const submitNewPlantHandler = async (event, plantName, dateAdded, description, imageFile) => {
  const { myPlantsBtn } = domElements;
  const isGuest = sessionStorage.getItem("guestLogin");
  event.preventDefault();

  let imageUrl = imageFile;

  if (isFile(imageFile) && isGuest) {
    // Use a Promise to ensure FileReader completes before proceeding
    imageUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result); // Resolve with base64 image data
      reader.onerror = () => reject(new Error("Failed to read image file"));
      reader.readAsDataURL(imageFile);
    });
  } else if (isFile(imageFile) && !isGuest) {
    try {
      imageUrl = await uploadImageToFirebase(imageFile, 'original');
    } catch (error) {
      console.error("Error uploading image:", error);
      return;
    }
  }

  const newPlant = {
    name: plantName,
    dateAdded: dateAdded,
    description: description,
    image: imageUrl,
    id: Date.now(),
    requirements: [],
    tasks: [],
    tags: []
  };

  await plantLog.addToUserPlantLog(newPlant);

  if (myPlantsBtn.classList.contains('active')) {
    resetSection('plant-log', renderMyPlants, 'PLANT_LOG');
  }
};

/**
 * Sets up event listeners for the "Next" and "Back" button elements in the add new plant form.
 * Handles click events to process user input, manage state transitions, and update the modal content accordingly.
 * @param {HTMLElement} nextButton - button element that moves the form to next step or submits form.
 * @param {HTMLElement} input - input element where the user enters data.
 * @param {HTMLElement} errorMessage - element that displays an error message if the input is invalid.
 * @param {Boolean} isFileInput - indicating whether the input is a file input.
 * @param {Object} state - current state of the form, including the current step and accumulated input from user.
 * @param {Function} getImageFile - retrieves the image file.
 * @param {HTMLElement} backButton - element that moves the form to previous step.
 */
export const setUpButtonEventListeners = (nextButton, input, errorMessage, isFileInput, state, getImageFile, backButton) => {
  localEventManager.addEventListener(nextButton, 'click', (event) => {
    event.preventDefault();
    if (input.value === '') {
      errorMessage.classList.add('show');
      return;
    }
    const userInput = isFileInput ? input.files[0] : input.value;
    const modal = document.querySelector('.new-modal');
    const imageFile = getImageFile();
    const newState = nextButtonHandler(userInput, state, event, imageFile, modal, backButton);
    if (modal) {
      updateModalContent(modal, newState);
    }
  }, 'ADD_PLANT');

  localEventManager.addEventListener(backButton, 'click', () => {
    const modal = document.querySelector('.new-modal');
    const newState = backButtonHandler(state);
    if (modal) {
      updateModalContent(modal, newState);
    }
  }, 'ADD_PLANT');
}

/**
 * Handles the logic for the "Next" button, updating the state
 * and proceeding to the next step or submitting the form if on the last step.
 * @param {String} userInput - value of the input element for the current step.
 * @param {Object} state - current state of the modal, including the current step and new plant data.
 * @param {Event} event - click event object.
 * @param {File} imageFile - image file.
 * @param {HTMLElement} modal - modal element.
 * @returns updated state after handling the "Next" button click.
 */
export const nextButtonHandler = (userInput, state, event, imageFile, modal) => {
  let newPlant = { ...state.newPlant };
  if (state.currentStep === 0) {
    newPlant.name = userInput;
  } else if (state.currentStep === 1) {
    newPlant.dateAdded = userInput;
  } else if (state.currentStep === 2) {
    newPlant.description = userInput;
  } else if (state.currentStep === 3) {
    submitNewPlantHandler(event, newPlant.name, newPlant.dateAdded, newPlant.description, imageFile);
    removeModal(modal, 'ADD_PLANT');
    return { currentStep: 0, newPlant: {} };
  }

  return { currentStep: state.currentStep + 1, newPlant };
};

/**
 * Handles the logic for the "Back" button, updating the state to return to the previous step.
 * @param {Object} state - current state of the modal, including the current step and new plant data.
 * @returns updated state after handling the "Back" button click.
 */
export const backButtonHandler = (state) => {
  if (state.currentStep > 0) {
    return { currentStep: state.currentStep - 1, newPlant: state.newPlant };
  }
  return state;
};

/**
 * Update modal content based on current step. Simulates a quiz-like modal UI.
 * @param {HTMLElement} modal - eg. addPlantModal
 * @param {Object} state - currentStep count and plant object
 */
export const updateModalContent = (modal, state) => {
  clearSection(modal, 'ADD_PLANT');

  let inputText, inputType = '';
  let tagName = 'input';
  let buttonText = 'Next';
  let classList;
  let isFileInput = false;
  let id;

  if (state.currentStep === 0) {
    inputText = 'Plant name';
    classList = ['new-input'];
  } else if (state.currentStep === 1) {
    inputText = 'Date';
    inputType = 'date';
    classList = ['new-input'];
  } else if (state.currentStep === 2) {
    inputText = 'Description';
    tagName = 'textarea'
    classList = ['new-input', 'description-input'];
  } else if (state.currentStep === 3) {
    classList = ['photo-input'];
    id = 'file-upload';
    isFileInput = true;
    buttonText = 'Create plant';
  }

  const form = createModalElements(tagName, inputText, buttonText, inputType, state, isFileInput, classList, id);
  appendChildren(modal, form);
};