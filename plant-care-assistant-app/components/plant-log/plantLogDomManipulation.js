// plantLogDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { createElement } from "../utils/globalDomManipulation"

/**
 * Creates and returns dynamic plant log elements.
 * This includes the section header, title, and containers for appending elements to the DOM.
 * 
 * Note: This function does not append the created elements to the DOM. It's the caller's responsibility
 * to place the returned elements appropriately in the application's UI.
 * 
 * @returns {Object} An object containing references for the plant log section.
 */
const dynamicPlantLogElementsManager = () => {

  return {
    createPlantLogElements: () => {
      const sectionHeader = createElement({tagName: 'div', classEl: 'section-header'});
      const plantLogTitle = createElement({tagName: 'h1', textContent: 'My Plants', classEl: 'section-title'});
      const searchContainer = createElement({tagName: 'div', classEl: 'search-container'});
      searchContainer.classList.add('plant-log');
      const searchInput = createElement({tagName: 'input', placeholder: 'Search plants', classEl: 'plant-search'});
      const searchResultsContainer = createElement({tagName: 'div', classEl: 'search-results'});
      const userPlantsContainer = createElement({tagName: 'div', classEl: 'user-plants'});
      const addPlantBtn = createElement({tagName: 'button', textContent: 'Add Plant!', classEl: 'add-new-plant-btn'});

      return { sectionHeader, plantLogTitle, searchContainer, searchInput, searchResultsContainer,userPlantsContainer, addPlantBtn };
    },
    getPlantLogElements: () => {
      const plantLogTitle = document.querySelector('.section-title');
      const searchContainer = document.querySelector('.search-container');
      const addPlantBtn = document.querySelector('.add-new-plant-btn');
      const userPlantsContainer = document.querySelector('.user-plants');

      return { plantLogTitle, searchContainer, addPlantBtn, userPlantsContainer }; 
    }
  }
}

export const plantLogElements = dynamicPlantLogElementsManager();