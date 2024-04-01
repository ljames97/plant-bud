// plantPageDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
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

/**
 * Remove image input where users can upload imafe from their device.
 */
export const removeImageInput = () => {
  const imageInput = document.querySelector('.edit-plant-image');
  if (imageInput) {
    imageInput.remove();
  }
}

/**
 * Create button for either edit or adding plant to My Plants.
 * @param {String} backButtonText 
 * @param {HTMLElement} sectionBtn 
 * @param {Object} plant 
 * @returns {HTMLElement} sectionBtn. 
 */
export const createSectionBtn = (backButtonText, sectionBtn, plant) => {
  if (backButtonText === '← back to My Plants') {
    return sectionBtn = createElement({tagName: 'button', textContent: 'Edit', classEl: 'edit-btn'});
  } else if (backButtonText === '← back to results' && !plant.isAdded || backButtonText === '← back to search' && !plant.isAdded) {
    return sectionBtn = createElement({tagName: 'button', textContent: 'Add to My Plants', classEl: 'add-to-plants-btn'});
  } else {
    return sectionBtn = createElement({tagName: 'p', textContent: 'Added to My Plants'})
  }
}