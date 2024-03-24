// addNewPlant.js
/**
 * Add new plant to the userPlantLog, validate plant details and submit new plant data.
 */

import { createElement, domElements, hideInitialDomElements, resetDomElements } from "./domManipulation";
import { imageChangeHandler, localEventManager, submitHandler } from "./eventHandling";
import { searchButtonClickHandler } from "./plant-discovery/plant-discovery";
import { appendChildren, hideElements, removeChildren, showElements } from "./utility";

/**
 * Render manual plant upload button on screen. Included button click handlers.
 * @param {HTMLElement} userSearch 
 * @param {HTMLElement} errorMessage 
 * @param {HTMLElement} userSearchInput 
 * @param {HTMLElement} searchButton 
 * @param {HTMLElement} cancelSearchBtn 
 */
export const renderManualPlantUploadBtn = (userSearch, errorMessage, userSearchInput, searchButton, cancelSearchBtn) => {
  const manualUploadBtn = createElement({tagName: 'button', textContent: 'Manual Upload', classEl: 'manual-upload-btn'});
  appendChildren(userSearch, manualUploadBtn);

  const manualUploadClickHandler = () => {
    renderManualPlantForm(userSearch, cancelSearchBtn);
    removeChildren(userSearch, manualUploadBtn, errorMessage, userSearchInput, searchButton);
  }

  const showButtonClickHandler = () => {
    localEventManager.addEventListener(searchButton, 'click', () => {
      showElements('block', errorMessage, manualUploadBtn);
    })
  }

  localEventManager.addEventListener(manualUploadBtn, 'click', manualUploadClickHandler);
  localEventManager.addEventListener(userSearchInput, 'click', () => {
    hideElements(errorMessage, manualUploadBtn);
    showButtonClickHandler(searchButton);
  });

  localEventManager.addEventListener(searchButton, 'click', searchButtonClickHandler)
}

/**
 * Render user plant form for manual plant entry.
 * Sets up event listeners for image upload and form submission. The image upload
 * listener reads the selected file and stores its data URL for later use.
 * @param {HTMLElement} userSearch 
 * @param {HTMLElement} cancelSearchBtn 
 */
export const renderManualPlantForm = () => {
  const { plantLogEl, userPlantGrid } = domElements;
  const { plantForm, name, dateAdded, plantPhoto, description, submitBtn, cancelBtn } = createManualPlantForm();

  hideInitialDomElements();
  hideElements(userPlantGrid);
  appendChildren(plantLogEl, plantForm, cancelBtn);
  
  let imageDataUrl = [];

  localEventManager.addEventListener(plantPhoto, 'change', (event) => {
    imageChangeHandler(event, (dataUrl) => {
      imageDataUrl = dataUrl;
    })
  });

  localEventManager.addEventListener(cancelBtn, 'click', () => {
    cancelManualButtonClickHandler(plantForm, plantLogEl, cancelBtn);
  })

  localEventManager.addEventListener(submitBtn, 'click', (event) => {
    submitHandler(event, name, dateAdded, description, imageDataUrl, plantForm);
  });
}

const cancelManualButtonClickHandler = (plantForm, plantLogEl, cancelBtn) => {
  removeChildren(plantLogEl, plantForm, cancelBtn);
  resetDomElements();
}

/**
 * Creates form for user to upload plant manually
 * @returns user plant upload form
 */
const createManualPlantForm = () => {
  const plantForm = createElement({tagName: 'form', classEl: 'manual-plant-form'});
  const name = createElement({tagName: 'input', placeholder: 'Plant name'});
  const dateAdded = createElement({tagName: 'input', placeholder: 'Date added'});
  const cancelBtn = createElement({tagName: 'button', textContent: 'Cancel', classEl: 'cancel-search-btn'});

  const plantPhoto = createElement({tagName: 'input', classEl: 'plant-photo-input'});
  plantPhoto.setAttribute('type', 'file');
  plantPhoto.setAttribute('accept', 'image/*');

  const submitBtn = createElement({tagName: 'button', textContent: 'Add My Plant'});
  // may add watering scheduele, similar plants etc.
  const description = createElement({tagName: 'textarea', placeholder: 'Description'})
  appendChildren(plantForm, name, dateAdded, plantPhoto, description, submitBtn);

  return { plantForm, name, dateAdded, plantPhoto, description, submitBtn, cancelBtn };
}

/**
 * Validate plant data and return error messages
 * @param {string} name 
 * @param {string} dateAdded 
 * @param {string} imageDataUrl 
 * @returns errors
 */
export const validatePlantData = (name, dateAdded, imageDataUrl) => {
  let errors = [];

  if (name === '') {
    errors.push('Plant name is required.');
  } if (dateAdded === '') {
    errors.push('Date added required.');
  } if (imageDataUrl.length === 0) {
    errors.push('Upload a valid image');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}