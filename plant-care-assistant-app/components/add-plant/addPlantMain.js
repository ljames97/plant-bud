// addPlantMain.js
/**
 * Main file for the Add To Plant module, centralising the module's functionality.
 * Render plant upload modal, add new plant to the userPlantLog and validate plant details.
 */

import { clearSection, createElement } from "../utils/globalDomManipulation";
import { imageChangeHandler, localEventManager } from "../utils/globalEventHandling";
import { appendChildren } from "../utils/gobalUtility";

import { submitNewPlantHandler } from "./addPlantEventHandling";
import { removeModal, setUpModal } from "../plant-page/plantPageDomManipulation";

/**
 * Render plant form for the user to manually upload a plant to 'My Plants'.
 * Sets up event listeners for image upload and form submission. The image upload
 * listener reads the selected file and stores its data URL for later use.
 */
export const renderAddPlantModal = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const addPlantModal = createElement({ tagName: 'div', classEl: ['new-modal'] });

  setUpModal(addPlantModal, null, 'ADD_MODAL');
  appendChildren(modalOverlay, addPlantModal);

  updateModalContent(addPlantModal, { currentStep: 0, newPlant: {} });
};

/**
 * Update modal content based on current step. Simulates a quiz-like modal UI.
 * @param {HTMLElement} modal - eg. addPlantModal
 * @param {Object} state - currentStep count and plant object
 */
const updateModalContent = (modal, state) => {
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

  const { input, buttons, errorMessage, label} = createModalElements(tagName, inputText, buttonText, inputType, state, isFileInput, classList, id);
  if (isFileInput) {
    appendChildren(modal, errorMessage, label, buttons);
  } else {
    appendChildren(modal, errorMessage, input, buttons);
  }
};

/**
 * Create elements for the add new plant modal. 
 * @param {String} tagName - tag name for the input element (e.g., 'input', 'textarea').
 * @param {String} inputText - placeholder text for the input element.
 * @param {String} buttonText - text to display on the button.
 * @param {} inputType - type attribute for the input element (e.g., 'text', 'date').
 * @param {Object} state -  current state of the modal, including the current step and new plant data.
 * @param {Boolean} isFileInput - boolean indicating if the input is a file input.
 * @param {Array} classList - array of class names to apply to the input element.
 * @param {Number} id - ID attribute for the input element.
 * @returns an object containing the created elements: input, buttons, nextButton, backButton, errorMessage, and optionally label.
 */
const createModalElements = (tagName, inputText, buttonText, inputType, state, isFileInput, classList, id) => {
  const input = createElement({ tagName: tagName, placeholder: inputText, classEl: classList, type: isFileInput ? 'file' : inputType, id: id });
  const errorMessage = createElement({tagName: 'p', textContent: 'Please complete field', classEl: ['modal-error-message']});
  let getImageUrl = () => null;
  let label;

  if (isFileInput) {
    const fileInputElements = createFileInputElements(input);
    label = fileInputElements.labelElement;
    getImageUrl = fileInputElements.getImageUrl;
  }

  const { buttons, nextButton, backButton } = createButtons(state, input, errorMessage, buttonText, isFileInput, getImageUrl);
  return { input, buttons, nextButton, backButton, errorMessage, label };
};

/**
 * Creates and sets up elements specifically for file input handling within the modal.
 * @param {HTMLElement} input - input element to be configured as a file input.
 * @returns an object containing the labelElement and getImageUrl function.
 */
const createFileInputElements = (input) => {
  input.setAttribute('accept', 'image/*');
  const labelElement = createElement({tagName: 'label', classEl: ['file-upload'], fr: 'file-upload'});
  const heading = createElement({tagName: 'p', textContent: 'Upload a photo', classEl: ['upload-image-heading']});
  const imageInputImg = createElement({tagName: 'img', classEl: ['image-input-img']});
  imageInputImg.src = '../../public/footer-nav-icons/add.png';
  let imageUrl;

  appendChildren(labelElement, heading, imageInputImg, input);

  localEventManager.addEventListener(input, 'change', (event) => {
    imageChangeHandler(event, (dataUrl) => {
      imageUrl = dataUrl;
      imageInputImg.src = dataUrl;
      imageInputImg.classList.add('large-image');
      heading.style.display = 'none';
    })
  }, 'ADD_PLANT');

  return { labelElement, getImageUrl: () => imageUrl };
}

/**
 * Creates the "Next" and "Back" buttons for the modal and sets up their event listeners.
 * @param {Object} state - current state of the modal, including the current step and new plant data.
 * @param {HTMLElement} input - input element for the current modal step.
 * @param {HTMLElement} errorMessage - error message element to display if input validation fails.
 * @param {String} buttonText - text to display on the "Next" button.
 * @param {Boolean} isFileInput - boolean indicating if the input is a file input.
 * @param {Function} getImageUrl - function to get the URL of the selected image file, if applicable.
 * @returns an object containing the buttons element, nextButton, and backButton.
 */
const createButtons = (state, input, errorMessage, buttonText, isFileInput, getImageUrl) => {
  const nextButton = createElement({ tagName: 'button', textContent: buttonText, classEl: ['next-button', 'submit-btn'] });
  const backButton = createElement({ tagName: 'button', textContent: 'Back', classEl: ['submit-btn'] });
  const buttons = createElement({tagName: 'div', classEl: ['plant-form-buttons']});

  if (state.currentStep > 0) {
    appendChildren(buttons, backButton);
  }
  appendChildren(buttons, nextButton);

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

  return { buttons, nextButton, backButton };
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
const nextButtonHandler = (userInput, state, event, imageDataUrl, modal) => {
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
const backButtonHandler = (state) => {
  if (state.currentStep > 0) {
    return { currentStep: state.currentStep - 1, newPlant: state.newPlant };
  }
  return state;
};