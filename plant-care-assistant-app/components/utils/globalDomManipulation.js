// domManipulation.js
/**
 * For stored dom elements, dynamic elements, and utility functions related to the dom. 
 */

import { hideElements, showElements } from "./gobalUtility";

/**
 * Return most reused dom elements.
 * @returns html elements
 */
export const domElementsManager = () => {
  const dashboard = document.querySelector('.dashboard');
  const plantLogEl = document.querySelector('.plant-log');
  const plantQuiz = document.querySelector('.plant-quiz');
  const plantDiscovery = document.querySelector('.plant-discovery')
  const myPlantsBtn = document.querySelector('.my-plants-btn');
  const plantQuizBtn = document.querySelector('.plant-quiz-btn');
  const discoverBtn = document.querySelector('.discover-btn');
  const plantLogTitle = document.querySelector('.section-title');
  const addNewPlantBtn = document.querySelector('.add-new-plant-btn');
  const userPlantGrid = document.querySelector('.user-plants');

  return { dashboard, plantLogEl, plantQuiz, plantDiscovery, myPlantsBtn, plantQuizBtn, discoverBtn, plantLogTitle, addNewPlantBtn, userPlantGrid };
}

export const globalDomElementsManager = () => {
  const mobileNavModal = document.querySelector('.mobile-nav-modal');
  const mobileMenuBars = document.querySelector('.menu-bars');
  const mobileNavCloseBtn = document.querySelector('.mobile-nav-close-btn');

  return { mobileNavModal, mobileMenuBars, mobileNavCloseBtn };
}

export const domElements = domElementsManager();
export const globalDomElements = globalDomElementsManager();

/**
 * Reset/show the initial static dom elements.
 */
export const resetDomElements = () => {
  const { plantLogTitle, addNewPlantBtn, userPlantGrid } = domElements;
  plantLogTitle.style.display = 'block';
  addNewPlantBtn.style.display = 'flex';
  userPlantGrid.style.display = 'grid';
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

/**
 * Prepare the dashboard by rendering the active section and removing the inactive section.
 * @param {HTMLElement} activeBtn - button clicked.
 * @param  {...HTMLElement} inactiveBtn - buttons not clicked.
 */
export const prepareDashboard = (activeBtn, ...inactiveBtn) => {
  const { plantLogEl, plantQuiz, plantDiscovery, myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;
  activeBtn.classList.add('active');

  inactiveBtn.forEach(button => {
    button.classList.remove('active');
  });

  if (activeBtn !== myPlantsBtn) {
    hideElements(plantLogEl);
  } else {
    showElements('flex', plantLogEl);
  }

  if (activeBtn !== plantQuizBtn) {
    hideElements(plantQuiz);
  } else {
    showElements('flex', plantQuiz);
  }

  if (activeBtn !== discoverBtn) {
    hideElements(plantDiscovery);
  } else {
    showElements('flex', plantDiscovery);
  }

  dashboardNavButtonHighlight();
}

