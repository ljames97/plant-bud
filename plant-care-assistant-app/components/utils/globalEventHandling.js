// globalEventHandling.js
/**
 * Global event handler logic and initialisation.
 */

import { renderAddPlantModal } from "../add-plant/addPlantMain";
import { renderNewPlantSearch } from "../plant-discovery/plantDiscoveryMain";
import { renderMyPlants } from "../plant-log/plantLogMain";
import { renderPlantQuiz } from "../plant-quiz/plantQuizMain";
import { dashboardNavButtonHighlight, domElements, globalDomElements, prepareDashboard, resetSection } from "./globalDomManipulation";

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
  sectionInit('MY_PLANTS');
  setUpDashboardEventListeners();
  dashboardNavButtonHighlight();
}

const sectionInit = (sectionName) => {
  const { myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn } = domElements;

  const sectionMap = {
    'MY_PLANTS': { button: myPlantsBtn, renderFunc: renderMyPlants },
    'PLANT_QUIZ': { button: quizBtn, renderFunc: renderPlantQuiz },
    'ADD_PLANT': { button: addNewPlantBtn, renderFunc: renderAddPlantModal },
    'PLANT_LIBRARY': { button: libraryBtn, renderFunc: renderNewPlantSearch }
  }

  const section = sectionMap[sectionName];
  const otherButtons = Object.values(sectionMap).map(sec => sec.button).filter(btn => btn !== section.button);

  if (!section || section.button.classList.contains('active')) {
    return;
  } if (section.button.classList.contains('dormant')) {
    prepareDashboard(section.button, section.renderFunc, ...otherButtons);
    return;
  }

  prepareDashboard(section.button, section.renderFunc, ...otherButtons);
  section.button.classList.add('dormant');
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

    getHandlers: () => {
      console.log(handlers);
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
      if (handlers[registryName]) {
        Object.keys(handlers[registryName]).forEach(eventType => {
          handlers[registryName][eventType].forEach(({ element, handler }) => {
            element.removeEventListener(eventType, handler);
          });
        });
        delete handlers[registryName]; // Clears the registry
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
  const { myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn } = domElements;

  localEventManager.addEventListener(myPlantsBtn, 'click', () => {
    sectionInit('MY_PLANTS');
  }, 'DASHBOARD');
  localEventManager.addEventListener(addNewPlantBtn, 'click', () => {
    sectionInit('ADD_PLANT');
  }, 'DASHBOARD');
  localEventManager.addEventListener(quizBtn, 'click', () => {
    sectionInit('PLANT_QUIZ');
  }, 'DASHBOARD');
  localEventManager.addEventListener(libraryBtn, 'click', () => {
    sectionInit('PLANT_LIBRARY');
  }, 'DASHBOARD');
}

/**
 * Manages global elements and their event handlers.
 */
const setUpGlobalEventListeners = () => {
  const { mobileMenuBars, mobileNavCloseBtn } = globalDomElements;

  localEventManager.addEventListener(mobileMenuBars, 'click', () => {
    toggleMobileNav(true);
  }, 'MOBILE_NAV');
  localEventManager.addEventListener(mobileNavCloseBtn, 'click', () => {
    toggleMobileNav(false);
  }, 'MOBILE_NAV');
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

/**
 * Handles document click events to remove the drop menu container if the click is outside the container.
 * @param {Event} event 
 */
export const handleDocumentClick = (event) => {
  const dropMenuContainer = document.querySelector('.drop-menu-container');
  if (dropMenuContainer && !dropMenuContainer.contains(event.target)) {
    dropMenuContainer.remove();
  }
}