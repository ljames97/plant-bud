// plantDiscoveryMain.js
/**
 * To search for plants in the plant directory and render results on screen
 */

import { domElements, createElement, prepareDashboard } from "../utils/globalDomManipulation"
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren, removeChildren } from "../utils/gobalUtility";
import { createSearchInput } from "./plantDiscoveryDomManipulation";

import { renderPlantDetails } from "../plant-page/plantPageMain";
import { plantDirectory } from "../utils/data";


/**
 * Initialise the plant discovery section of the app
 */
export const startPlantDiscovery = () => {
  const { myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;

  if (discoverBtn.classList.contains('active')) {
    console.log('ACTIVE');
    return;
  }

  if (discoverBtn.classList.contains('dormant')) {
    prepareDashboard(discoverBtn, myPlantsBtn, plantQuizBtn);
    return;
  }

  prepareDashboard(discoverBtn, myPlantsBtn, plantQuizBtn);
  renderNewPlantSearch();
  discoverBtn.classList.add('dormant');
}

/**
 * Render plant search form on screen.
 */
export const renderNewPlantSearch = () => {
  const { plantDiscoveryTitle, plantDiscoveryDescription, searchContainer, searchForPlant, searchResults } = createSearchInput();
  const { plantDiscovery } = domElements;

  appendChildren(searchContainer, searchForPlant);
  appendChildren(plantDiscovery, plantDiscoveryTitle, plantDiscoveryDescription, searchContainer );

  localEventManager.addEventListener(searchForPlant, 'input', () => {
    updateSearchResults(searchForPlant.value, searchResults, plantDiscoveryTitle, plantDiscoveryDescription, searchContainer);
  })

  appendChildren(plantDiscovery, searchContainer, searchResults);
}

/**
 * Live search results as user types plant name into the search field.
 * @param {string} userSearch - value of user input into the search field
 * @param {HTMLElement} resultsContainer - element to contain search results
 * @returns 
 */
const updateSearchResults = (userSearch, resultsContainer, plantDiscoveryTitle, plantDiscoveryDescription, searchContainer) => {
  const { plantDiscovery } = domElements;
  const plantInfoContainer = createElement({tagName: 'div', classEl: 'plant-info'});


  resultsContainer.innerHTML = '';

  if (userSearch.length === 0) {
    return;
  }

  const filteredPlants = plantDirectory.filter(plant => plant.name.toLowerCase().includes(userSearch.toLowerCase()));

  if (filteredPlants.length > 0) {
    // turn plant list into gallery type view of plant images/names
    filteredPlants.forEach(plant => {
      const plantElement = createElement({tagName: 'div', textContent: plant.name, classEl: 'search-result-item'});
      appendChildren(resultsContainer, plantElement);
      localEventManager.addEventListener(plantElement, 'click', () => {
        removeChildren(plantDiscovery, plantDiscoveryTitle, plantDiscoveryDescription, searchContainer, resultsContainer);
        appendChildren(plantDiscovery, plantInfoContainer);
        renderPlantDetails(plant, plantInfoContainer, searchContainer, 'flex', 'back to search' );
      })
    });
  } else {
    const noResultsMessage = createElement({tagName: 'div', textContent: 'No plants found', classEl: 'no-results'});
    appendChildren(resultsContainer, noResultsMessage);
  }
}

/**
 * Render results of user search.
 * @param {HTMLElement} userSearchInput
 * @param {HTMLElement} plantLog
 * @returns 
 */
export const renderPlantSearchResults = (userSearch, userSearchInput) => {
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