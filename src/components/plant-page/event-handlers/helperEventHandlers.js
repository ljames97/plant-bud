// helperEventHandlers.js

import { plantLog } from "../../plant-log";
import { resetSection } from "../../global/dom-utils";
import { replaceButton } from "../dom-utils";
import { copyToMyPlants, permanentDeletePlant } from "../plantPageMain";

/**
 * Remove the plant from the deleted plants log and render the deleted plants page.
 * @param {Object} plant 
 */
export const unarchiveBtnHandler = (plant, sectionClass, sectionRender) => {
  plantLog.removeFromDeletedPlants(plant);
  resetSection(sectionClass, sectionRender, `PLANT_PAGE_${sectionClass}`);
  plant.selected = false;
}

/**
 * Add the plant to My Plants and change the button to text. 
 * @param {HTMLElement} sectionBtn 
 * @param {Object} plant 
 */
export const addToPlantsHandler = (sectionBtn, plant) => {
  copyToMyPlants(plant);
  replaceButton(sectionBtn, plant);
}

/**
 * Update the 'isAdded' for the plant if it was originally added from the plant directory.
 * Remove the plant from all plant log arrays found in the plantLogManager.
 * @param {Object} plant 
 */
export const permanentDeleteBtnHandler = (plant, sectionClass, sectionRender) => {
  permanentDeletePlant(plant);
  resetSection(sectionClass, sectionRender, `PLANT_PAGE_${sectionClass}`)
}