// addPlantEventHandling.js
/**
 * Event handler logic for adding a new plant to 'My Plants'.
 */

import { plantLog, renderMyPlants } from "../plant-log/plantLogMain";
import { domElements, resetSection } from "../utils/globalDomManipulation";

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