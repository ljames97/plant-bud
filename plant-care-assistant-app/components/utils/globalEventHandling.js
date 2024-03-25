// eventHandling.js
/**
 * Event handler logic.
 */

import { dashboardNavButtonHighlight, domElements, hideInitialDomElements } from "./globalDomManipulation";
import { hideElements } from "./gobalUtility";

import { renderManualPlantForm } from "../add-plant/addPlantMain";
import { renderPlantDetails } from "../plant-page/plantPageMain";
import { startPlantQuiz } from "../plant-quiz/plantQuizMain";
import { startPlantDiscovery } from "../plant-discovery/plantDiscoveryMain";
import { plantLog, populatePlantGrid, startMyPlants } from "../plant-log/plantLogMain";


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

/**
 * Sets up event listeners for the application. 
 * This includes listeners for searching plants, adding new plants, etc.
 */
export const setUpEventListeners = () => {
  const { addNewPlantBtn, myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;

  localEventManager.addEventListener(addNewPlantBtn, 'click', renderManualPlantForm);
  localEventManager.addEventListener(myPlantsBtn, 'click', startMyPlants);
  localEventManager.addEventListener(plantQuizBtn, 'click', startPlantQuiz);
  localEventManager.addEventListener(discoverBtn, 'click', startPlantDiscovery);
  setupUserPlantGridEventListener();
}

const setupUserPlantGridEventListener = () => {
  const { userPlantGrid, plantLogEl } = domElements;

  // event propagation
  localEventManager.addEventListener(userPlantGrid, 'click', (event) => {
    let target = event.target;
    while (target && target !== userPlantGrid) {
      if (target.classList.contains('plant-image')) {
        const plantId = target.getAttribute('data-id');
        const plant = plantLog.getPlantById(plantId);
        if (plant) {
          renderPlantDetails(plant, plantLogEl, userPlantGrid, 'grid', '← back to dashboard');
          hideElements(userPlantGrid);
          hideInitialDomElements();
        }
        return;
      }
      target = target.parentNode;
    }
  });
}

export const localEventManager = eventManager();

// ** home page evenHandling logic (to be put in seperate file)

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
 * Assigns event handlers to static elements.
 */
const staticEventHandlers = () => {
  const eventHandlerData = staticEventHandlerManager();

  eventHandlerData.forEach(eventHandler => {
    const button = document.querySelector(eventHandler.class)

    button.addEventListener('click', () => {
      eventHandler.handler();
    });
  })
}

/**
 * Manages static elements and their event handlers.
 * @returns event handler data (array)
 */
const staticEventHandlerManager = () => {
  const eventHandlerData = [
    {
      class: '.menu-bars',
      handler: () => toggleMobileNav(true)
    },
    {
      class: '.mobile-nav-close-btn',
      handler: () => toggleMobileNav(false)
    }
  ];

  return eventHandlerData;
}

/**
 * Initialises the dashboard.
 */
export const dashboardInit = () => {
  setUpEventListeners();
  populatePlantGrid();
  dashboardNavButtonHighlight();
}

export const homeInit = () => {

}

/**
 * Global initalisation for shared event handling.
 */
export const globalInit = () => {
  staticEventHandlers();
}