// addPlantMain.js
/**
 * Add new plant to the userPlantLog, validate plant details and submit new plant data.
 */

import { domElements } from "../utils/globalDomManipulation";
import { imageChangeHandler, localEventManager } from "../utils/globalEventHandling";
import { appendChildren, hideElements, removeChildren } from "../utils/gobalUtility";
import { submitHandler } from "./addPlantEventHandling";
import { createManualPlantForm } from "./addPlantDomManipulation";
import { plantLogElements } from "../plant-log/plantLogDomManipulation";

/**
 * Render user plant form for manual plant entry.
 * Sets up event listeners for image upload and form submission. The image upload
 * listener reads the selected file and stores its data URL for later use.
 * @param {HTMLElement} userSearch 
 * @param {HTMLElement} cancelSearchBtn 
 */
export const renderManualPlantForm = (plantLogTitle, addPlantBtn, userPlantsContainer) => {
  const { plantLogEl } = domElements;
  const { plantForm, name, dateAdded, plantPhoto, description, submitBtn, cancelBtn } = createManualPlantForm();

  hideElements(plantLogTitle, addPlantBtn, userPlantsContainer);
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
    submitHandler(event, name, dateAdded, description, imageDataUrl, plantForm, cancelBtn);
  });
}

const cancelManualButtonClickHandler = (plantForm, plantLogEl, cancelBtn) => {
  removeChildren(plantLogEl, plantForm, cancelBtn);
  plantLogElements.resetPlantLogElements();
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