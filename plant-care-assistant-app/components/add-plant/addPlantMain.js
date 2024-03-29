// addPlantMain.js
/**
 * Add new plant to the userPlantLog and validate plant details.
 */

import { clearSection, domElements } from "../utils/globalDomManipulation";
import { imageChangeHandler, localEventManager } from "../utils/globalEventHandling";
import { appendChildren } from "../utils/gobalUtility";
import { submitNewPlantHandler } from "./addPlantEventHandling";
import { createManualPlantForm } from "./addPlantDomManipulation";
import { resetSection } from "../plant-page/plantPageMain";
import { renderMyPlants } from "../plant-log/plantLogMain";

/**
 * Render plant form for the user to manually upload a plant to 'My Plants'.
 * Sets up event listeners for image upload and form submission. The image upload
 * listener reads the selected file and stores its data URL for later use.
 */
export const renderManualPlantForm = () => {
  const { plantLogEl } = domElements;
  const { plantForm, name, dateAdded, plantPhoto, description, submitBtn, backBtn } = createManualPlantForm();

  clearSection(plantLogEl, 'PLANT_LOG');
  appendChildren(plantLogEl, backBtn, plantForm);
  
  let imageDataUrl = [];

  localEventManager.addEventListener(plantPhoto, 'change', (event) => {
    imageChangeHandler(event, (dataUrl) => {
      imageDataUrl = dataUrl;
    })
  }, 'ADD_PLANT');

  localEventManager.addEventListener(backBtn, 'click', () => {
    resetSection('.plant-log', renderMyPlants);
  }, 'ADD_PLANT');

  localEventManager.addEventListener(submitBtn, 'click', (event) => {
    submitNewPlantHandler(event, name, dateAdded, description, imageDataUrl);
  }, 'ADD_PLANT');
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