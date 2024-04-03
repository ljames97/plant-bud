// plantPageEventHandling.js
/**
 * Event handler logic the plant page section.
 */

import { plantLog, renderMyPlants } from "../plant-log/plantLogMain";
import { resetSection } from "../utils/globalDomManipulation";
import { imageChangeHandler, localEventManager } from "../utils/globalEventHandling";
import { renderPlantDetails } from "./plantPageMain";

/**
 * Delete the plant from userPlantLog and reset the My Plants section.
 * @param {Object} plant 
 */
export const deletePlantBtnHandler = (plant) => {
  plantLog.deletePlantFromLog(plant);
  resetSection('.plant-log', renderMyPlants, 'ADD_PLANT');
}

/**
 * Reset plant details to their initial state before any user edits. 
 * @param {Object} plant 
 * @param {Object} elements 
 * @param {String} sectionClass 
 * @param {Function} sectionRender 
 */
export const resetPlantDetailsBtnHandler = (plant, elements, sectionClass, sectionRender) => {
  const originalPlant = plantLog.getOriginalPlant(plant);

  plant.name = originalPlant.name;
  plant.dateAdded = originalPlant.dateAdded;
  plant.description = originalPlant.description;
  plant.image = originalPlant.image;

  elements.sectionContainer.innerHTML = '';
  renderPlantDetails(plant, elements.sectionContainer, '← back to My Plants', sectionClass, sectionRender);
}

/**
 * Set up the delete plant and reset plant details buttons. 
 * @param {Object} plant 
 * @param {Object} elements 
 * @param {String} sectionClass 
 * @param {Function} sectionRender 
 * @param {HTMLElement} deletePlantBtn 
 * @param {HTMLElement} resetPlantDetailsBtn 
 */
export const setUpDeleteResetBtns = (plant, elements, sectionClass, sectionRender, deletePlantBtn, resetPlantDetailsBtn) => {
  localEventManager.addEventListener(deletePlantBtn, 'click', () => {
    deletePlantBtnHandler(plant);
  }, 'PLANT_PAGE');
  localEventManager.addEventListener(resetPlantDetailsBtn, 'click', () => {
    resetPlantDetailsBtnHandler(plant, elements, sectionClass, sectionRender);
  });
}

/**
 * Set up user image input. User can choose a file from their device to uplaod. 
 * @param {HTMLElement} imageInput 
 * @param {Object} elements 
 * @param {String} sectionClass 
 * @param {Object} plant 
 */
export const setUpImageInput = (imageInput, elements, sectionClass, plant) => {
  imageInput.type = 'file';
  imageInput.classList.add('edit-plant-image');
  imageInput.accept = 'image/*';
  elements.plantImageContainer.insertBefore(imageInput, elements.plantImageContainer.firstChild);

  localEventManager.addEventListener(imageInput, 'change', (event) => {
    imageChangeHandler(event, (dataUrl) => {
      plant.image = dataUrl;
      elements.plantImage.src = dataUrl;
    });
  }, `PLANT_PAGE_${sectionClass}`);
}