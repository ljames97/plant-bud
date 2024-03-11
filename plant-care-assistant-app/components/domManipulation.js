// domManipulation.js
/**
 * For stored dom elements, dynamic elements, and utility functions related to the dom. 
 */

import { addPlantToGrid, plantLog } from "./plantLog";
import { hideElements, showElements } from "./utility";

/**
 * Return most reused dom elements.
 * @returns html elements
 */
export const domElementsManager = () => {
  const dashboard = document.querySelector('.dashboard');
  const plantLog = document.querySelector('.plant-log');
  const plantQuiz = document.querySelector('.plant-quiz')
  const myPlantsBtn = document.querySelector('.my-plants-btn');
  const plantQuizBtn = document.querySelector('.plant-quiz-btn');
  const discoverBtn = document.querySelector('.discover-btn');
  const plantLogTitle = document.querySelector('.section-title');
  const addNewPlantBtn = document.querySelector('.add-new-plant-btn');
  const userPlantGrid = document.querySelector('.user-plants');

  return { dashboard, plantLog, plantQuiz, myPlantsBtn, plantQuizBtn, discoverBtn, plantLogTitle, addNewPlantBtn, userPlantGrid };
}

export const domElements = domElementsManager();

export const resetDomElements = () => {
  const { plantLogTitle, addNewPlantBtn, userPlantGrid } = domElements;
  plantLogTitle.style.display = 'block';
  addNewPlantBtn.style.display = 'flex';
  userPlantGrid.style.display = 'grid';
}

/**
 * Create dynamic elements for the plant page.
 * @returns dynamic plant elements.
 */
export const createDynamicPlantElements = () => {
  const plantTitle = createElement({tagName: 'h1', classEl: 'plant-title'});
  const plantImageContainer = createElement({tagName: 'div', classEl: 'plant-image-container'});
  const plantImage = createElement({tagName: 'img'});
  const plantDate = createElement({tagName: 'p', classEl: 'plant-date'});
  const plantNotes = createElement({tagName: 'p', classEl: 'plant-description'});

  return { plantTitle, plantImageContainer, plantImage, plantDate, plantNotes };
}

/**
 * Utility function to create a new HTML element.
 * @param {HTMLElement} tagName - Type of element to create (eg. 'div', 'button').
 * @param {string} placeholder - Placeholder text for input elements.
 * @param {string} textContent - Text content for the element.
 * @param {string} classEl - CSS class to assign to the element.
 * @param {string} id - ID to assign to the element.
 * @param {string} value - Value attribute for input elements.
 * @returns {HTMLElement} Newly created HTML element.
 */
export const createElement = ( { tagName = '', placeholder = '', textContent = '', classEl = '', id = '', value = '', dataAttributes = {} }) => {
  const element = document.createElement(tagName);
  if (placeholder) element.placeholder = placeholder;
  if (textContent) element.textContent = textContent;
  if (classEl) element.classList.add(classEl);
  if (id) element.id = id;
  if (value) element.value = value;

  Object.keys(dataAttributes).forEach(key => {
    element.setAttribute(`data-${key}`, dataAttributes[key]);
  });

  return element;
}

/**
 * Utility function to hide initial dom elements.
 */
export const hideInitialDomElements = () => {
  const { plantLogTitle, addNewPlantBtn } = domElements;

  plantLogTitle.style.display = 'none';
  addNewPlantBtn.style.display = 'none';
}

/**
 * Refresh plant grid by removing existing inner html and updating the userPlantLog.
 */
export const refreshPlantGrid = () => {
  const { userPlantGrid } = domElements;
  userPlantGrid.innerHTML = '';

  plantLog.userPlantLog.forEach(plant => {
    addPlantToGrid(plant);
  })
}

/**
 * Prepare the dashboard by rendering the active section and removing the inactive section.
 * @param {HTMLElement} activeBtn - button clicked.
 * @param  {...HTMLElement} inactiveBtn - buttons not clicked.
 */
export const prepareDashboard = (activeBtn, ...inactiveBtn) => {
  const { plantLog, plantQuiz, myPlantsBtn, plantQuizBtn } = domElements;
  activeBtn.classList.add('active');

  inactiveBtn.forEach(button => {
    button.classList.remove('active');
  });

  if (activeBtn !== myPlantsBtn) {
    hideElements(plantLog);
  } else {
    showElements('flex', plantLog);
  }

  if (activeBtn !== plantQuizBtn) {
    hideElements(plantQuiz);
  } else {
    showElements('flex', plantQuiz);
  }

  dashboardNavButtonHighlight();
}

/**
 * Highlight the active dashboard button. Eg. My Plants, Plant Quiz or Discover.
 */
export const dashboardNavButtonHighlight = () => {
  const { myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;
  const dashboardButtons = [myPlantsBtn, plantQuizBtn, discoverBtn];

  dashboardButtons.forEach(button => {
    if (button.classList.contains('active')) {
      button.style.backgroundColor = '#cd7647';
    } else {
      button.style.backgroundColor = '#8F4721'
    }
  });
}

export const dynamicPlantElements = createDynamicPlantElements();

