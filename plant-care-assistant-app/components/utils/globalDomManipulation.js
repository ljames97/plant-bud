// globalDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for global DOM manipulation.
 * Functions in this file are shared across several modules. 
 */

import { renderMyPlants } from "../plant-log/plantLogMain";
import { localEventManager } from "./globalEventHandling";
import { appendChildren, hideElements, showElements } from "./gobalUtility";

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
      const plantLibrary = document.querySelector('.plant-library')
      const myPlantsBtn = document.querySelector('.my-plants-btn');
      const addNewPlantBtn = document.querySelector('.add-new-plant-btn');
      const quizBtn = document.querySelector('.quiz-btn');
      const libraryBtn = document.querySelector('.library-btn');
      
      // plant button dark/light icons
      myPlantsBtn.lightIcon = '../../public/plant-icon-light.png';
      addNewPlantBtn.lightIcon = '../../public/footer-nav-icons/add.png';
      quizBtn.lightIcon = '../../public/quiz-icon-light.png';
      libraryBtn.lightIcon = '../../public/footer-nav-icons/search.png';

      myPlantsBtn.darkIcon = '../../public/plant-icon-dark.png';
      addNewPlantBtn.darkIcon = '../../public/footer-nav-icons-dark/add.png';
      quizBtn.darkIcon = '../../public/quiz-icon-dark.png';
      libraryBtn.darkIcon = '../../public/footer-nav-icons-dark/search.png';

      _dashboardDomElementsCache = { dashboard, plantLogEl, plantQuiz, plantLibrary, myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn };
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
export const createElement = ( { tagName = '', placeholder = '', textContent = '', classEl = [], id = '', value = '', type = '', fr = '', dataAttributes = {} }) => {
  const element = document.createElement(tagName);
  if (placeholder) element.placeholder = placeholder;
  if (textContent) element.textContent = textContent;
  if (classEl) classEl.forEach(cl => element.classList.add(cl));
  if (id) element.id = id;
  if (value) element.value = value;
  if (type) element.type = type;
  if (fr) element.htmlFor = fr;

  Object.keys(dataAttributes).forEach(key => {
    element.setAttribute(`data-${key}`, dataAttributes[key]);
  });

  return element;
}

/**
 * Highlight the active dashboard button. Eg. My Plants, Plant Quiz or Discover.
 */
export const dashboardNavButtonHighlight = () => {
  const { myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn } = domElements;
  const dashboardButtons = [myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn];

  dashboardButtons.forEach(button => {
    if (button.classList.contains('active')) {
      button.style.backgroundColor = '#fcfaf7';
      const iconContainer = button.querySelector('.icon-container');
      iconContainer.style.backgroundImage = `url(${button.darkIcon})`;
    } else {
      button.style.backgroundColor = 'rgba(172, 172, 172, 0.3)'
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
  const { plantLogEl, plantQuiz, plantLibrary } = domElements;
  
  if (activeBtn === domElements.addNewPlantBtn) {
    // Handle the case where addNewPlantBtn is clicked
    renderFunc();
    return;
  }

  activeBtn.classList.add('active');

  inactiveBtn.forEach(button => {
    button.classList.remove('active');
  });

  // Mapping from buttons to their corresponding sections
  const buttonMap = {
    myPlantsBtn: { section: plantLogEl, button: domElements.myPlantsBtn },
    addNewPlantBtn: { button: domElements.addNewPlantBtn },
    quizBtn: { section: plantQuiz, button: domElements.quizBtn },
    libraryBtn: { section: plantLibrary, button: domElements.libraryBtn }
  };

  // Find the active section based on the active button
  const activeSection = Object.values(buttonMap).find(entry => entry.button === activeBtn)?.section;

  [plantLogEl, plantQuiz, plantLibrary].forEach(section => {
    clearSection(section)
    section.style.height = '0'
  });

  if (activeSection) {
    activeSection.style.height = '100vh';
    renderFunc();
  }

  dashboardNavButtonHighlight();
}

/**
 * Clear the section by removing any child nodes. An alternative to innerHTML = ''.
 * @param {} element 
 * @param {} eventRegistryName 
 */
export const clearSection = (element, eventRegistryName) => {
  if (element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  
    localEventManager.removeAllEventListeners(eventRegistryName);
  } else {
    return
  }

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

/**
 * Highlights the active button and adds/removes 'active' class from the button class list.
 * Best used for highlighting navigation buttons.
 * @param {*} activeBtn 
 * @param {*} activeBtnColor 
 * @param {*} inactiveBtnColor 
 * @param {*} activeTextColor 
 * @param {*} inactiveTextColor 
 * @param  {...any} inactiveBtns 
 */
export const buttonHighlight = (activeBtn, activeBtnColor, inactiveBtnColor, activeTextColor, inactiveTextColor, ...inactiveBtns) => {
  activeBtn.classList.add('active');
  activeBtn.style.backgroundColor = activeBtnColor;
  activeBtn.style.color = activeTextColor;

  inactiveBtns.forEach(button => {
    button.style.backgroundColor = inactiveBtnColor;
    button.style.color = inactiveTextColor;
    button.classList.remove('active');
  });
}

/**
 * Creates and returns the menu dots container element.
 * @returns Menu dots container element.
 */
export const createMenuDots = () => {
  let menuDot = '';
  const menuDotContainer = createElement({tagName: 'div', classEl: ['menu-dots-container']});
  menuDot = createElement({tagName: 'div', classEl: ['menu-dot']});
  appendChildren(menuDotContainer, menuDot);
  menuDot = createElement({tagName: 'div', classEl: ['menu-dot']});
  appendChildren(menuDotContainer, menuDot);
  menuDot = createElement({tagName: 'div', classEl: ['menu-dot']});
  appendChildren(menuDotContainer, menuDot);

  return menuDotContainer;
}