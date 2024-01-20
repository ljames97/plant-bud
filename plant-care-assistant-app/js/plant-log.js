// plant-log.js

/**
 * TODO:
 * - create or find http request for plant directory with title, images etc
 * - store dom elements and event listeners/handling in seperate function to simplify forwarding functions / elements
 * - data validation/error handling at renderManualPlantForm
 * - turn createElement parameter into object for readability
 * - comments for readability esp more complex functions 
 * - simple css for forms
 * - review/clean up js code and css
 * - put functions into folders. Need a shared folder for utility functions
 */

/**
 * Function to store userPlantLog and return utility functions related to the plant log
 * @returns functions to add, remove and retrieve plants from the userPlantLog
 */
const plantLogManager = () => {
  let userPlantLog = [];

  return {
    addToUserPlantLog: (plant) => {
      userPlantLog.push(plant);
      console.log(userPlantLog);
    },
    deletePlantFromLog: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        removeItemFromArray(userPlantLog, plant.id);
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
    userPlantLog
  }
}

/**
 * Utility function to remove item from array
 * @param {any} array 
 * @param {number} itemId 
 * @returns 
 */
export const removeItemFromArray = (array, itemId) => {
  const updatedArray = array.filter(arrayItem => arrayItem.id !==itemId);
  return updatedArray;
}

/**
 * Utility function to find item in array
 * @param {any} array 
 * @param {number} itemId 
 * @returns 
 */
export const findItemInArray = (array, itemId) => {
  const foundItem = array.find(arrayItem => arrayItem.id === itemId);
  return foundItem;
}

/**
 * Utility function to remove child element(s) from parent
 * @param {HTMLElement} parent 
 * @param  {...HTMLElement} children 
 */
const removeChildren = (parent, ...children) => {
  children.forEach(child => {
    if (parent.contains(child)) {
      parent.removeChild(child);
    }
  });
}

/**
 * Function to create search input field for user to search for a plant
 * @returns search input field and search button
 */
const createSearchInput = () => {
  const searchForPlant = createElement('input', 'Find your plant!', null, 'plant-search');
  const searchButton = createElement('button', null, 'Find', 'search-btn', null);

  return { searchForPlant, searchButton };
}

/**
 * Utility function to append child element(s) to parent element
 * @param {HTMLElement} parent 
 * @param  {...HTMLElement} children 
 */
const appendChildren = (parent, ...children) => {
  children.forEach(child => parent.appendChild(child));
}

/**
 * Utility function to create a html element
 * @param {HTMLElement} el 
 * @param {string} placeholder 
 * @param {string} textContent 
 * @param {string} id 
 * @returns html element
 */
const createElement = (el, placeholder = '', textContent = '', classEl = '', id = '') => {
  const element = document.createElement(el);
  if (placeholder) element.placeholder = placeholder;
  if (textContent) element.textContent = textContent;
  if (classEl) element.classList.add(classEl);
  if (id) element.id = id;

  return element;
}

/**
 * Function to render search form on screen
 */
const renderNewPlantSearch = () => {
  const { searchForPlant, searchButton } = createSearchInput();
  const { mainSection, plantLogTitle, addNewPlantBtn } = domElementsManager();

  plantLogTitle.style.display = 'none';
  addNewPlantBtn.style.display = 'none';
  appendChildren(mainSection, searchForPlant, searchButton);

  const searchButtonClickHandler = () => {
    renderPlantSearchResults(searchForPlant, mainSection, searchButton);
    searchButton.removeEventListener('click', searchButtonClickHandler);
  };

  searchButton.addEventListener('click', searchButtonClickHandler);
}

/**
 * Function to return most reused dom elements
 * @returns html elements
 */
const domElementsManager = () => {
  const mainSection = document.querySelector('main');
  const plantLogTitle = document.querySelector('.plant-log-title');
  const addNewPlantBtn = document.querySelector('.add-new-plant-btn');

  return { mainSection, plantLogTitle, addNewPlantBtn };
}

/**
 * Function to manage the plant directory
 */
const plantDirectoryManager = () => {
  let plantDirectory = [];
  return plantDirectory;
}

/**
 * Function to render results of user search
 * @param {HTMLElement} userSearchInput
 * @param {HTMLElement} mainSection
 * @returns 
 */
const renderPlantSearchResults = (userSearchInput, mainSection, searchButton) => {
  const foundPlant = plantDirectory.find(plant => plant.title === userSearchInput.value);
  if (foundPlant) {
    console.log('Plant found!');
    return;
  } else {
    const errorMessage = renderSearchErrorMessage('No plant found!');
    
    appendChildren(mainSection, errorMessage);
    renderManualPlantUploadBtn(mainSection, errorMessage, userSearchInput, searchButton);
  }
}

