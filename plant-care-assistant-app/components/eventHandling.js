// eventHandling.js
/**
 * Event handler logic
 */

import { domElements, hideInitialDomElements, resetDomElements } from "./domManipulation";
import { addPlantToGrid, plantLog, populatePlantGrid } from "./plantLog";
import { renderNewPlantSearch } from "./plantSearch";
import { validatePlantData } from "./addNewPlant";
import { renderPlantDetails } from "./plantPage";
import { hideElements, removeChildren } from "./utility";



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
 * Validates the form data, creates a new plant object, adds it to the plant log,
 * and updates the UI to reflect the new addition.
 * @param {*} event 
 * @param {*} name 
 * @param {*} dateAdded 
 * @param {*} imageDataUrl 
 * @param {*} plantLog 
 * @param {*} mainElement 
 * @param {*} plantForm 
 * @returns 
 */
export const submitHandler = (event, name, dateAdded, notes, imageDataUrl, plantLog, userSearch, plantForm, cancelSearchBtn) => {
  event.preventDefault();

  const dataValidation = validatePlantData(name.value, dateAdded.value, imageDataUrl);

  if (!dataValidation.isValid) {
    console.log(dataValidation.errors);
    return;
  }

  const newPlant = {
    name: name.value,
    dateAdded: dateAdded.value,
    notes: notes.value,
    image: imageDataUrl,
    id: Date.now()
  };

  plantLog.addToUserPlantLog(newPlant);
  addPlantToGrid(newPlant);

  removeChildren(userSearch, plantForm);
  cancelSearchBtn.remove();
  resetDomElements();
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
  const { addNewPlantBtn } = domElements;

  localEventManager.addEventListener(addNewPlantBtn, 'click', renderNewPlantSearch);
  setupUserPlantGridEventListener();
}

const setupUserPlantGridEventListener = () => {
  const { userPlantGrid } = domElements;

  localEventManager.addEventListener(userPlantGrid, 'click', (event) => {
    let target = event.target;
    while (target && target !== userPlantGrid) {
      if (target.classList.contains('plant-image')) {
        const plantId = target.getAttribute('data-id');
        const plant = plantLog.getPlantById(plantId);
        if (plant) {
          renderPlantDetails(plant, userPlantGrid);
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


export const dashboardInit = () => {
  setUpEventListeners();
  populatePlantGrid();
}

export const homeInit = () => {

}

export const globalInit = () => {
  staticEventHandlers();
}