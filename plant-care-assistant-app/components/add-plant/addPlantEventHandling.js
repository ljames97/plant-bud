// addPlantEventHandling.js
/**
 * Event handler logic for adding a new plant to 'My Plants'.
 */

import { validatePlantData } from "./addPlantMain";
import { plantLog, renderMyPlants } from "../plant-log/plantLogMain";
import { resetSection } from "../utils/globalDomManipulation";

/**
 * Validates the form data, creates a new plant object, adds it to the plant log,
 * and updates the UI to reflect the new addition.
 * @param {Event} event 
 * @param {HTMLElement} plantName - user input field for plant name (date, description etc.)
 * @param {HTMLElement} dateAdded 
 * @param {HTMLElement} description 
 * @param {HTMLElement} imageDataUrl
 */
export const submitNewPlantHandler = (event, plantName, dateAdded, description, imageDataUrl) => {
  event.preventDefault();

  const dataValidation = validatePlantData(plantName.value, dateAdded.value, imageDataUrl);
  if (!dataValidation.isValid) {
    console.log(dataValidation.errors);
    return;
  }

  const newPlant = {
    name: plantName.value,
    dateAdded: dateAdded.value,
    description: description.value,
    image: imageDataUrl,
    id: Date.now(),
    requirements: [],
    tasks: []
  };

  plantLog.addToUserPlantLog(newPlant);
  resetSection('.plant-log', renderMyPlants, 'ADD_PLANT');
}