/**
 * Function to render search error message on screen
 * @param {HTMLElement} mainElement
 * @param {string} message
 */
const renderSearchErrorMessage = (message) => {
  const errorMessage = createElement('h1', null, message, 'search-error-message');
  
  return errorMessage;
}

/**
 * Function to render manual plant upload button on screen
 * @param {HTMLElement} mainElement 
 * @param {HTMLElement} errorMessage
 */
const renderManualPlantUploadBtn = (mainElement, errorMessage, userSearchInput, searchButton) => {
  const manualUploadBtn = createElement('button', null, 'Manual Upload', 'manual-upload-btn');
  appendChildren(mainElement, manualUploadBtn);

  const manualUploadClickHandler = () => {
    renderManualPlantForm(mainElement);
    removeChildren(mainElement, manualUploadBtn, errorMessage, userSearchInput, searchButton);
  }

  manualUploadBtn.addEventListener('click', manualUploadClickHandler);

  userSearchInput.addEventListener('click', () => {
    removeChildren(mainElement, errorMessage, manualUploadBtn);
  });

  // reused code from renderNewPlantSearch, could create seperare function
  const searchButtonClickHandler = () => {
    renderPlantSearchResults(userSearchInput, mainElement, searchButton);
    searchButton.removeEventListener('click', searchButtonClickHandler);
  }

  searchButton.addEventListener('click', searchButtonClickHandler);
}

/**
 * Function to render user plant form on screen and handle submitting new plant to the userPlantLog
 * @param {HTMLElement} mainElement 
 * @param {HTMLElement} manualUploadBtn
 * @param {HTMLElement} errorMessage 
 */
const renderManualPlantForm = (mainElement) => {
  const { plantForm, name, dateAdded, plantPhoto, notes, submitBtn } = createManualPlantForm();
  appendChildren(mainElement, plantForm);

  let imageDataUrl = [];

  plantPhoto.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imageDataUrl = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  });

  submitBtn.addEventListener('click', (event) => {
    // add error handling for empty or invalid user input

    event.preventDefault();

    const newPlant = {
      name: name.value,
      dateAdded: dateAdded.value,
      notes: notes.value,
      image: imageDataUrl,
      id: Date.now()
    };

    plantLog.addToUserPlantLog(newPlant);
    addPlantToGrid(newPlant);

    removeChildren(mainElement, plantForm);
    resetDomElements();
  })
}

/**
 * Function to add and display a new plant on the userPlantGrid
 * @param {Object} newPlant 
 */
const addPlantToGrid = (newPlant) => {
  const userPlantGrid = document.querySelector('.user-plants');
  const userPlantContainer = createElement('div', null, null, 'user-plant');
  const plantImageContainer = createElement('div', null, null, 'plant-image-container');
  const plantImage = createElement('img');
  const plantTitle = createElement('h1', null, newPlant.name);

  plantImage.src = newPlant.image

  appendChildren(plantImageContainer, plantImage);
  appendChildren(userPlantContainer, plantImageContainer, plantTitle);
  appendChildren(userPlantGrid, userPlantContainer);
}

const resetDomElements = () => {
  const { plantLogTitle, addNewPlantBtn } = domElementsManager();
  plantLogTitle.style.display = 'block';
  addNewPlantBtn.style.display = 'flex';
}

/**
 * Function to create form for user to upload plant manually
 * @returns user plant uplaad form
 */
const createManualPlantForm = () => {
  const plantForm = createElement('form', null, null, 'manual-plant-form');
  const name = createElement('input', 'Plant name');
  const dateAdded = createElement('input', 'Date added');

  const plantPhoto = createElement('input', null, null, 'plant-photo-input', null);
  plantPhoto.setAttribute('type', 'file');
  plantPhoto.setAttribute('accept', 'image/*');

  const submitBtn = createElement('button', null, 'Add My Plant');
  // may add watering scheduele, similar plants etc.
  const notes = createElement('textarea', 'Extra notes')
  appendChildren(plantForm, name, dateAdded, plantPhoto, notes, submitBtn);

  return { plantForm, name, dateAdded, plantPhoto, notes, submitBtn };
}

const initDomElements = () => {
  const domElements = domElementsManager();
  setUpEventListeners(domElements);
}

const setUpEventListeners = (domElements) => {
  const { addNewPlantBtn } = domElements;

  addNewPlantBtn.addEventListener('click', () => {
    renderNewPlantSearch();
  })
}

initDomElements();
const plantDirectory = plantDirectoryManager();
const plantLog = plantLogManager();