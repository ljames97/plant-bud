// addPlantMain.js
/**
 * Main file for the Add To Plant module, centralising the module's functionality.
 * Render plant upload form, add new plant to the userPlantLog and validate plant details.
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

  const { input, buttons, nextButton, backButton, errorMessage, label } = createModalElements(tagName, inputText, buttonText, inputType, state, isFileInput, classList, id);
  if (isFileInput) {
    appendChildren(modal, errorMessage, label, buttons);
  } else {
    appendChildren(modal, errorMessage, input, buttons);
  }
};

const createModalElements = (tagName, inputText, buttonText, inputType, state, isFileInput, classList, id) => {
  const input = createElement({ tagName: tagName, placeholder: inputText, classEl: classList, type: isFileInput ? 'file' : inputType, id: id });
  const errorMessage = createElement({tagName: 'p', textContent: 'Please complete field', classEl: ['modal-error-message']});
  let imageDataUrl = [];
  let label;

  if (isFileInput) {
    input.setAttribute('accept', 'image/*');
    label = createElement({tagName: 'label', classEl: ['file-upload'], fr: 'file-upload'});
    const heading = createElement({tagName: 'p', textContent: 'Upload a photo', classEl: ['upload-image-heading']});
    const imageInputImg = createElement({tagName: 'img', classEl: ['image-input-img']});
    imageInputImg.src = '../../public/footer-nav-icons/add.png';

    appendChildren(label, heading, imageInputImg, input);

    localEventManager.addEventListener(input, 'change', (event) => {
      imageChangeHandler(event, (dataUrl) => {
        imageDataUrl = dataUrl;
        imageInputImg.src = dataUrl;
        imageInputImg.classList.add('large-image');
        heading.style.display = 'none';
      })
    }, 'ADD_PLANT');
  }

  const nextButton = createElement({ tagName: 'button', textContent: buttonText, classEl: ['next-button', 'submit-btn'] });
  const backButton = createElement({ tagName: 'button', textContent: 'Back', classEl: ['back-button', 'submit-btn'] });
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
    const newState = nextButtonHandler(userInput, state, event, imageDataUrl, modal, backButton);
    if (modal) {
      updateModalContent(modal, newState);
    }
  }, 'ADD_PLANT');


  localEventManager.addEventListener(backButton, 'click', (event) => {
    const modal = document.querySelector('.new-modal');
    const newState = backButtonHandler(state);
    if (modal) {
      updateModalContent(modal, newState);
    }
  }, 'ADD_PLANT');

  return { input, buttons, nextButton, backButton, errorMessage, label };
};

const nextButtonHandler = (userInput, state, event, imageDataUrl, modal, backButton) => {
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

const backButtonHandler = (state) => {
  if (state.currentStep > 0) {
    return { currentStep: state.currentStep - 1, newPlant: state.newPlant };
  }
  return state;
};