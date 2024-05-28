import { createElement, createIcon } from "../../utils/globalDomUtils";
import { appendChildren } from "../../utils/gobalUtility";
import { createNavButtons } from "./navDomUtils";

/**
 * Create dynamic elements for the plant page.
 * @returns dynamic plant elements.
 */
export const createDynamicPlantElements = (plant, sectionClass) => {
  const { mainSection, aboutSection, requirementsSection, tasksSection } = createMainSection(plant, sectionClass);
  const headerContainer = createElement({tagName: 'div', classEl: ['header-container']});
  const plantTitle = createElement({tagName: 'h1', classEl: ['plant-title']});
  const navContainer = createNavButtons(aboutSection, requirementsSection, tasksSection, sectionClass);
  const plantImageContainer = createElement({tagName: 'div', classEl: ['plant-page-image-container']});
  const plantImage = createElement({tagName: 'img', classEl: ['plant-page-image']});
  const plantDate = createElement({tagName: 'p', classEl: ['plant-date']});
  const { plantDescriptionContainer, plantDescription } = createDescriptionElement();

  return { headerContainer, plantTitle, navContainer, mainSection, aboutSection, plantImageContainer, plantImage, plantDate, plantDescriptionContainer, plantDescription };
}

/**
 * Creates and returns the main section for a plant page, including about, requirements, and tasks sections.
 * @param {Object} plant - plant object.
 * @param {String} sectionClass - class name for the section.
 */
const createMainSection = (plant, sectionClass) => {
  const plantPageModal = createElement({tagName: 'div', classEl: ['requirement-modal']});
  const aboutSection = createElement({tagName: 'div', classEl: ['about-section']});
  const requirementsSection = createRequirements(plantPageModal, plant, sectionClass);
  const tasksSection = createUserTasks(plant, plantPageModal, sectionClass);
  const mainSection = createElement({tagName: 'div', classEl: ['main-plant-section']});

  appendChildren(mainSection, aboutSection, requirementsSection, tasksSection);

  return { mainSection, aboutSection, requirementsSection, tasksSection };
}

export const createSectionElements = (plant, backButtonText) => {
  const subHeader = createElement({tagName: 'div', classEl: ['sub-header']});
  const permanentDeleteBtn = createElement({tagName: 'button', textContent: 'Permanently Delete', classEl: ['permanent-delete-btn']});
  const backToDashboard = createElement({tagName: 'div', classEl: ['back-button']});
  const backButtonImg = createElement({tagName: 'img'});
  const tagContainer = createTags(plant);
  backButtonImg.src = '../../public/back-button.png';

  let sectionBtn = '';
  sectionBtn = createSectionBtn(backButtonText, sectionBtn, plant);
  sectionBtn.classList.add('section-button');

  return { subHeader, permanentDeleteBtn, backToDashboard, backButtonImg, tagContainer, sectionBtn };
}

/**
 * Creates and returns the plant description element.
 * @returns {Object} Object containing references to the plant description container and plant description element.
 */
const createDescriptionElement = () => {
  const plantDescription = createElement({tagName: 'p', classEl: ['plant-description']});
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
  if (backButtonText === '← back to My Plants') {
    return sectionBtn = createElement({tagName: 'button', textContent: 'Edit', classEl: ['edit-btn']});
  } if (backButtonText === '← back to results' && !plant.isAdded || backButtonText === '← back to search' && !plant.isAdded) {
    return sectionBtn = createElement({tagName: 'button', textContent: 'Add plant', classEl: ['add-to-plants-btn']});
  } if (backButtonText === '← back to Plant Archive') {
    return sectionBtn = createElement({tagName: 'button', textContent: 'Unarchive', classEl: ['add-to-plants-btn']});
  } else {
    return sectionBtn = createIcon();
  }
}