// plantSeardh.js
/**
 * To search for plants in the plant directory and render results on screen
 */

import { renderManualPlantUploadBtn } from "./addNewPlant";
import { createElement, domElements, hideInitialDomElements, resetDomElements } from "./domManipulation";
import { localEventManager } from "./eventHandling";
import { plantDirectory } from "./plantLog";
import { appendChildren, hideElements, removeChildren } from "./utility";

/**
 * Create search input field for user to search for a plant.
 * @returns search input field, search and cancel buttons.
 */
const createSearchInput = () => {
  const userSearch = createElement({tagName: 'div', classEl: 'search-elements'});
  const searchForPlant = createElement({tagName: 'input', placeholder: 'Find your plant!', classEl: 'plant-search'});
  const searchButton = createElement({tagName: 'button', textContent: 'Find', classEl: 'search-btn'});
  const cancelSearchBtn = createElement({tagName: 'button', textContent: 'Cancel', classEl: 'cancel-search-btn'});

  return { userSearch, searchForPlant, searchButton, cancelSearchBtn };
}

/**
 * Render plant search form on screen.
 */
export const renderNewPlantSearch = () => {
  const { userSearch, searchForPlant, searchButton, cancelSearchBtn } = createSearchInput();
  const { dashboard, userPlantGrid } = domElements;

  hideInitialDomElements();
  hideElements(userPlantGrid);

  appendChildren(userSearch, searchForPlant, searchButton);
  appendChildren(dashboard, userSearch, cancelSearchBtn);

  localEventManager.addEventListener(searchButton, 'click', () => {
    searchButtonClickHandler(userSearch, searchForPlant, searchButton, cancelSearchBtn);
  });
  localEventManager.addEventListener(cancelSearchBtn, 'click', () => {
    cancelSearchButtonClickHandler(userSearch, dashboard, cancelSearchBtn);
  })
}

/**
 * Handle plant search button click.
 * @param {HTMLElement} userSearch 
 * @param {HTMLElement} searchForPlant 
 * @param {HTMLElement} searchButton 
 * @param {HTMLElement} cancelSearchBtn 
 */
export const searchButtonClickHandler = (userSearch, searchForPlant, searchButton, cancelSearchBtn) => {
  renderPlantSearchResults(userSearch, searchForPlant, searchButton, cancelSearchBtn);
  localEventManager.removeEventListener(searchButton, 'click');
}

/**
 * Handle cancel search button click.
 * @param {HTMLElement} userSearch 
 * @param {HTMLElement} dashboard 
 * @param {HTMLElement} cancelSearchBtn 
 */
const cancelSearchButtonClickHandler = (userSearch, dashboard, cancelSearchBtn) => {
  removeChildren(dashboard, userSearch, cancelSearchBtn);
  resetDomElements();
}

/**
 * Render results of user search.
 * @param {HTMLElement} userSearchInput
 * @param {HTMLElement} dashboard
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
 * Render search error message on screen.
 * @param {string} message
 */
const renderSearchErrorMessage = (message) => {
  const errorMessage = createElement({tagName:'h1', textContent: message, classEl: 'search-error-message'});
  return errorMessage;
}