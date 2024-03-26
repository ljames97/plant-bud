// globalEventHandling.js
/**
 * Global event handler logic and initialisation.
 */

import { dashboardNavButtonHighlight, domElements, globalDomElements } from "./globalDomManipulation";

import { renderManualPlantForm } from "../add-plant/addPlantMain";
import { startPlantQuiz } from "../plant-quiz/plantQuizMain";
import { startPlantDiscovery } from "../plant-discovery/plantDiscoveryMain";
import { populatePlantGrid, startMyPlants } from "../plant-log/plantLogMain";
import { setupUserPlantGridEventListener } from "../plant-log/plantLogEventHandling";

/**
 * Global initalisation for shared event handling.
 */
export const globalInit = () => {
  setUpGlobalEventListeners();
}

export const homeInit = () => {
  // home-page event listener set up
}

/**
 * Initialises the dashboard.
 */
export const dashboardInit = () => {
  setUpDashboardEventListeners();
  setupUserPlantGridEventListener();
  populatePlantGrid();
  dashboardNavButtonHighlight();
}

/**
 * Centralized event manager for handling event listeners and to avoid memory leaks.
 * Allows adding and removing event listeners to elements and manages a registry of handlers.
 * @returns functions to add / remove event listeners.
 */
const eventManager = () => {
  let handlers = {};

  return {
    addEventListener: (element, eventType, handler) => {
      if (!handlers[eventType]) {
        handlers[eventType] = [];
      }
      element.addEventListener(eventType, handler);
      handlers[eventType].push({ element, handler });
    },

    removeEventListener: (element, eventType) => {
      if (handlers[eventType]) {
        handlers[eventType] = handlers[eventType].filter(({ element: el, handler }) => {
          if (el === element) {
            element.removeEventListener(eventType, handler);
          }
        });
        handlers[eventType] = [];
      }
    }
  }
}

export const localEventManager = eventManager();

/**
 * Sets up event listeners for the dashboard. 
 * This includes listeners for searching plants, adding new plants, etc.
 */
export const setUpDashboardEventListeners = () => {
  const { addNewPlantBtn, myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;

  localEventManager.addEventListener(addNewPlantBtn, 'click', renderManualPlantForm);
  localEventManager.addEventListener(myPlantsBtn, 'click', startMyPlants);
  localEventManager.addEventListener(plantQuizBtn, 'click', startPlantQuiz);
  localEventManager.addEventListener(discoverBtn, 'click', startPlantDiscovery);
}

/**
 * Manages global elements and their event handlers.
 */
const setUpGlobalEventListeners = () => {
  const { mobileMenuBars, mobileNavCloseBtn } = globalDomElements;

  localEventManager.addEventListener(mobileMenuBars, 'click', () => {
    toggleMobileNav(true);
  });
  localEventManager.addEventListener(mobileNavCloseBtn, 'click', () => {
    toggleMobileNav(false);
  })
}

/**
 * Handle change event of user uploaded file.
 * Reads the selected image file asynchronously and executes a callback with the
 * image's data URL when the read operation is complete.
 * @param {*} event 
 * @param {*} imageDataUrl 
 */
export const imageChangeHandler = (event, callback) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      callback(e.target.result);
    }
    reader.readAsDataURL(file);
  };
}

/**
 * Open/close the mobile navigation.
 * @param {boolean} isOpen 
 */
const toggleMobileNav = (isOpen) => {
  const mobileNavModal = document.querySelector('.mobile-nav-modal');
  if (isOpen) {
    mobileNavModal.classList.add('show');
  } else {
    mobileNavModal.classList.remove('show');
  }
}