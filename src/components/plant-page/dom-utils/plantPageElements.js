// plantPageElements.js

import { backButtonDark, backButtonLight } from "../../../images";
import { createElement, createIcon } from "../../global/dom-utils";
import { appendChildren, findItemInArray } from "../../global/utils";
import { isPlantAdded } from "../../plant-library";
import { plantLog } from "../../plant-log";
import { setUpPlantPageListeners } from "../event-handlers";
import { createNavButtons } from "./navDomUtils";
import { createRequirements } from "./requirementsDomUtils";
import { createTags } from "./tagDomUtils";
import { createUserTasks } from "./tasksDomUtils";

/**
 * Create dynamic elements for the plant page.
 * @returns dynamic plant elements.
 */
export const createPlantPageElements = (plant, sectionClass, sectionContainer, backButtonText, sectionRender) => {
  const { mainSection, aboutSection, requirementsSection, tasksSection } = createMainSection(plant, sectionClass);
  const archiveText = createElement({tagName: 'p', textContent: 'This plant has been archived', classEl: ['archived-plant-message']});
  checkIfArchived(plant, archiveText);
  const headerContainer = createElement({tagName: 'div', classEl: ['header-container']});
  const plantTitle = createElement({tagName: 'h1', textContent: plant.name, classEl: ['plant-title']});
  const navContainer = createNavButtons(aboutSection, requirementsSection, tasksSection, sectionClass);
  const plantImageContainer = createElement({tagName: 'div', classEl: ['plant-page-image-container']});
  const plantImage = createElement({tagName: 'img', classEl: ['plant-page-image'], alt: 'Plant image'});
  const { plantDescriptionContainer, plantDescription } = createDescriptionElement(plant);
  const subHeader = createElement({tagName: 'div', classEl: ['sub-header']});
  const backToDashboard = createElement({tagName: 'div', classEl: ['back-button'], ariaLabel: 'Back to dahsboard'});
  const backButtonImg = createElement({tagName: 'img', alt: 'Back button image'});
  const tagContainer = createTags(plant); 
  backButtonImg.src = backButtonLight;
  plantImage.src = plant.image;

  let sectionBtn = '';
  sectionBtn = createSectionBtn(backButtonText, sectionBtn, plant);
  sectionBtn.classList.add('section-button');

  appendChildren(backToDashboard, backButtonImg);
  appendChildren(headerContainer, backToDashboard, plantTitle, sectionBtn);
  appendChildren(plantImageContainer, plantImage);
  appendChildren(aboutSection, plantImageContainer, tagContainer, plantDescriptionContainer);
  appendChildren(sectionContainer, archiveText, subHeader, headerContainer, navContainer, mainSection);

  setUpPlantPageListeners(sectionBtn, plant, plantTitle, plantDescription, plantImageContainer, plantImage, sectionContainer, sectionClass, sectionRender, subHeader, backToDashboard);

}

const checkIfArchived = (plant, archivedText) => {
  const deletedPlants = plantLog.getDeletedPlants();
  const foundDeletedPlant = findItemInArray(deletedPlants, plant.id);
  foundDeletedPlant ? '' : archivedText.classList.add('hidden');
}

/**
 * Creates and returns the main section for a plant page, including about, requirements, and tasks sections.
 * @param {Object} plant - plant object.
 * @param {String} sectionClass - class name for the section.
 */
export const createMainSection = (plant, sectionClass) => {
  const plantPageModal = createElement({tagName: 'div', classEl: ['requirement-modal', 'hidden']});
  const aboutSection = createElement({tagName: 'div', classEl: ['about-section', 'flex']});
  const requirementsSection = createRequirements(plantPageModal, plant, sectionClass);
  const tasksSection = createUserTasks(plant, plantPageModal, sectionClass);
  const mainSection = createElement({tagName: 'div', classEl: ['main-plant-section']});

  appendChildren(mainSection, aboutSection, requirementsSection, tasksSection);

  return { mainSection, aboutSection, requirementsSection, tasksSection };
}

/**
 * Creates and returns the plant description element.
 * @returns {Object} Object containing references to the plant description container and plant description element.
 */
export const createDescriptionElement = (plant) => {
  const plantDescription = createElement({tagName: 'p', textContent: plant.description, classEl: ['plant-description']});
  const plantDescriptionHeader = createElement({tagName: 'p', textContent: 'Overview', classEl: ['plant-description-header']});
  const plantDescriptionContainer = createElement({tagName: 'div', classEl: ['plant-description-container']});
  appendChildren(plantDescriptionContainer, plantDescriptionHeader, plantDescription);

  return { plantDescriptionContainer, plantDescription }
}

/**
 * Create button for either editing or adding plant to My Plants.
 * @param {String} backButtonText 
 * @param {HTMLElement} sectionBtn 
 * @param {Object} plant 
 * @returns {HTMLElement} sectionBtn. 
 */
export const createSectionBtn = (backButtonText, sectionBtn, plant) => {
  const isAdded = isPlantAdded(plant);
  const isArchived = findItemInArray(plantLog.getDeletedPlants(), plant.id);
  if (backButtonText === '← back to My Plants') {
    return sectionBtn = createElement({tagName: 'button', textContent: 'Edit', id: 'edit-btn', classEl: ['edit-btn']});
  } if (backButtonText === '← back to results' && !isAdded || backButtonText === '← back to search' && !isAdded) {
    return sectionBtn = createElement({tagName: 'button', textContent: 'Add plant', classEl: ['add-to-plants-btn']});
  } if (isArchived) {
    return sectionBtn = createIcon('ARCHIVE')
  } else {
    return sectionBtn = createIcon('ADDED');
  }
}