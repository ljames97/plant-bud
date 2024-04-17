// globalDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for global DOM manipulation.
 * Functions in this file are shared across several modules. 
 */

import { renderMyPlants } from "../plant-log/plantLogMain";
import { localEventManager } from "./globalEventHandling";
import { hideElements, showElements } from "./gobalUtility";

/**
 * A manager for retreiving DOM elements.
 * Elements are cached after initial query to improve performance. 
 * @returns {Object} 
 */
const domElementsManager = () => {
  // Cache objects for storing already queried DOM elements
  let _globalDomElementsCache = null;
  let _dashboardDomElementsCache = null;

  return {
    globalDomElements: () => {
      if (_globalDomElementsCache) {
        return _globalDomElementsCache;
      }
      // Query and cache if not already cached. 
      const mobileNavModal = document.querySelector('.mobile-nav-modal');
      const mobileMenuBars = document.querySelector('.menu-bars');
      const mobileNavCloseBtn = document.querySelector('.mobile-nav-close-btn');

      _globalDomElementsCache = { mobileNavModal, mobileMenuBars, mobileNavCloseBtn };
      return _globalDomElementsCache;
    },
    dashboardDomElements: () => {
      if (_dashboardDomElementsCache) {
        return _dashboardDomElementsCache;
      }

      const dashboard = document.querySelector('.dashboard');
      const plantLogEl = document.querySelector('.plant-log');
      const plantQuiz = document.querySelector('.plant-quiz');
      const plantDiscovery = document.querySelector('.plant-discovery')
      const myPlantsBtn = document.querySelector('.my-plants-btn');
      const plantQuizBtn = document.querySelector('.plant-quiz-btn');
      const discoverBtn = document.querySelector('.discover-btn');
      
      // plant button dark/light icons
      myPlantsBtn.lightIcon = '../../public/footer-nav-icons/plant.png';
      plantQuizBtn.lightIcon = '../../public/footer-nav-icons/add.png';
      discoverBtn.lightIcon = '../../public/footer-nav-icons/search.png';

      myPlantsBtn.darkIcon = '../../public/footer-nav-icons-dark/plant.png';
      plantQuizBtn.darkIcon = '../../public/footer-nav-icons-dark/add.png';
      discoverBtn.darkIcon = '../../public/footer-nav-icons-dark/search.png';

      _dashboardDomElementsCache = { dashboard, plantLogEl, plantQuiz, plantDiscovery, myPlantsBtn, plantQuizBtn, discoverBtn };
      return _dashboardDomElementsCache;
    }
  }
}

const getDomElements = domElementsManager();

export const domElements = getDomElements.dashboardDomElements();
export const globalDomElements = getDomElements.globalDomElements();

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
      button.style.backgroundColor = '#fcfaf7';
      const iconContainer = button.querySelector('.icon-container');
      iconContainer.style.backgroundImage = `url(${button.darkIcon})`;
    } else {
      button.style.backgroundColor = 'rgba(128, 128, 128, 0.3)'
      const iconContainer = button.querySelector('.icon-container');
      iconContainer.style.backgroundImage = `url(${button.lightIcon})`;
    }
  });
}

/**
 * Prepare the dashboard by rendering the active section and removing the inactive section.
 * @param {HTMLElement} activeBtn - button clicked.
 * @param  {...HTMLElement} inactiveBtn - buttons not clicked.
 */
export const prepareDashboard = (activeBtn, renderFunc, ...inactiveBtn) => {
  const { plantLogEl, plantQuiz, plantDiscovery } = domElements;
  activeBtn.classList.add('active');

  inactiveBtn.forEach(button => {
    button.classList.remove('active');
  });

  // Mapping from buttons to their corresponding sections
  const buttonMap = {
    myPlantsBtn: { section: plantLogEl, button: domElements.myPlantsBtn },
    plantQuizBtn: { section: plantQuiz, button: domElements.plantQuizBtn },
    discoverBtn: { section: plantDiscovery, button: domElements.discoverBtn }
  };

  // Find the active section based on the active button
  const activeSection = Object.values(buttonMap).find(entry => entry.button === activeBtn)?.section;

  [plantLogEl, plantQuiz, plantDiscovery].forEach(section => clearSection(section));

  if (activeSection) {
    renderFunc();
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