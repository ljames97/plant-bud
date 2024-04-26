// plantLogDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { buttonHighlight } from "../plant-discovery/plantDiscoveryDomManipulation";
import { clearSection, createElement, domElements, resetSection } from "../utils/globalDomManipulation"
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren } from "../utils/gobalUtility";
import { plantLog, renderDeletedPlants, renderMyPlants, renderPlantGrid, setPlantInfoBar } from "./plantLogMain";

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
      const sectionHeader = createElement({tagName: 'div', classEl: ['section-header']});
      const plantLogTitle = createElement({tagName: 'h1', textContent: 'My Plants', classEl: ['section-title']});
      const plantInfoBar = createElement({tagName: 'div', classEl: ['plant-info-bar']});
      const userPlantsContainer = createElement({tagName: 'div', classEl: ['user-plants']});
      const menuButtons = createMenuButtons();

      return { sectionHeader, menuButtons, plantInfoBar, plantLogTitle, userPlantsContainer };
    },
    getPlantLogElements: () => {
      const plantLogTitle = document.querySelector('.section-title');
      const addPlantBtn = document.querySelector('.add-new-plant-btn');
      const userPlantsContainer = document.querySelector('.user-plants');
      const plantInfoBar = document.querySelector('.plant-info-bar');

      return { plantLogTitle, addPlantBtn, userPlantsContainer, plantInfoBar };
    }
  }
}

const createMenuButtons = () => {
  const {plantLogEl} = domElements
  const menuButtons = createElement({tagName: 'div', classEl: ['search-tags']});
  const all = createElement({tagName: 'button', classEl: ['search-tag', 'log-menu-btn'], id: 'log-all', textContent: 'All'});
  const tasks = createElement({tagName: 'button', classEl: ['search-tag', 'log-menu-btn'], id: 'log-tasks', textContent: 'Tasks'});
  const archive = createElement({tagName: 'button', classEl: ['search-tag', 'log-menu-btn'], id: 'log-archive', textContent: 'Archive'});
  const searchTaskContainer = createElement({tagName: 'div', classEl: ['task-results']});
  appendChildren(plantLogEl, searchTaskContainer);

  all.inactiveBtns = [tasks, archive]
  tasks.inactiveBtns = [all, archive]
  archive.inactiveBtns = [all, tasks]
  const menuButtonsArray = [all, tasks, archive];

  menuButtonsArray.forEach(button => {
    localEventManager.addEventListener(button, 'click', () => {
      buttonHighlight(button, 'white', 'rgba(255, 255, 255, 0.224', 'black', 'white', ...button.inactiveBtns);
      }
    )
  }, 'PLANT_NAV');

  localEventManager.addEventListener(archive, 'click', () => {
    clearSection(searchTaskContainer, 'PLANT_LOG');
    renderDeletedPlants();
  }, 'PLANT_NAV');

  localEventManager.addEventListener(tasks, 'click', () => {
    const { plantInfoBar,  } = plantLogElements.getPlantLogElements();
    renderTasksList();
    const { numberOfTasks } = setPlantInfoBar(plantLog.getUserPlantLog());
    plantInfoBar.textContent = `${numberOfTasks} Tasks`;
  }, 'PLANT_NAV');

  localEventManager.addEventListener(all, 'click', () => {
    const { userPlantsContainer, plantInfoBar,  } = plantLogElements.getPlantLogElements();
    clearSection(userPlantsContainer, 'PLANT_LOG');
    clearSection(searchTaskContainer, 'PLANT_LOG');
    renderPlantGrid(plantLog.getUserPlantLog(), renderMyPlants, '← back to My Plants');
    
    const { numberOfPlants, numberOfTasks } = setPlantInfoBar(plantLog.getUserPlantLog());
    plantInfoBar.textContent = `${numberOfPlants} Plants, ${numberOfTasks} Tasks`;

  }, 'PLANT_NAV')

  appendChildren(menuButtons, all, tasks, archive);

  return menuButtons;
}

const renderTasksList = () => {
  const { plantLogEl } = domElements
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();
  const searchTaskContainer = document.querySelector('.task-results');
  appendChildren(plantLogEl, searchTaskContainer);
  clearSection(userPlantsContainer, 'PLANT_LOG');

  const userPlants = plantLog.getUserPlantLog();
  userPlants.forEach(plant => {
    if (plant.tasks && plant.tasks.length > 0) {
      plant.tasks.forEach(task => {
        const taskElement = createTaskElement(plant, task);
        appendChildren(searchTaskContainer, taskElement);
      });
    }
  });
}

const createTaskElement = (plant, task) => {
  const taskElement = createElement({tagName: 'div', classEl: ['task-element']});
  const taskSelector = createElement({tagName: 'button', classEl: ['task-selector']});
  const plantImageContainer = createElement({tagName: 'div', classEl: ['plant-task-image-container']});
  const plantImage = createElement({tagName: 'img', classEl: ['plant-task-image']});
  const plantTaskTextContainer = createElement({tagName: 'p', classEl: ['plant-task-text']});
  const plantTitle = createElement({tagName: 'p', classEl: ['plant-task-title']});
  let taskDescription = createElement({tagName: 'p', classEl: ['task-description']});

  plantTitle.textContent = plant.name;
  taskDescription.textContent = task.description;

  appendChildren(plantImageContainer, plantImage);
  appendChildren(plantTaskTextContainer, plantTitle, taskDescription);
  appendChildren(taskElement, taskSelector, plantImageContainer, plantTaskTextContainer);

  return taskElement;
}

export const plantLogElements = dynamicPlantLogElementsManager();