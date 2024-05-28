// addPlantMain.js
/**
 * Main file for the Add To Plant module, centralising the module's functionality.
 * Render plant upload modal, add new plant to the userPlantLog and validate plant details.
 */

import { clearSection, createElement, setUpModal } from "../utils/globalDomUtils";
import { appendChildren } from "../utils/gobalUtility";
import { createModalElements } from "./addPlantDomUtils";

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

  const { input, buttons, errorMessage, label} = createModalElements(tagName, inputText, buttonText, inputType, state, isFileInput, classList, id);
  if (isFileInput) {
    appendChildren(modal, errorMessage, label, buttons);
  } else {
    appendChildren(modal, errorMessage, input, buttons);
  }
};