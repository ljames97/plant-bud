// globalEventHandling.js
/**
 * Global event handler logic and initialisation.
 */

import { dashboardNavButtonHighlight, domElements, globalDomElements } from "./globalDomManipulation";

import { startPlantQuiz } from "../plant-quiz/plantQuizMain";
import { plantDiscoveryInit } from "../plant-discovery/plantDiscoveryMain";
import { myPlantsInit } from "../plant-log/plantLogMain";

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
  myPlantsInit();
  setUpDashboardEventListeners();
  dashboardNavButtonHighlight();
}

/**
 * Creates an event manager for adding, removing, and managing DOM event listeners.
 * The manager supports categorization of event listeners into registries for organized management,
 * facilitating bulk operations like removing all listeners within a specific category.
 *
 * @returns {Object} An object containing methods for event listener management.
 */
const eventManager = () => {
  // Storage for all event handlers, organized by registry name and then event type.
  let handlers = {};

  return {
    /**
     * Adds an event listener to a specified element and registers it within a named registry.
     * If the registry or event type does not exist, they are created dynamically.
     *
     * @param {HTMLElement} element - The DOM element to attach the event listener to.
     * @param {String} eventType - The type of event to listen for (e.g., 'click').
     * @param {Function} handler - The callback function to execute when the event is triggered.
     * @param {String} [registryName='global'] - (Optional) The name of the registry to group this listener under. Defaults to 'GLOBAL'.
     */
    addEventListener: (element, eventType, handler, registryName = 'GLOBAL') => {
      if (!handlers[registryName]) {
        handlers[registryName] = {};
      }
      if (!handlers[registryName][eventType]) {
        handlers[registryName][eventType] = [];
      }
      element.addEventListener(eventType, handler);
      handlers[registryName][eventType].push({ element, handler });
    },

    /**
     * Removes an event listener from a specified element within a named registry.
     * After removal, it cleans up empty registries and event type collections as needed.
     *
     * @param {HTMLElement} element - The DOM element to remove the event listener from.
     * @param {String} eventType - The type of event the listener was attached to.
     * @param {String} [registryName='global'] - (Optional) The name of the registry the listener belongs to. Defaults to 'GLOBAL'.
     */
    removeEventListener: (element, eventType, registryName = 'GLOBAL') => {
      if (handlers[registryName] && handlers[registryName][eventType]) {
        handlers[registryName][eventType] = handlers[registryName][eventType].filter(({ element: el, handler }) => {
          const shouldRemove = el === element;
          if (shouldRemove) {
            element.removeEventListener(eventType, handler);
          }
          return !shouldRemove;
        });

        if (handlers[registryName][eventType].length === 0) {
          delete handlers[registryName][eventType];
        }

        if (Object.keys(handlers[registryName]).length === 0) {
          delete handlers[registryName];
        }
      }
    },

    /**
     * Removes all event listeners from a specific registry, or from all registries if no registry name is specified.
     * Useful for cleaning up event listeners en masse, e.g., when unmounting a component or clearing a page section.
     *
     * @param {String} [registryName='global'] - (Optional) The name of the registry to clear listeners from. Defaults to 'GLOBAL'.
     */
    removeAllEventListeners: (registryName = 'GLOBAL') => {
      console.log(handlers);
      if (handlers[registryName]) {
        Object.keys(handlers[registryName]).forEach(eventType => {
          handlers[registryName][eventType].forEach(({ element, handler }) => {
            element.removeEventListener(eventType, handler);
          });
        });
        delete handlers[registryName]; // Clears the registry
        console.log(handlers)
      }
    }
  };
};

export const localEventManager = eventManager();

/**
 * Sets up event listeners for the dashboard. 
 * This includes listeners for searching plants, adding new plants, etc.
 */
export const setUpDashboardEventListeners = () => {
  const { myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;

  localEventManager.addEventListener(myPlantsBtn, 'click', myPlantsInit, 'DASHBOARD');
  localEventManager.addEventListener(plantQuizBtn, 'click', startPlantQuiz, 'DASHBOARD');
  localEventManager.addEventListener(discoverBtn, 'click', plantDiscoveryInit, 'DASHBOARD');
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