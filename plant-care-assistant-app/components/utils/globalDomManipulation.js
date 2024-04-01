// globalDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for global DOM manipulation.
 * Functions in this file are shared across several modules. 
 */

import { plantLogElements } from "../plant-log/plantLogDomManipulation";
import { localEventManager } from "./globalEventHandling";
import { hideElements, showElements } from "./gobalUtility";

/**
 * Return static DOM elements in the dashboard.
 * @returns {Object} HTML elements
 */
export const dashboardDomElementsManager = () => {
  const dashboard = document.querySelector('.dashboard');
  const plantLogEl = document.querySelector('.plant-log');
  const plantQuiz = document.querySelector('.plant-quiz');
  const plantDiscovery = document.querySelector('.plant-discovery')
  const myPlantsBtn = document.querySelector('.my-plants-btn');
  const plantQuizBtn = document.querySelector('.plant-quiz-btn');
  const discoverBtn = document.querySelector('.discover-btn');

  return { dashboard, plantLogEl, plantQuiz, plantDiscovery, myPlantsBtn, plantQuizBtn, discoverBtn };
}

/**
 * Return static global DOM elements.
 * @returns {Object} HTML elements
 */
export const globalDomElementsManager = () => {
  const mobileNavModal = document.querySelector('.mobile-nav-modal');
  const mobileMenuBars = document.querySelector('.menu-bars');
  const mobileNavCloseBtn = document.querySelector('.mobile-nav-close-btn');

  return { mobileNavModal, mobileMenuBars, mobileNavCloseBtn };
}

export const domElements = dashboardDomElementsManager();
export const globalDomElements = globalDomElementsManager();

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
export const createElement = ( { tagName = '', placeholder = '', textContent = '', classEl = '', id = '', value = '', type = '', dataAttributes = {} }) => {
  const element = document.createElement(tagName);
  if (placeholder) element.placeholder = placeholder;
  if (textContent) element.textContent = textContent;
  if (classEl) element.classList.add(classEl);
  if (id) element.id = id;
  if (value) element.value = value;
  if (type) element.type = type;

  Object.keys(dataAttributes).forEach(key => {
    element.setAttribute(`data-${key}`, dataAttributes[key]);
  });

  return element;
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

/**
 * Clear the section by removing any child nodes. An alternative to innerHTML = ''.
 * @param {} element 
 * @param {*} eventRegistryName 
 */
export const clearSection = (element, eventRegistryName) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  localEventManager.removeAllEventListeners(eventRegistryName);
}

/**
 * Clear and re-render the section.
 * @param {String} sectionClass - the class of the section element eg. 'plant-log', 'plant-quiz' etc.
 * @param {Function} renderSection - function to render the section on screen eg. renderMyPlants.
 * @param {String} eventRegistryName - event listener register connected to this section eg. 'MY_PLANTS'.
 */
export const resetSection = (sectionClass, renderSection, eventRegistryName) => {
  const section = document.querySelector(sectionClass);
  clearSection(section, eventRegistryName);
  renderSection();
}