// plantDiscoveryMain.js
/**
 * Main file for the Plant Discovery module, centralising the module's functionality.
 * To search for plants in the plant directory and render results on screen.
 */

import "./plantLibrary.css";
import { localEventManager } from "../global/event-handlers";
import { appendChildren } from "../global/utils";
import { createPlantResultElement, createSearchInput } from "./plantLibraryDomUtils";
import { plantDirectory } from "../global/data";
import { plantElementClickHandler, setUpPlantSearchListeners } from "./plantLibraryEventHandlers";
import { clearSection, createElement, domElements } from "../global/dom-utils";

/**
 * Render plant search input on screen. Get search elements from createSearchInput.
 */
export const renderNewPlantSearch = () => {
  const { searchInput, searchResultsContainer } = createSearchInput();
  const { plantLibrary } = domElements;

  updateSearchResults(plantLibrary, searchInput.value, searchResultsContainer, null, '← back to search', '.plant-library', renderNewPlantSearch);
  setUpPlantSearchListeners(searchInput, plantLibrary, searchResultsContainer);
}

/**
 * Live search results as user types plant name into the search field.
 * @param {HTMLElement} mainSection - main section element where search results will be appended.
 * @param {string} searchInput - current search input value.
 * @param {HTMLElement} searchResultsContainer - container for displaying search results.
 * @param {Array} searchArray - array to search within (plantDirectory or userPlantLog).
 * @param {string} backButtonText - text for the back button.
 * @param {string} sectionClass - class for the section.
 * @param {Function} sectionRender - function to render the section.
 */
export const updateSearchResults = (mainSection, searchInput, searchResultsContainer, searchArray, backButtonText, sectionClass, sectionRender) => {
  clearSection(searchResultsContainer);

  // decide on search array based on button tags or user plant log. Match the users search input to the search array
  if (!searchArray) {
    const tagArray = getFilteredPlantsArray();
    searchArray = tagArray;
  }

  const filteredPlants = searchArray.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase()));

  // render matching plant results on screen.
  if (filteredPlants.length > 0) {
    const plantInfoContainer = createElement({tagName: 'div', classEl: ['plant-info']});

    filteredPlants.forEach(plant => {
      const plantElement = createPlantResultElement(plant, sectionClass);
      appendChildren(searchResultsContainer, plantElement);

      localEventManager.addEventListener(plantElement, 'click', () => {
        plantElementClickHandler(mainSection, plantInfoContainer, plant, backButtonText, sectionClass, sectionRender);
      }, 'PLANT_SEARCH');
    });
  }

  updatePlantCounter(filteredPlants);
}

/**
 * Updates the plant counter display based on the number of filtered plants
 * @param {Array} filteredPlants - array of filtered plant objects.
 */
export const updatePlantCounter = (filteredPlants) => {
  const plantsFoundCounter = document.querySelector('.plants-found-counter');
  
  if (!plantsFoundCounter) {
    return;
  }

  const plantsFound = filteredPlants.length;
  const text = plantsFound > 1 || plantsFound === 0 ? `${plantsFound} plants found` : `${plantsFound} plant found`;
  plantsFoundCounter.textContent = text;
}

/**
 * Filters the plant directory based on the active skill tag button.
 * @returns Array of filtered plant objects based on the selected skill tag.
 */
export const getFilteredPlantsArray = () => {
  const allTag = document.getElementById('all-tag');
  const beginnerTag = document.getElementById('beginner-tag');
  const mediumTag = document.getElementById('medium-tag');
  const advancedTag = document.getElementById('advanced-tag');
  const skillButtons = [allTag, beginnerTag, mediumTag, advancedTag];

  for (let i = 0; i < skillButtons.length; i++) {
    const button = skillButtons[i];
    if (button.classList.contains('active')) {
      if (button.textContent === 'All') {
        return plantDirectory;
      } else {
        return plantDirectory.filter(plant => plant.skill[0] === button.textContent);
      }
    }
  }
}