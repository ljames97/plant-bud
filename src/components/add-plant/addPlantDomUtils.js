// addPlantDomUtils.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { addIconLight } from "../../images";
import { createElement } from "../global/dom-utils";
import { appendChildren } from "../global/utils";
import { setUpButtonEventListeners, setUpInputChangeListener } from "./addPlantEventHandlers";

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
export const createModalElements = (tagName, inputText, buttonText, inputType, state, isFileInput, classList, id) => {
  const input = createElement({ tagName: tagName, placeholder: inputText, classEl: classList, type: isFileInput ? 'file' : inputType, id: id });
  const errorMessage = createElement({tagName: 'p', textContent: 'Please complete field', classEl: ['modal-error-message']});
  let getImageFile = () => null;
  let label;

  if (isFileInput) {
    const fileInputElements = createFileInputElements(input);
    label = fileInputElements.labelElement;
    getImageFile = fileInputElements.getImageFile;
  }

  const { buttons, nextButton, backButton } = createButtons(state, input, errorMessage, buttonText, isFileInput, getImageFile);
  return { input, buttons, nextButton, backButton, errorMessage, label };
};

/**
 * Creates and sets up elements specifically for file input handling within the modal.
 * @param {HTMLElement} input - input element to be configured as a file input.
 * @returns an object containing the labelElement and getImageUrl function.
 */
export const createFileInputElements = (input) => {
  input.setAttribute('accept', 'image/*');
  const labelElement = createElement({tagName: 'label', classEl: ['file-upload'], fr: 'file-upload'});
  const heading = createElement({tagName: 'p', textContent: 'Upload a photo', classEl: ['upload-image-heading']});
  const imageInputImg = createElement({tagName: 'img', classEl: ['image-input-img']});
  imageInputImg.src = addIconLight;

  appendChildren(labelElement, heading, imageInputImg, input);

  const getImageFile = setUpInputChangeListener(input, imageInputImg, heading);

  return { labelElement, getImageFile };
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
export const createButtons = (state, input, errorMessage, buttonText, isFileInput, getImageFile) => {
  const nextButton = createElement({ tagName: 'button', textContent: buttonText, classEl: ['next-button', 'submit-btn'] });
  const backButton = createElement({ tagName: 'button', textContent: 'Back', classEl: ['submit-btn'] });
  const buttons = createElement({tagName: 'div', classEl: ['plant-form-buttons']});

  if (state.currentStep > 0) {
    appendChildren(buttons, backButton);
  }
  appendChildren(buttons, nextButton);

  setUpButtonEventListeners(nextButton, input, errorMessage, isFileInput, state, getImageFile, backButton);

  return { buttons, nextButton, backButton };
}