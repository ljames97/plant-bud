// addPlantEventHandling.js
/**
 * Event handler logic for adding a new plant to 'My Plants'.
 */

import { plantLog, renderMyPlants } from "../plant-log/plantLogMain";
import { removeModal } from "../plant-page/plantPageDomUtils";
import { domElements, resetSection } from "../utils/globalDomUtils";
import { imageChangeHandler, localEventManager } from "../utils/globalEventHandlers";
import { updateModalContent } from "./addPlantMain";

/**
 * Sets up event listener for uploading user image.
 * @param {HTMLElement} input 
 * @param {HTMLElement} imageInputImg 
 * @param {HTMLElement} heading 
 */
export const setUpInputChangeListener = (input, imageInputImg, heading) => {
  let imageUrl;

  localEventManager.addEventListener(input, 'change', (event) => {
    imageChangeHandler(event, (dataUrl) => {
      imageUrl = dataUrl;
      imageInputImg.src = dataUrl;
      imageInputImg.classList.add('large-image');
      heading.style.display = 'none';
    })
  }, 'ADD_PLANT');

  return () => imageUrl;
}

/**
 * Validates the form data, creates a new plant object, adds it to the plant log,
 * and updates the UI to reflect the new addition.
 * @param {Event} event 
 * @param {HTMLElement} plantName - user input field for plant name (date, description etc.)
 * @param {HTMLElement} dateAdded 
 * @param {HTMLElement} description 
 * @param {String} imageDataUrl - image url
 */
export const submitNewPlantHandler = (event, plantName, dateAdded, description, imageDataUrl) => {
  const { myPlantsBtn } = domElements;
  event.preventDefault();

  const newPlant = {
    name: plantName,
    dateAdded: dateAdded,
    description: description,
    image: imageDataUrl,
    id: Date.now(),
    requirements: [],
    tasks: [],
    tags: []
  };

  plantLog.addToUserPlantLog(newPlant);

  if (myPlantsBtn.classList.contains('active')) {
    resetSection('.plant-log', renderMyPlants, 'PLANT_LOG');
  }
}

/**
 * Sets up event listeners for the "Next" and "Back" button elements in the add new plant form.
 * Handles click events to process user input, manage state transitions, and update the modal content accordingly.
 * @param {HTMLElement} nextButton - button element that moves the form to next step or submits form.
 * @param {HTMLElement} input - input element where the user enters data.
 * @param {HTMLElement} errorMessage - element that displays an error message if the input is invalid.
 * @param {Boolean} isFileInput - indicating whether the input is a file input.
 * @param {Object} state - current state of the form, including the current step and accumulated input from user.
 * @param {Function} getImageUrl - retrieves the URL of the selected image file, if applicable.
 * @param {HTMLElement} backButton - element that moves the form to previous step.
 */
export const setUpButtonEventListeners = (nextButton, input, errorMessage, isFileInput, state, getImageUrl, backButton) => {
  localEventManager.addEventListener(nextButton, 'click', (event) => {
    if (input.value === '') {
      errorMessage.style.display = 'block';
      return;
    }
    const userInput = isFileInput ? input.files[0] : input.value;
    const modal = document.querySelector('.new-modal');
    const newState = nextButtonHandler(userInput, state, event, getImageUrl(), modal, backButton);
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
 * @param {String} imageDataUrl - URL of the selected image file, if applicable.
 * @param {HTMLElement} modal - modal element.
 * @returns updated state after handling the "Next" button click.
 */
export const nextButtonHandler = (userInput, state, event, imageDataUrl, modal) => {
  let newPlant = { ...state.newPlant };
  if (state.currentStep === 0) {
    newPlant.name = userInput;
  } else if (state.currentStep === 1) {
    newPlant.dateAdded = userInput;
  } else if (state.currentStep === 2) {
    newPlant.description = userInput;
  } else if (state.currentStep === 3) {
    submitNewPlantHandler(event, newPlant.name, newPlant.dateAdded, newPlant.description, imageDataUrl);
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