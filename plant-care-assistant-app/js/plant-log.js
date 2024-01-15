// plant-log.js

/**
 * TODO:
 * - create plant directory with title, images etc
 * - add event listeners to addplant and manualUpload buttons
 * - remove elements on form submit completion
 * - upload photo
 * - css
 * - display plants in log along side the add new plant button (demo plant log initially for css)
 * - review/clean up js code and css
 * - put functions into folders. Need a shared folder for utility functions
 */

const plantLogManager = () => {
  let userPlantLog = [];

  return {
    addToUserPlantLog: (plant) => {
      userPlantLog.push(plant);
      console.log(userPlantLog);
    }
  }
}

/**
 * Utility function to remove child element(s) from parent
 * @param {HTMLElement} parent 
 * @param  {...HTMLElement} children 
 */
const removeChildren = (parent, ...children) => {
  children.forEach(child => parent.removeChild(child));
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
 * @param {HTMLElement} type 
 * @param {string} placeholder 
 * @param {string} textContent 
 * @param {string} id 
 * @returns html element
 */
const createElement = (type, placeholder = '', textContent = '', classEl = '', id = '') => {
  const element = document.createElement(type);
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
  const mainSection = document.querySelector('main');
  const plantLogTitle = document.querySelector('.plant-log-title');
  const addNewPlantBtn = document.querySelector('.add-new-plant-btn');

  removeChildren(mainSection, plantLogTitle, addNewPlantBtn);
  appendChildren(mainSection, searchForPlant, searchButton);

  searchButton.addEventListener('click', () => {
    renderPlantSearchResults(searchForPlant.value, mainSection);
    
  });
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
const renderPlantSearchResults = (userSearchInput, mainSection) => {
  removeChildren()
  const foundPlant = plantDirectory.find(plant => plant.title === userSearchInput);
  if (foundPlant) {
    console.log('Plant found!');
    return;
  } else {
    renderSearchErrorMessage(mainSection, 'No plant found!');
    renderManualPlantUploadBtn(mainSection);
  }
}

/**
 * Function to render search error message on screen
 * @param {HTMLElement} mainElement
 * @param {string} message
 */
const renderSearchErrorMessage = (mainElement, message) => {
  const errorMessage = createElement('h1', null, message, 'search-error-message');
  appendChildren(mainElement, errorMessage);
}

/**
 * Function to render manual plant upload button on screen
 * @param {HTMLElement} mainElement 
 */
const renderManualPlantUploadBtn = (mainElement) => {
  const button = createElement('button', null, 'Manual Upload', 'manual-upload-btn');
  appendChildren(mainElement, button);

  button.addEventListener('click', () => {
    renderManualPlantForm(mainElement);
  })
}

/**
 * Function to render user plant form on screen and handle submitting new plant to the userPlantLog
 * @param {HTMLElement} mainElement 
 */
const renderManualPlantForm = (mainElement) => {
  const { plantForm, name, dateAdded, plantPhoto, notes, submitBtn } = createManualPlantForm();
  appendChildren(mainElement, plantForm);

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const newPlant = {
      name: name.value,
      dateAdded: dateAdded.value,
      notes: notes.value
    };

    plantLog.addToUserPlantLog(newPlant);
  })
}

/**
 * Function to create form for user to upload plant manually
 * @returns user plant uplaad form
 */
const createManualPlantForm = () => {
  const plantForm = createElement('form', null, null, 'manual-plant-form');
  const name = createElement('input', 'Plant name');
  const dateAdded = createElement('input', 'Date added');
  const plantPhoto = createElement('button', null, 'Upload photo');
  const submitBtn = createElement('button', null, 'Add My Plant');
  // may add watering scheduele, similar plants etc.
  const notes = createElement('textarea', 'Extra notes')
  appendChildren(plantForm, name, dateAdded, plantPhoto, notes, submitBtn);

  return { plantForm, name, dateAdded, plantPhoto, notes, submitBtn };
}

const plantDirectory = plantDirectoryManager();
const plantLog = plantLogManager();

renderNewPlantSearch();