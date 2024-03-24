// plant-discovery.js
/**
 * To search for plants in the plant directory and render results on screen
 */

import { domElements, prepareDashboard, createElement } from "../domManipulation"
import { plantDirectory } from "../data";
import { localEventManager } from "../eventHandling";
import { appendChildren, hideElements } from "../utility";
import { renderPlantDetails } from "../plantPage";


// TODO
// - after clicking back to search results, why does the live serch finction not work?
// - documentation
// - start the main todo list
// 


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
const renderNewPlantSearch = () => {
  const { searchContainer, searchForPlant, searchButton, searchResults } = createSearchInput();
  const { plantDiscovery } = domElements;

  appendChildren(searchContainer, searchForPlant, searchButton);
  appendChildren(plantDiscovery, searchContainer);

  localEventManager.addEventListener(searchForPlant, 'input', () => {
    updateSearchResults(searchForPlant.value, searchResults);
  })

  localEventManager.addEventListener(searchButton, 'click', () => {
    searchButtonClickHandler(searchContainer, searchForPlant, searchButton);
  });

  appendChildren(plantDiscovery, searchContainer, searchResults);
}

const updateSearchResults = (userSearch, resultsContainer) => {
  const { plantDiscovery } = domElements;
  const plantInfoContainer = createElement({tagName: 'div', classEl: 'plant-info'});
  const searchContainer = document.querySelector('.search-container');
  appendChildren(plantDiscovery, plantInfoContainer);


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
        hideElements(searchContainer, resultsContainer);
        renderPlantDetails(plant, plantInfoContainer, searchContainer, 'flex', 'back to search' );
      })
    });
  } else {
    const noResultsMessage = createElement({tagName: 'div', textContent: 'No plants found', classEl: 'no-results'});
    appendChildren(resultsContainer, noResultsMessage);
  }
}
 
/**
 * Handle plant search button click.
 * @param {HTMLElement} userSearch 
 * @param {HTMLElement} searchForPlant 
 * @param {HTMLElement} searchButton 
 */
export const searchButtonClickHandler = (userSearch, searchForPlant, searchButton) => {
  renderPlantSearchResults(userSearch, searchForPlant);
  localEventManager.removeEventListener(searchButton, 'click');
}

/**
 * Render results of user search.
 * @param {HTMLElement} userSearchInput
 * @param {HTMLElement} plantLog
 * @returns 
 */
const renderPlantSearchResults = (userSearch, userSearchInput) => {
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

/**
 * Create search input field for user to search for a plant.
 * @returns search input field, search and cancel buttons.
 */
const createSearchInput = () => {
  const searchContainer = createElement({tagName: 'div', classEl: 'search-container'});
  const searchForPlant = createElement({tagName: 'input', placeholder: 'Find your plant!', classEl: 'plant-search'});
  const searchButton = createElement({tagName: 'button', textContent: 'Find', classEl: 'search-btn'});
  const searchResults = createElement({tagName: 'div', classEl: 'search-results'});

  return { searchContainer, searchForPlant, searchButton, searchResults };
}