// plantDiscoveryDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { plantDirectory } from "../utils/data";
import { createElement, domElements } from "../utils/globalDomManipulation";
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren } from "../utils/gobalUtility";
import { renderNewPlantSearch, updateSearchResults } from "./plantDiscoveryMain";

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
  const { plantDiscovery } = domElements;
  const sectionHeader = createElement({tagName: 'div', classEl: 'section-header'});
  const plantDiscoveryTitle = createElement({tagName: 'h1', textContent: 'Plant Search', classEl: 'plant-discovery-title'});
  const plantDiscoveryDescription = createElement({tagName: 'p', textContent: 'Search our directory for plant information or find new plants to add to your dashboard', classEl: 'plant-discovery-description'});
  const searchContainer = createElement({tagName: 'div', classEl: 'discovery-search-container'});
  const { searchTags, tagButtons } = createSearchTags();
  const searchInput = createElement({tagName: 'input', placeholder: 'Search', classEl: 'plant-search'});
  const plantsFoundCounter = createElement({tagName: 'p', classEl: 'plants-found-counter', textContent: ''});
  const searchResultsContainer = createElement({tagName: 'div', classEl: 'search-results'});

  tagButtons.forEach(button => {
    localEventManager.addEventListener(button, 'click', () => {
      buttonHighlight(button, ...button.inactiveBtns);
      if (button.textContent === 'All') {
        updateSearchResults(plantDiscovery, searchInput.value, searchResultsContainer, null, '← back to search', '.plant-discovery', renderNewPlantSearch);
        return;
      }
      updateSearchResults(plantDiscovery, searchInput.value, searchResultsContainer, null, '← back to search', '.plant-discovery', renderNewPlantSearch);
    }, 'PLANT_DISCOVERY');
  });

  appendChildren(searchContainer, searchTags);

  return { sectionHeader, plantDiscoveryTitle, plantDiscoveryDescription, searchContainer, searchTags, searchInput, plantsFoundCounter, searchResultsContainer };
}

const createSearchTags = () => {
  const searchTags = createElement({tagName: 'div', classEl: 'search-tags'});
  const allTag = createElement({tagName: 'button', textContent: 'All', classEl: 'search-tag', id: 'all-tag'});
  const beginnerTag = createElement({tagName: 'button', textContent: 'Beginner', classEl: 'search-tag', id: 'beginner-tag'});
  const mediumTag = createElement({tagName: 'button', textContent: 'Medium', classEl: 'search-tag', id: 'medium-tag'});
  const advancedTag = createElement({tagName: 'button', textContent: 'Advanced', classEl: 'search-tag', id: 'advanced-tag'});
  allTag.classList.add('active');

  allTag.inactiveBtns = [beginnerTag, mediumTag, advancedTag];
  beginnerTag.inactiveBtns = [allTag, mediumTag, advancedTag];
  mediumTag.inactiveBtns = [allTag, beginnerTag, advancedTag];
  advancedTag.inactiveBtns = [allTag, beginnerTag, mediumTag];
  const tagButtons = [allTag, beginnerTag, mediumTag, advancedTag];
  
  appendChildren(searchTags, allTag, beginnerTag, mediumTag, advancedTag);

  return { searchTags, tagButtons };
}

const buttonHighlight = (activeBtn, ...inactiveBtns) => {
  activeBtn.classList.add('active');
  activeBtn.style.backgroundColor = 'white';
  activeBtn.style.color = 'black';

  inactiveBtns.forEach(button => {
    button.style.backgroundColor = 'rgba(255, 255, 255, 0.224)';
    button.style.color = 'white';
    button.classList.remove('active');
  });
}