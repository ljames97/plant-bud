import { createElement } from "../utils/globalDomManipulation"

/**
 * Manage dyanamic plant log elements.
 * @returns functions to create and get dynamic plant log elements.
 */
const dynamicPlantLogElementsManager = () => {

  return {
    createPlantLogElements: () => {
      const plantLogTitle = createElement({tagName: 'h1', textContent: 'My Plants', classEl: 'section-title'});
      const addPlantBtn = createElement({tagName: 'button', textContent: 'Add Plant!', classEl: 'add-new-plant-btn'});
      const userPlantsContainer = createElement({tagName: 'div', classEl: 'user-plants'});

      return { plantLogTitle, addPlantBtn, userPlantsContainer };
    },
    getPlantLogElements: () => {
      const plantLogTitle = document.querySelector('.section-title')
      const addPlantBtn = document.querySelector('.add-new-plant-btn')
      const userPlantsContainer = document.querySelector('.user-plants')

      return { plantLogTitle, addPlantBtn, userPlantsContainer }; 
    },
    resetPlantLogElements: () => {
      const { plantLogTitle, addPlantBtn, userPlantsContainer } = plantLogElements.getPlantLogElements();
      plantLogTitle.style.display = 'block';
      addPlantBtn.style.display = 'flex';
      userPlantsContainer.style.display = 'grid';
    }
  }
}

export const plantLogElements = dynamicPlantLogElementsManager();