// plantDiscoveryMain.js
/**
 * Main file for the Plant Discovery module, centralising the module's functionality.
 * To search for plants in the plant directory and render results on screen.
 */

import { domElements, createElement, clearSection } from "../utils/globalDomManipulation"
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren } from "../utils/gobalUtility";
import { createSearchInput } from "./plantDiscoveryDomManipulation";

import { renderPlantDetails } from "../plant-page/plantPageMain";
import { plantDirectory } from "../utils/data";

/**
 * Render plant search input on screen. Gets search elements from createSearchInput and appends them to the DOM.
 */
export const renderNewPlantSearch = () => {
  const { sectionHeader, plantDiscoveryTitle, plantDiscoveryDescription, searchContainer, searchInput, searchResultsContainer } = createSearchInput();
  const { plantDiscovery } = domElements;

  appendChildren(sectionHeader, plantDiscoveryTitle, /** plantDiscoveryDescription */ );
  appendChildren(searchContainer, searchInput, searchResultsContainer);
  appendChildren(plantDiscovery, sectionHeader, searchContainer);

  localEventManager.addEventListener(searchInput, 'input', () => {
    updateSearchResults(plantDiscovery, searchInput.value, searchResultsContainer, plantDirectory, '← back to search', '.plant-discovery', renderNewPlantSearch);
  }, 'PLANT_DISCOVERY')
}

/**
 * Live search results as user types plant name into the search field.
 * @param {HTMLElement} mainSection - eg. plantLogEl, plantQuiz, plantDiscovery.
 * @param {HTMLElement} searchInput
 * @param {HTMLElement} searchResultsContainer
 * @param {Array} searchArray - plantDirectory or userPlantLog.
 * @param {string} backButtonText - '← back to My Plants', '← back to Plant Quiz' etc.
 * @param {string} sectionClass - '.plant-log', '.plant-quiz' etc.
 * @param {function} sectionRender - renderMyPlants, renderPlantQuiz etc.
 */
export const updateSearchResults = (mainSection, searchInput, searchResultsContainer, searchArray, backButtonText, sectionClass, sectionRender) => {
  clearSection(searchResultsContainer);

  if (searchInput.length === 0) {
    return;
  }

  // match the users search input to the search array.
  const filteredPlants = searchArray.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase()));

  // render matching plant results on screen.
  if (filteredPlants.length > 0) {
    const plantInfoContainer = createElement({tagName: 'div', classEl: 'plant-info'});

    filteredPlants.forEach(plant => {
      const plantElement = createElement({tagName: 'div', textContent: plant.name, classEl: 'search-result-item'});
      appendChildren(searchResultsContainer, plantElement);

      localEventManager.addEventListener(plantElement, 'click', () => {
        clearSection(mainSection);
        appendChildren(mainSection, plantInfoContainer);
        renderPlantDetails(plant, plantInfoContainer, backButtonText, sectionClass, sectionRender);
      }, 'PLANT_DISCOVERY')
    });

  } else {
    const noResultsMessage = createElement({tagName: 'div', textContent: 'No plants found', classEl: 'no-results'});
    appendChildren(searchResultsContainer, noResultsMessage);
  }
}