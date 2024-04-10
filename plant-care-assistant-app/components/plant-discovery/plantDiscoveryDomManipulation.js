// plantDiscoveryDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { createElement } from "../utils/globalDomManipulation";

/**
 * Creates and returns a search input field along with related UI elements for plant discovery.
 * This includes the section header, title, description, and containers for the input and search results.
 * 
 * Note: This function does not append the created elements to the DOM. It's the caller's responsibility
 * to place the returned elements appropriately in the application's UI.
 * 
 * @returns {Object} An object containing references to the created elements.
 */
export const createSearchInput = () => {
  const sectionHeader = createElement({tagName: 'div', classEl: 'section-header'});
  const plantDiscoveryTitle = createElement({tagName: 'h1', textContent: 'Plant Search', classEl: 'plant-discovery-title'});
  const plantDiscoveryDescription = createElement({tagName: 'p', textContent: 'Search our directory for plant information or find new plants to add to your dashboard', classEl: 'plant-discovery-description'});
  const searchContainer = createElement({tagName: 'div', classEl: 'discovery-search-container'});
  const searchInput = createElement({tagName: 'input', placeholder: 'Search Plants', classEl: 'plant-search'});
  const searchResultsContainer = createElement({tagName: 'div', classEl: 'search-results'});

  return { sectionHeader, plantDiscoveryTitle, plantDiscoveryDescription, searchContainer, searchInput, searchResultsContainer };
}