import { domElementsManager } from "./domManipulation";
import { renderNewPlantSearch } from "./plantLog";



/**
 * Handle change event of user uploaded file
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
const submitHandler = (event, name, dateAdded, notes, imageDataUrl, plantLog, userSearch, plantForm, cancelSearchBtn) => {
  event.preventDefault();
  const { mainElement } = domElements;

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
 * @returns functions to add / remove event listeners
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
  const { addNewPlantBtn } = domElementsManager();

  document.addEventListener('DOMContentLoaded', () => {
    localEventManager.addEventListener(addNewPlantBtn, 'click', renderNewPlantSearch);
  });
}

export const localEventManager = eventManager();

setUpEventListeners();