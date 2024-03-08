// plantLog.js

/**
 * TODO:
 * - create or find http request for plant directory with title, images etc
 * - form error and message at renderManualPlantForm error handling
 * - simple css for forms
 */

import { dummyPlants, plantDirectoryManager } from "./data";
import { domElements, createElement, hideInitialDomElements } from "./domManipulation";
import { appendChildren, findItemInArray, hideElements } from "./utility";
import { localEventManager, imageChangeHandler } from "./eventHandling";
import { renderPlantDetails } from "./plantPage";

const plantDirectory = plantDirectoryManager();

/**
 * Store userPlantLog and return utility functions related to the plant log
 * @returns functions to add, remove, update and retrieve plants from the userPlantLog
 */
const plantLogManager = () => {
  let userPlantLog = [];

  return {
    addToUserPlantLog: (plant) => {
      userPlantLog.push(plant);
    },
    deletePlantFromLog: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        removeItemFromArray(userPlantLog, plant.id);
      } 
    },
    updatePlantInfo: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        foundPlant.name = plant.name;
        foundPlant.dateAdded = plant.dateAdded;
        foundPlant.notes = plant.notes;
        foundPlant.image = plant.image;
      }
    },
    getPlant: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        return foundPlant;
      } else {
        alert('Cannot find plant!');
      }
    },
    getPlantById: (plantId) => {
      return plantLog.userPlantLog.find(plant => plant.id.toString() === plantId);
    },
    userPlantLog
  }
}

export const plantLog = plantLogManager();

/**
 * Create search input field for user to search for a plant
 * @returns search input field, search and cancel buttons
 */
const createSearchInput = () => {
  const userSearch = createElement({tagName: 'div', classEl: 'search-elements'});
  const searchForPlant = createElement({tagName: 'input', placeholder: 'Find your plant!', classEl: 'plant-search'});
  const searchButton = createElement({tagName: 'button', textContent: 'Find', classEl: 'search-btn'});
  const cancelSearchBtn = createElement({tagName: 'button', textContent: 'Cancel', classEl: 'cancel-search-btn'});

  return { userSearch, searchForPlant, searchButton, cancelSearchBtn };
}

/**
 * Render plant search form on screen
 */
export const renderNewPlantSearch = () => {
  const { userSearch, searchForPlant, searchButton, cancelSearchBtn } = createSearchInput();
  const { mainSection, userPlantGrid } = domElements;

  hideInitialDomElements();
  hideElements(userPlantGrid);

  appendChildren(userSearch, searchForPlant, searchButton);
  appendChildren(mainSection, userSearch, cancelSearchBtn);

  localEventManager.addEventListener(searchButton, 'click', () => {
    searchButtonClickHandler(userSearch, searchForPlant, searchButton, cancelSearchBtn);
  });
  localEventManager.addEventListener(cancelSearchBtn, 'click', () => {
    cancelSearchButtonClickHandler(userSearch, mainSection, cancelSearchBtn);
  })
}

/**
 * Handle plant search button click
 * @param {HTMLElement} userSearch 
 * @param {HTMLElement} searchForPlant 
 * @param {HTMLElement} searchButton 
 * @param {HTMLElement} cancelSearchBtn 
 */
const searchButtonClickHandler = (userSearch, searchForPlant, searchButton, cancelSearchBtn) => {
  renderPlantSearchResults(userSearch, searchForPlant, searchButton, cancelSearchBtn);
  localEventManager.removeEventListener(searchButton, 'click');
}

/**
 * Handle cancel search button click
 * @param {HTMLElement} userSearch 
 * @param {HTMLElement} mainSection 
 * @param {HTMLElement} cancelSearchBtn 
 */
const cancelSearchButtonClickHandler = (userSearch, mainSection, cancelSearchBtn) => {
  removeChildren(mainSection, userSearch, cancelSearchBtn);
  resetDomElements();
}

/**
 * Render results of user search
 * @param {HTMLElement} userSearchInput
 * @param {HTMLElement} mainSection
 * @returns 
 */
const renderPlantSearchResults = (userSearch, userSearchInput, searchButton, cancelSearchBtn) => {
  const foundPlant = plantDirectory.find(plant => plant.title === userSearchInput.value);
  if (foundPlant) {
    console.log('Plant found!');
    return;
  } else {
    const errorMessage = renderSearchErrorMessage('No plant found!');
    
    appendChildren(userSearch, errorMessage);
    renderManualPlantUploadBtn(userSearch, errorMessage, userSearchInput, searchButton, cancelSearchBtn);
  }
}

/**
 * Render search error message on screen
 * @param {string} message
 */
const renderSearchErrorMessage = (message) => {
  const errorMessage = createElement({tagName:'h1', textContent: message, classEl: 'search-error-message'});
  return errorMessage;
}

