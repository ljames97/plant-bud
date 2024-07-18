// plantPageMain.js

/**
 * Main file for the Plant Page module, centralising the module's functionality.
 * For viewing and editing plant details and plant requirements (watering scheduele, light etc).
 */

import './plantPage.css';
import { findItemInArray, getDate } from "../global/utils";
import { plantLog } from "../plant-log";
import { plantDirectory } from "../global/data";
import { createPlantPageElements } from "./dom-utils";

/**
 * Render plant details on screen.
 * @param {Object} plant 
 * @param {HTMLElement} sectionContainer 
 * @param {string} backButtonText 
 * @param {string} sectionClass
 * @param {Function} sectionRender
 */
export const renderPlantDetails = (plant, sectionContainer, backButtonText, sectionClass, sectionRender) => {
  createPlantPageElements(plant, sectionClass, sectionContainer, backButtonText, sectionRender);
  window.scrollTo(0, 0);
}

/**
 * Permanently deletes plant from the userPlantLog and resets directory plant added status.
 * @param {Object} plant - plant object to be deleted.
 */
export const permanentDeletePlant = (plant) => {
  const directoryPlant = findItemInArray(plantDirectory, plant.id);
  if (directoryPlant) {
    directoryPlant.isAdded = false;
  }
  plantLog.permanentDelete(plant);
}

/**
 * Make a copy of the plant and upload it to the userPlantLog.
 * @param {Object} plant 
 */
export const copyToMyPlants = (plant) => {
  const newPlant = {
    name: plant.name,
    dateAdded: getDate(),
    description: plant.description,
    shortDescription: plant.shortDescription,
    skill: plant.skill,
    flowering: plant.flowering,
    transferToOutdoors: plant.transferToOutdoors,
    waterSchedule: plant.waterSchedule,
    tempLight: plant.tempLight,
    lowEffort: plant.lowEffort,
    image: plant.image,
    id: plant.id,
    requirements: plant.requirements,
    tasks: plant.tasks,
    tags: plant.tags,
  };

  plantLog.addToUserPlantLog(newPlant);
}