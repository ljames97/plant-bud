// plantSeardh.js
/**
 * To search for plants in the plant directory and render results on screen
 */

import { renderManualPlantUploadBtn } from "./addNewPlant";
import { plantDirectory } from "./data";
import { createElement, domElements, hideInitialDomElements, resetDomElements } from "./domManipulation";
import { localEventManager } from "./eventHandling";
import { appendChildren, hideElements, removeChildren } from "./utility";

/**
 * Create search input field for user to search for a plant.
 * @returns search input field, search and cancel buttons.
 */
const createSearchInput = () => {
  const userSearch = createElement({tagName: 'div', classEl: 'search-elements'});
  const searchForPlant = createElement({tagName: 'input', placeholder: 'Find your plant!', classEl: 'plant-search'});
  const searchButton = createElement({tagName: 'button', textContent: 'Find', classEl: 'search-btn'});

  return { userSearch, searchForPlant, searchButton };
}

/**
 * Render plant search form on screen.
 */
export const renderNewPlantSearch = () => {
  const { userSearch, searchForPlant, searchButton } = createSearchInput();
  const { plantDiscovery } = domElements;

  appendChildren(userSearch, searchForPlant, searchButton);
  appendChildren(plantDiscovery, userSearch);

  localEventManager.addEventListener(searchButton, 'click', () => {
    searchButtonClickHandler(userSearch, searchForPlant, searchButton);
  });
}

/**
 * Handle plant search button click.
 * @param {HTMLElement} userSearch 
 * @param {HTMLElement} searchForPlant 
 * @param {HTMLElement} searchButton 
 */
export const searchButtonClickHandler = (userSearch, searchForPlant, searchButton) => {
  renderPlantSearchResults(userSearch, searchForPlant, searchButton);
  localEventManager.removeEventListener(searchButton, 'click');
}

/**
 * Render results of user search.
 * @param {HTMLElement} userSearchInput
 * @param {HTMLElement} plantLog
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