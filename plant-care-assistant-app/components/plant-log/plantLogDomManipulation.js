import { createElement } from "../utils/globalDomManipulation"

/**
 * Manage dyanamic plant log elements.
 * @returns functions to create, get and refresh dynamic plant log elements.
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
      const plantLogTitle = document.querySelector('.section-title')
      const addPlantBtn = document.querySelector('.add-new-plant-btn')
      const userPlantsContainer = document.querySelector('.user-plants')

      return { plantLogTitle, addPlantBtn, userPlantsContainer }; 
    },
    resetPlantLogElements: () => {
      console.log('123')
      const { plantLogTitle, addPlantBtn, userPlantsContainer } = plantLogElements.getPlantLogElements();
      plantLogTitle.style.display = 'block';
      addPlantBtn.style.display = 'flex';
      userPlantsContainer.style.display = 'grid';
    }
  }
}

export const plantLogElements = dynamicPlantLogElementsManager();