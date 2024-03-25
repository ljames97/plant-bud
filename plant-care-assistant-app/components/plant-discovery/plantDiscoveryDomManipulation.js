// plantDiscoveryDomManipulation.js
/**
 * For stored dom elements, dynamic elements, and utility functions related to the dom. 
 */

import { createElement } from "../utils/globalDomManipulation";

/**
 * Create search input field for user to search for a plant.
 * @returns search input field, search and cancel buttons.
 */
export const createSearchInput = () => {
  const searchContainer = createElement({tagName: 'div', classEl: 'search-container'});
  const searchForPlant = createElement({tagName: 'input', placeholder: 'Find your plant!', classEl: 'plant-search'});
  const searchButton = createElement({tagName: 'button', textContent: 'Find', classEl: 'search-btn'});
  const searchResults = createElement({tagName: 'div', classEl: 'search-results'});

  return { searchContainer, searchForPlant, searchButton, searchResults };
}