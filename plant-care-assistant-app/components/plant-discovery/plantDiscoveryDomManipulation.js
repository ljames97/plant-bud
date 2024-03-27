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
  const sectionHeader = createElement({tagName: 'div', classEl: 'section-header'});
  const plantDiscoveryTitle = createElement({tagName: 'h1', textContent: 'Discover', classEl: 'plant-discovery-title'});
  const plantDiscoveryDescription = createElement({tagName: 'p', textContent: 'Search our directory for plant information or find new plants to add to your dashboard', classEl: 'plant-discovery-description'});
  const searchContainer = createElement({tagName: 'div', classEl: 'discovery-search-container'});
  const searchInput = createElement({tagName: 'input', placeholder: 'Find your plant!', classEl: 'plant-search'});
  const searchResultsContainer = createElement({tagName: 'div', classEl: 'search-results'});

  return { sectionHeader, plantDiscoveryTitle, plantDiscoveryDescription, searchContainer, searchInput, searchResultsContainer };
}