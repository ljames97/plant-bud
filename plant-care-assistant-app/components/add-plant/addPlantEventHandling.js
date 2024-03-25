// addPlantEventHandling.js
/**
 * Event handler logic.
 */

import { domElements, resetDomElements } from "../utils/globalDomManipulation";
import { removeChildren } from "../utils/gobalUtility";
import { addToMyPlants } from "../plant-page/plantPageMain";
import { validatePlantData } from "./addPlantMain";

/**
 * Validates the form data, creates a new plant object, adds it to the plant log,
 * and updates the UI to reflect the new addition.
 * @param {*} event 
 * @param {*} name 
 * @param {*} dateAdded 
 * @param {*} imageDataUrl 
 * @param {*} plantLog 
 * @param {*} mainElement 
 * @param {*} plantForm 
 * @returns 
 */
export const submitHandler = (event, name, dateAdded, descripiton, imageDataUrl, plantForm, cancelBtn) => {
  event.preventDefault();

  const { plantLogEl } = domElements;

  const dataValidation = validatePlantData(name.value, dateAdded.value, imageDataUrl);

  if (!dataValidation.isValid) {
    console.log(dataValidation.errors);
    return;
  }

  const newPlant = {
    name: name.value,
    dateAdded: dateAdded.value,
    description: descripiton.value,
    image: imageDataUrl,
    id: Date.now()
  };

  addToMyPlants(newPlant);
  removeChildren(plantLogEl, plantForm, cancelBtn);

  resetDomElements();
}