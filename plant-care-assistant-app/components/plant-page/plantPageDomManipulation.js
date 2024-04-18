// plantPageDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { buttonHighlight } from "../plant-discovery/plantDiscoveryDomManipulation";
import { plantLogElements } from "../plant-log/plantLogDomManipulation";
import { addPlantToGrid, plantLog } from "../plant-log/plantLogMain";
import { clearSection, createElement } from "../utils/globalDomManipulation";
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren } from "../utils/gobalUtility";
import { renderPlantSection } from "./plantPageMain";

/**
 * Create dynamic elements for the plant page.
 * @returns dynamic plant elements.
 */
export const createDynamicPlantElements = (plant, sectionClass) => {
  const { mainSection, aboutSection, requirementsSection, tasksSection } = createMainSection(plant);
  const headerContainer = createElement({tagName: 'div', classEl: 'header-container'});
  const plantTitle = createElement({tagName: 'h1', classEl: 'plant-title'});
  const navContainer = createNavButtons(aboutSection, requirementsSection, tasksSection, sectionClass);
  const plantImageContainer = createElement({tagName: 'div', classEl: 'plant-page-image-container'});
  const plantImage = createElement({tagName: 'img', classEl: 'plant-page-image'});
  const plantDate = createElement({tagName: 'p', classEl: 'plant-date'});
  const { plantDescriptionContainer, plantDescription } = createDescriptionElement();

  return { headerContainer, plantTitle, navContainer, mainSection, aboutSection, plantImageContainer, plantImage, plantDate, plantDescriptionContainer, plantDescription };
}

const createMainSection = (plant) => {
  const aboutSection = createElement({tagName: 'div', classEl: 'about-section'});
  const requirementsSection = createRequirements(plant);
  const tasksSection = createUserTasks();
  const mainSection = createElement({tagName: 'div', classEl: 'main-plant-section'});

  appendChildren(mainSection, aboutSection, requirementsSection, tasksSection);

  return { mainSection, aboutSection, requirementsSection, tasksSection };
}

export const createRequirements = (plant) => {
  const requirementsSection = createElement({tagName: 'div', classEl: 'requirements-section'});
  const waterSchedule = createElement({tagName: 'p', textContent: plant.waterSchedule, classEl: 'requirement'});
  const tempLight = createElement({tagName: 'p', textContent: plant.tempLight, classEl: 'requirement'});
  requirementsSection.style.display = 'none';
  appendChildren(requirementsSection, waterSchedule, tempLight);

  return requirementsSection;
}

const createUserTasks = () => {
  const userTaskSection = createElement({tagName: 'div', classEl: 'tasks-section'});
  const newTaskDummy = createElement({tagName: 'p', textContent: 'NEW TASK'});
  userTaskSection.style.display = 'none';
  appendChildren(userTaskSection, newTaskDummy);

  return userTaskSection;
}

const createDescriptionElement = () => {
  const plantDescription = createElement({tagName: 'p', classEl: 'plant-description'});
  const plantDescriptionHeader = createElement({tagName: 'p', textContent: 'Overview', classEl: 'plant-description-header'});
  const plantDescriptionContainer = createElement({tagName: 'div', classEl: 'plant-description-container'});
  appendChildren(plantDescriptionContainer, plantDescriptionHeader, plantDescription);

  return { plantDescriptionContainer, plantDescription }
}

const createNavButtons = (aboutSection, requirementsSection, tasksSection, sectionClass) => {
  const navContainer = createElement({tagName: 'div', classEl: 'plant-page-nav-container'});
  const aboutBtn = createElement({tagName: 'button', textContent: 'About', classEl: 'plant-page-nav-button', id: 'about-nav'});
  const requirementsBtn = createElement({tagName: 'button', textContent: 'Requirements', classEl: 'plant-page-nav-button', id: 'requirement-nav'});
  const userTasksBtn = createElement({tagName: 'button', textContent: 'Tasks', classEl: 'plant-page-nav-button', id: 'task-nav'});
  aboutBtn.classList.add('active');

  // nav btn data
  aboutBtn.inactiveBtns = [requirementsBtn, userTasksBtn];
  requirementsBtn.inactiveBtns = [aboutBtn, userTasksBtn];
  userTasksBtn.inactiveBtns = [aboutBtn, requirementsBtn];

  aboutBtn.inactiveSections = [requirementsSection, tasksSection];
  requirementsBtn.inactiveSections = [aboutSection, tasksSection];
  userTasksBtn.inactiveSections = [aboutSection, requirementsSection];

  aboutBtn.activeSection = aboutSection;
  requirementsBtn.activeSection = requirementsSection;
  userTasksBtn.activeSection = tasksSection;
  const navButtons = [aboutBtn, requirementsBtn, userTasksBtn];

  buttonHighlight(aboutBtn, '#334521', '#dcd5cd', 'white', 'black', ...aboutBtn.inactiveBtns);

  navButtons.forEach(btn => {
    localEventManager.addEventListener(btn, 'click', () => {
      buttonHighlight(btn, '#334521', '#dcd5cd', 'white', 'black', ...btn.inactiveBtns);
      if (btn.classList.contains('active')) {
        renderPlantSection(btn.activeSection, ...btn.inactiveSections);
      }
    }, `PLANT_PAGE_${sectionClass}`);
  });

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