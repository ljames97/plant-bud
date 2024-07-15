// plantLogDomManipulation.js

/**
 * For creating and managing dynamic elements within the Plant Log section.
 */

import { createElement, createMenuDots, domElements } from "../../global/dom-utils";
import { appendChildren, hideElements } from "../../global/utils";
import { setUpPlantLogListeners } from "../event-handlers";
import { plantLog, setPlantInfoBar } from "../plantLogMain";
import { createMenuButtons } from "./menuDomUtils";
import { createTaskSelect } from "./taskDomUtils";

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
  let _plantLogElementsCache = null;

  return {
    createPlantLogElements: () => {
      const { plantLogEl } = domElements;
      const sectionHeader = createElement({tagName: 'div', classEl: ['section-header']});
      const plantLogTitle = createElement({tagName: 'h1', textContent: 'My Plants', classEl: ['section-title']});
      const infoBarContainer = createElement({tagName: 'div', classEl: ['info-bar-container']});
      const plantInfoBar = createElement({tagName: 'div', classEl: ['plant-info-bar']});
      const editButtonContainer = createElement({tagName: 'div', classEl: ['edit-plant-log-container']});
      const editButton = createElement({tagName: 'button', classEl: ['edit-plant-log-button'], id: 'select-plant-btn', textContent: 'Select'});
      editButton.editMode = false;
      const editDots = createMenuDots();
      const userPlantsContainer = createElement({tagName: 'div', classEl: ['user-plants']});
      const menuButtons = createMenuButtons();
      const taskSelectContainer = createTaskSelect();

      appendChildren(editButtonContainer, editButton, editDots);
      appendChildren(infoBarContainer, plantInfoBar, editButtonContainer);
      appendChildren(sectionHeader, plantLogTitle)
      appendChildren(plantLogEl, sectionHeader, menuButtons, infoBarContainer, taskSelectContainer, userPlantsContainer);
      hideElements(editDots);

      setUpPlantLogListeners(editButton, editDots);
    },

    getPlantLogElements: () => {
      const plantLogTitle = document.querySelector('.section-title');
      const addPlantBtn = document.querySelector('.add-new-plant-btn');
      const userPlantsContainer = document.querySelector('.user-plants');
      const plantInfoBar = document.querySelector('.plant-info-bar');
      const editButtonContainer = document.querySelector('.edit-plant-log-container');
      const editButton = document.querySelector('.edit-plant-log-button');
      const editDots = document.querySelector('.menu-dots-container');

      return { plantLogTitle, addPlantBtn, userPlantsContainer, plantInfoBar, editButtonContainer, editButton, editDots };
    }
  }
}

export const plantLogElements = dynamicPlantLogElementsManager();

/**
 * Toggles select state of select button.
 * @param {HTMLElement} selectButton 
 */
export const toggleSelectButton = (selectButton) => {
  if (!selectButton.isSelected) {
    selectButton.style.backgroundColor = 'white';
    selectButton.isSelected = true;
  } else {
    selectButton.style.backgroundColor = 'transparent';
    selectButton.isSelected = false;
  }
}

/**
 * Toggles select state of plant.
 * @param {Object} plant - 
 */
export const togglePlantSelect = (plant) => {
  if (!plant.selected) {
    plant.selected = true
  } else {
    plant.selected = false;
  }
}

/**
 * Resets the edit button state and hides edit options.
 */
export const resetEditButton = () => {
  const { editButton, editDots } = plantLogElements.getPlantLogElements();
  if (editButton.editMode) {
    hideElements(editDots);
    editButton.textContent = 'Edit';
    editButton.editMode = false;
  }
}

/**
 * Updates the plant information bar with the current number of plants.
 */
export const updatePlantInfoBar = () => {
  const { plantInfoBar } = plantLogElements.getPlantLogElements();
  const { numberOfPlants } = setPlantInfoBar(plantLog.getUserPlantLog());
  plantInfoBar.textContent = `${numberOfPlants} plants`;
  showHideSelectButton(numberOfPlants);
}

export const showHideSelectButton = (numberOfPlants) => {
  const { editButtonContainer } = plantLogElements.getPlantLogElements();

  if (numberOfPlants === 0) {
    editButtonContainer.classList.add('hidden');
    editButtonContainer.classList.remove('flex');
  } else {
    editButtonContainer.classList.add('flex');
    editButtonContainer.classList.remove('hidden');
  }
}

/**
 * Moves a plant to the top of the plant grid.
 * @param {HTMLElement} userPlantContainer 
 */
export const movePlantToTop = (userPlantContainer) => {
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();

  if (userPlantContainer) {
    userPlantsContainer.prepend(userPlantContainer);
  }
}