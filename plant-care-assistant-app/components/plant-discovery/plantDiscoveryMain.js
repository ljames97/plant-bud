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
  const { sectionHeader, plantDiscoveryTitle, plantDiscoveryDescription, searchContainer, searchInput, searchResultsContainer } = createSearchInput();
  const { plantDiscovery } = domElements;

  appendChildren(sectionHeader, plantDiscoveryTitle, plantDiscoveryDescription);
  appendChildren(searchContainer, searchInput, searchResultsContainer);
  appendChildren(plantDiscovery, sectionHeader, searchContainer);

  localEventManager.addEventListener(searchInput, 'input', () => {
    updateSearchResults(plantDiscovery, searchInput.value, searchResultsContainer, sectionHeader, searchContainer, plantDirectory, 'back to search');
  })
}

/**
 * Live search results as user types plant name into the search field.
 * @param {HTMLElement} mainSection - main section element (eg. plantLog, plantQuiz, plantDiscovery).
 * @param {string} searchInput - value of user input into the search field.
 * @param {HTMLElement} searchResultsContainer - element to contain search results.
 * @param {HTMLElement} sectionHeader - header containg section title and description.
 * @param {HTMLElement} searchContainer - element to contain search input and search results.
 * @param {Array} searchArray - array of results (eg. plantDirectory, userPlantLog).
 * @returns 
 */
export const updateSearchResults = (mainSection, searchInput, searchResultsContainer, sectionHeader, searchContainer, searchArray, backButtonText) => {

  searchResultsContainer.innerHTML = '';

  if (searchInput.length === 0) {
    return;
  }

  const filteredPlants = searchArray.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase()));

  if (filteredPlants.length > 0) {
    const plantInfoContainer = createElement({tagName: 'div', classEl: 'plant-info'});

    filteredPlants.forEach(plant => {
      const plantElement = createElement({tagName: 'div', textContent: plant.name, classEl: 'search-result-item'});
      appendChildren(searchResultsContainer, plantElement);

      localEventManager.addEventListener(plantElement, 'click', () => {
        removeChildren(mainSection, sectionHeader, searchContainer, searchResultsContainer);
        appendChildren(mainSection, plantInfoContainer);
        renderPlantDetails(plant, plantInfoContainer, searchContainer, 'flex', backButtonText);
      })
    });

  } else {
    const noResultsMessage = createElement({tagName: 'div', textContent: 'No plants found', classEl: 'no-results'});
    appendChildren(searchResultsContainer, noResultsMessage);
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