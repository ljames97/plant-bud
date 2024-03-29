// plantPageDomManipulation.js
/**
 * For stored dom elements, dynamic elements, and utility functions related to the dom. 
 */

import { plantLogElements } from "../plant-log/plantLogDomManipulation";
import { addPlantToGrid, plantLog } from "../plant-log/plantLogMain";
import { clearSection, createElement } from "../utils/globalDomManipulation";

/**
 * Create dynamic elements for the plant page.
 * @returns dynamic plant elements.
 */
export const createDynamicPlantElements = () => {
  const plantTitle = createElement({tagName: 'h1', classEl: 'plant-title'});
  const plantImageContainer = createElement({tagName: 'div', classEl: 'plant-image-container'});
  const plantImage = createElement({tagName: 'img'});
  const plantDate = createElement({tagName: 'p', classEl: 'plant-date'});
  const plantDescription = createElement({tagName: 'p', classEl: 'plant-description'});

  return { plantTitle, plantImageContainer, plantImage, plantDate, plantDescription };
}

/**
 * Refresh plant grid by removing existing inner html and updating the userPlantLog.
 */
export const refreshPlantGrid = () => {
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();

  clearSection(userPlantsContainer, 'PLANT_LOG')

  const userPlantLog = plantLog.getUserPlantLog();
  userPlantLog.forEach(plant => {
    addPlantToGrid(plant);
  })
}