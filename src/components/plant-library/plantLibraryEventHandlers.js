// plantDiscoveryEventHandling.js
/**
 * Event handler logic for plant search section
 */

import { copyToMyPlants, renderPlantDetails } from "../plant-page";
import { appendChildren } from "../global/utils";
import { replaceElement } from "./plantLibraryDomUtils";
import { renderNewPlantSearch, updateSearchResults } from "./plantLibraryMain";
import { buttonHighlight, clearSection } from "../global/dom-utils";
import { handleDocumentClick, localEventManager } from "../global/event-handlers";

/**
 * Handles the click event on a plant element, clearing the main section and rendering the plant details.
 * @param {HTMLElement} mainSection - main section element where the plant info container will be appended.
 * @param {HTMLElement} plantInfoContainer - container element where plant information will be displayed.
 * @param {Object} plant - plant object containing the details to be rendered.
 * @param {String} backButtonText - text to display on the back button.
 * @param {String} sectionClass - class for the section.
 * @param {Function} sectionRender - function to render the section.
 */
export const plantElementClickHandler = (mainSection, plantInfoContainer, plant, backButtonText, sectionClass, sectionRender) => {
  clearSection(mainSection, 'PLANT_SEARCH');
  appendChildren(mainSection, plantInfoContainer);
  renderPlantDetails(plant, plantInfoContainer, backButtonText, sectionClass, sectionRender);
}

/**
 * Handles the quick add action for a plant, adding it to "My Plants".
 * @param {HTMLElement} quickAdd - quick add menu item element.
 * @param {Object} plant - plant object to be added to "My Plants".
 * @returns 
 */
export const quickAddHandler = (quickAdd, plant, isAdded) => {
  if (isAdded) {
    return;
  }
  copyToMyPlants(plant);
  replaceElement(quickAdd);
  plant.isAdded = true;
}

/**
 * Sets up event listeners for tag buttons. Handles rendering applicable search results for each tag and highlighting the active button. 
 * @param {HTMLElement} tagButtons 
 * @param {HTMLElement} plantLibrary 
 * @param {HTMLElement} searchInput 
 * @param {HTMLElement} searchResultsContainer 
 */
export const setUpTagButtonListeners = (tagButtons, plantLibrary, searchInput, searchResultsContainer) => {
  tagButtons.forEach(button => {
    localEventManager.addEventListener(button, 'click', () => {
      buttonHighlight(button, 'white', 'rgba(255, 255, 255, 0.224', 'black', 'white', ...button.inactiveBtns);
      if (button.id === 'all-tag') {
        updateSearchResults(plantLibrary, searchInput.value, searchResultsContainer, null, '← back to search', '.plant-library', renderNewPlantSearch);
        return;
      }
      updateSearchResults(plantLibrary, searchInput.value, searchResultsContainer, null, '← back to search', '.plant-library', renderNewPlantSearch);
    }, 'PLANT_SEARCH');
  });
}

/**
 * Sets up event listeners for the plant search page. Handles updating search results according to user search input and handles document click.
 * @param {HTMLElement} searchInput 
 * @param {HTMLElement} plantLibrary 
 * @param {HTMLElement} searchResultsContainer 
 */
export const setUpPlantSearchListeners = (searchInput, plantLibrary, searchResultsContainer) => {
  localEventManager.addEventListener(searchInput, 'input', () => {
    updateSearchResults(plantLibrary, searchInput.value, searchResultsContainer, null, '← back to search', '.plant-library', renderNewPlantSearch);
  }, 'PLANT_SEARCH');

  localEventManager.addEventListener(document, 'click', handleDocumentClick, 'PLANT_SEARCH');
  localEventManager.removeAllEventListeners('PLANT_NAV');
}