/**
 * Render manual plant upload button on screen. Included button click handlers
 * @param {HTMLElement} userSearch 
 * @param {HTMLElement} errorMessage 
 * @param {HTMLElement} userSearchInput 
 * @param {HTMLElement} searchButton 
 * @param {HTMLElement} cancelSearchBtn 
 */
const renderManualPlantUploadBtn = (userSearch, errorMessage, userSearchInput, searchButton, cancelSearchBtn) => {
  const manualUploadBtn = createElement({tagName: 'button', textContent: 'Manual Upload', classEl: 'manual-upload-btn'});
  appendChildren(userSearch, manualUploadBtn);

  const manualUploadClickHandler = () => {
    renderManualPlantForm(userSearch, cancelSearchBtn);
    removeChildren(userSearch, manualUploadBtn, errorMessage, userSearchInput, searchButton);
  }

  const showButtonClickHandler = () => {
    localEventManager.addEventListener(searchButton, 'click', () => {
      showElements('block', errorMessage, manualUploadBtn);
    })
  }

  localEventManager.addEventListener(manualUploadBtn, 'click', manualUploadClickHandler);
  localEventManager.addEventListener(userSearchInput, 'click', () => {
    hideElements(errorMessage, manualUploadBtn);
    showButtonClickHandler(searchButton);
  });

  localEventManager.addEventListener(searchButton, 'click', searchButtonClickHandler)
}

/**
 * Render user plant form for manual plant entry.
 * Sets up event listeners for image upload and form submission. The image upload
 * listener reads the selected file and stores its data URL for later use.
 * @param {HTMLElement} userSearch 
 * @param {HTMLElement} cancelSearchBtn 
 */
const renderManualPlantForm = (userSearch, cancelSearchBtn) => {
  const { plantForm, name, dateAdded, plantPhoto, notes, submitBtn } = createManualPlantForm();
  appendChildren(userSearch, plantForm);

  let imageDataUrl = [];

  localEventManager.addEventListener(plantPhoto, 'change', (event) => {
    imageChangeHandler(event, (dataUrl) => {
      imageDataUrl = dataUrl;
    })
  });

  localEventManager.addEventListener(submitBtn, 'click', (event) => {
    submitHandler(event, name, dateAdded, notes, imageDataUrl, plantLog, userSearch, plantForm, cancelSearchBtn);
  });
}

/**
 * Validate plant data and return error messages
 * @param {string} name 
 * @param {string} dateAdded 
 * @param {string} imageDataUrl 
 * @returns errors
 */
export const validatePlantData = (name, dateAdded, imageDataUrl) => {
  let errors = [];

  if (name === '') {
    errors.push('Plant name is required.');
  } if (dateAdded === '') {
    errors.push('Date added required.');
  } if (imageDataUrl.length === 0) {
    errors.push('Upload a valid image');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Add and display a new plant on the userPlantGrid
 * @param {Object} newPlant 
 */
export const addPlantToGrid = (newPlant) => {
  const { userPlantGrid } = domElements;
  const userPlantContainer = createElement({tagName: 'div', classEl: 'user-plant'});
  const plantImageContainer = createElement({tagName: 'div', classEl: 'plant-image-container'});
  const plantImage = createElement({tagName: 'img', classEl: 'plant-image', dataAttributes: { 'id': newPlant.id.toString() }});
  const plantTitle = createElement({tagName: 'h1', textContent: newPlant.name});
  plantImage.src = newPlant.image

  appendChildren(plantImageContainer, plantImage);
  appendChildren(userPlantContainer, plantImageContainer, plantTitle);
  appendChildren(userPlantGrid, userPlantContainer);
}





/**
 * Creates form for user to upload plant manually
 * @returns user plant upload form
 */
const createManualPlantForm = () => {
  const plantForm = createElement({tagName: 'form', classEl: 'manual-plant-form'});
  const name = createElement({tagName: 'input', placeholder: 'Plant name'});
  const dateAdded = createElement({tagName: 'input', placeholder: 'Date added'});

  const plantPhoto = createElement({tagName: 'input', classEl: 'plant-photo-input'});
  plantPhoto.setAttribute('type', 'file');
  plantPhoto.setAttribute('accept', 'image/*');

  const submitBtn = createElement({tagName: 'button', textContent: 'Add My Plant'});
  // may add watering scheduele, similar plants etc.
  const notes = createElement({tagName: 'textarea', placeholder: 'Extra notes'})
  appendChildren(plantForm, name, dateAdded, plantPhoto, notes, submitBtn);

  return { plantForm, name, dateAdded, plantPhoto, notes, submitBtn };
}



/**
 * Populate the plant grid with plants stored in the userPlantLog
 */
const populatePlantGrid = () => {
  plantLog.userPlantLog.forEach(plant => {
    addPlantToGrid(plant);
  });
}

// Dummy plants added to plantLog (irl will be taken from local storage or when added by user)
dummyPlants.forEach(plant => {
  plantLog.addToUserPlantLog(plant);
})

populatePlantGrid();