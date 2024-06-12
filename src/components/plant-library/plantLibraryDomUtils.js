// plantLibraryDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { plantLog, renderQuickMenu } from "../plant-log";
import { createElement, createMenuDots, domElements } from "../global";
import { handleDocumentClick, localEventManager } from "../global";
import { appendChildren } from "../global";
import { quickAddHandler, setUpTagButtonListeners } from "./plantLibraryEventHandlers";

/**
 * Creates and returns a search input field along with related UI elements for plant library.
 * This includes the section header, title, description, and containers for the input and search results.
 * 
 * Note: This function does not append the created elements to the DOM. It's the caller's responsibility
 * to place the returned elements appropriately in the application's UI.
 * 
 * @returns {Object} An object containing references to the created elements.
 */
export const createSearchInput = () => {
  const { plantLibrary } = domElements;
  const sectionHeader = createElement({tagName: 'div', classEl: ['section-header']});
  const plantDiscoveryTitle = createElement({tagName: 'h1', textContent: 'Plant Library', classEl: ['plant-library-title']});
  const searchContainer = createElement({tagName: 'div', classEl: ['library-search-container']});
  const { searchTags, tagButtons } = createSearchTags();
  const searchInput = createElement({tagName: 'input', placeholder: 'Search', classEl: ['plant-search']});
  const plantsFoundCounter = createElement({tagName: 'p', classEl: ['plants-found-counter'], textContent: ''});
  const searchResultsContainer = createElement({tagName: 'div', classEl: ['search-results']});

  appendChildren(searchContainer, searchTags);
  appendChildren(sectionHeader, plantDiscoveryTitle );
  appendChildren(searchContainer, searchInput, plantsFoundCounter, searchResultsContainer);
  appendChildren(plantLibrary, sectionHeader, searchContainer);

  setUpTagButtonListeners(tagButtons, plantLibrary, searchInput, searchResultsContainer);

  return { searchInput, searchResultsContainer };
}

/**
 * Creates and returns search tags for plant library.
 * @returns {Object} An object containing references to the created elements.
 */
const createSearchTags = () => {
  const searchTags = createElement({tagName: 'div', classEl: ['search-tags']});
  const allTag = createElement({tagName: 'button', textContent: 'All', classEl: ['search-tag'], id: 'all-tag'});
  const beginnerTag = createElement({tagName: 'button', textContent: 'Beginner', classEl: ['search-tag'], id: 'beginner-tag'});
  const mediumTag = createElement({tagName: 'button', textContent: 'Medium', classEl: ['search-tag'], id: 'medium-tag'});
  const advancedTag = createElement({tagName: 'button', textContent: 'Advanced', classEl: ['search-tag'], id: 'advanced-tag'});
  allTag.classList.add('active');

  allTag.inactiveBtns = [beginnerTag, mediumTag, advancedTag];
  beginnerTag.inactiveBtns = [allTag, mediumTag, advancedTag];
  mediumTag.inactiveBtns = [allTag, beginnerTag, advancedTag];
  advancedTag.inactiveBtns = [allTag, beginnerTag, mediumTag];
  const tagButtons = [allTag, beginnerTag, mediumTag, advancedTag];
  
  appendChildren(searchTags, allTag, beginnerTag, mediumTag, advancedTag);

  return { searchTags, tagButtons };
}

/**
 * Creates and returns a plant result element with the provided plant data.
 * @param {Object} plant - plant object containing details to be displayed.
 * @returns Plant result element.
 */
export const createPlantResultElement = (plant) => {
  const plantElement = createElement({tagName: 'div', classEl: ['plant-element']});
  const plantResultContainer = createElement({tagName: 'div', classEl: ['plant-result-container']});
  const plantTextContainer = createElement({tagName: 'div', classEl: ['plant-text-container']});
  const plantTitle = createElement({tagName: 'p', textContent: plant.name, classEl: ['plant-result-title']});
  const plantDescription = createElement({tagName: 'p', textContent: plant.shortDescription, classEl: ['plant-result-description']});
  const plantTag = createElement({tagName: 'p', textContent: plant.skill[0], classEl: ['plant-result-tag']});
  const plantImage = createElement({tagName: 'img', classEl: ['plant-result-image']});
  const plantImageContainer = createElement({tagName: 'div', classEl: ['plant-result-image-container']});
  const lineSeparator = createElement({tagName: 'div', classEl: ['line-separator']});
  plantImage.src = plant.image;
  const menuDotContainer = createMenuDots();
  const searchDropMenu = createElement({tagName: 'div', classEl: ['search-drop-menu']});
  plantElement.plantObject = plant;

  appendChildren(plantTextContainer, plantTitle, plantDescription, plantTag);
  appendChildren(plantImageContainer, plantImage);
  appendChildren(searchDropMenu, menuDotContainer);
  appendChildren(plantResultContainer, plantImageContainer, plantTextContainer, searchDropMenu);
  appendChildren(plantElement, plantResultContainer, lineSeparator);

  localEventManager.addEventListener(menuDotContainer, 'click', (event) => {
    renderQuickMenu(event, createMenuItems, menuDotContainer, plant);
    localEventManager.addEventListener(document, 'click', handleDocumentClick, 'PLANT_LOG');
  }, 'PLANT_LOG');

  return plantElement;
}

/**
 * Toggles the visibility of the menu by removing the existing drop menu container if it exists.
 */
export const toggleMenu = () => {
  const existingMenu = document.querySelector('.drop-menu-container');
  if (existingMenu) {
      existingMenu.remove();
  }
}

/**
 * Creates and appends menu items to the menu dots container.
 * @param {HTMLElement} menuDots - menu dots container element.
 * @param {Object} plant - plant object for which the menu items are being created.
 */
export const createMenuItems = (menuDots, plant) => {
  const isAdded = isPlantAdded(plant);
  const dropMenuContainer = createElement({tagName: 'div', classEl: ['drop-menu-container']});
  const quickAdd = createElement({tagName: 'p', textContent: !isAdded ? 'Add to My Plants' : 'Added', classEl: ['drop-menu-item']});

  appendChildren(dropMenuContainer, quickAdd);
  appendChildren(menuDots, dropMenuContainer);

  localEventManager.addEventListener(quickAdd, 'click', () => {
    quickAddHandler(quickAdd, plant, isAdded);
  }, 'PLANT_SEARCH');
}

/**
 * Finds plant in the userPlantLog, returns found plant or false.
 * @param {Object} plant - plant details
 * @returns {Boolean} Is plant already in the userPlantLog
 */
const isPlantAdded = (plant) => {
  const isAdded = plantLog.getPlant(plant);
  return isAdded;
}

/**
 * Replaces an element with a new element indicating the plant has been added.
 * @param {HTMLElement} element - element to be replaced.
 */
export const replaceElement = (element) => {
  const newText = createElement({tagName: 'p', textContent: 'Added', classEl: ['drop-menu-item']});
  element.parentNode.replaceChild(newText, element);
}