// plantPageDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { plantLogElements } from "../plant-log/plantLogDomManipulation";
import { addPlantToGrid, plantLog } from "../plant-log/plantLogMain";
import { clearSection, createElement } from "../utils/globalDomManipulation";
import { appendChildren } from "../utils/gobalUtility";

/**
 * Create dynamic elements for the plant page.
 * @returns dynamic plant elements.
 */
export const createDynamicPlantElements = () => {
  const headerContainer = createElement({tagName: 'div', classEl: 'header-container'});
  const plantTitle = createElement({tagName: 'h1', classEl: 'plant-title'});
  const navContainer = createNavButtons();
  const mainSection = createElement({tagName: 'div', classEl: 'main-plant-section'})
  const plantImageContainer = createElement({tagName: 'div', classEl: 'plant-page-image-container'});
  const plantImage = createElement({tagName: 'img', classEl: 'plant-page-image'});
  const plantDate = createElement({tagName: 'p', classEl: 'plant-date'});
  const { plantDescriptionContainer, plantDescription } = createDescriptionElement();

  return { headerContainer, plantTitle, navContainer, mainSection, plantImageContainer, plantImage, plantDate, plantDescriptionContainer, plantDescription };
}

const createDescriptionElement = () => {
  const plantDescription = createElement({tagName: 'p', classEl: 'plant-description'});
  const plantDescriptionHeader = createElement({tagName: 'p', textContent: 'About', classEl: 'plant-description-header'});
  const plantDescriptionContainer = createElement({tagName: 'div', classEl: 'plant-description-container'});
  appendChildren(plantDescriptionContainer, plantDescriptionHeader, plantDescription);

  return { plantDescriptionContainer, plantDescription }
}

const createNavButtons = () => {
  const navContainer = createElement({tagName: 'div', classEl: 'plant-page-nav-container'});
  const aboutBtn = createElement({tagName: 'button', textContent: 'About', classEl: 'plant-page-nav-button'});
  const requirementsBtn = createElement({tagName: 'button', textContent: 'Requirements', classEl: 'plant-page-nav-button'});
  const userTasksBtn = createElement({tagName: 'button', textContent: 'My tasks', classEl: 'plant-page-nav-button'});

  appendChildren(navContainer, aboutBtn, requirementsBtn, userTasksBtn);

  return navContainer;
}

export const createTagButton = (tagName) => {
  const tagButton = createElement({tagName: 'button', textContent: tagName, classEl: 'tag-button'});
  return tagButton;
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
  } if (backButtonText === '← back to results' && !plant.isAdded || backButtonText === '← back to search' && !plant.isAdded) {
    return sectionBtn = createElement({tagName: 'button', textContent: 'Add to My Plants', classEl: 'add-to-plants-btn'});
  } if (backButtonText === '← back to Plant Archive') {
    return sectionBtn = createElement({tagName: 'button', textContent: 'Unarchive', classEl: 'add-to-plants-btn'});
  } else {
    return sectionBtn = createElement({tagName: 'p', textContent: 'Added to My Plants'})
  }
}