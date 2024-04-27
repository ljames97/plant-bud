// plantLogDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { buttonHighlight } from "../plant-discovery/plantDiscoveryDomManipulation";
import { createMenuDots, handleDocumentClick, setUpPlantElementListeners } from "../plant-discovery/plantDiscoveryMain";
import { selectButtonHandler, setSelectButton } from "../plant-page/plantPageDomManipulation";
import { clearSection, createElement, domElements, resetSection } from "../utils/globalDomManipulation"
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren, hideElements, removeChildren, showElements } from "../utils/gobalUtility";
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
      const infoBarContainer = createElement({tagName: 'div', classEl: ['info-bar-container']});
      const plantInfoBar = createElement({tagName: 'div', classEl: ['plant-info-bar']});
      const editButtonContainer = createElement({tagName: 'div', classEl: ['edit-plant-log-container']});
      const editButton = createElement({tagName: 'button', classEl: ['edit-plant-log-button', 'search-tag'], textContent: 'Edit'});
      editButton.editMode = false;
      const editDots = createMenuDots();
      const userPlantsContainer = createElement({tagName: 'div', classEl: ['user-plants']});
      const menuButtons = createMenuButtons();

      appendChildren(editButtonContainer, editButton, editDots);
      appendChildren(infoBarContainer, plantInfoBar, editButtonContainer);
      hideElements(editDots);

      localEventManager.addEventListener(editButton, 'click', () => {
        editButtonHandler(editDots, editButton);
      }, 'PLANT_EDIT');

      return { sectionHeader, menuButtons, plantInfoBar, infoBarContainer, plantLogTitle, userPlantsContainer };
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

const editButtonHandler = (editDots, editButton) => {
  if (editButton.editMode) {
    hideElements(editDots);
    editButton.textContent = 'Edit';
    editButton.editMode = false;
  } else {
    showElements('flex', editDots);
    editButton.textContent = 'Cancel';
    editButton.editMode = true;
  }
}

const resetEditButton = () => {
  const { editButton, editDots } = plantLogElements.getPlantLogElements();
  if (editButton.editMode) {
    hideElements(editDots);
    editButton.textContent = 'Edit';
    editButton.editMode = false;
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
    const { editButtonContainer } = plantLogElements.getPlantLogElements();
    clearSection(searchTaskContainer, 'PLANT_LOG');
    resetEditButton();
    showElements('flex', editButtonContainer);
    renderDeletedPlants();
  }, 'PLANT_NAV');

  localEventManager.addEventListener(tasks, 'click', () => {
    const { plantInfoBar, editButtonContainer } = plantLogElements.getPlantLogElements();
    clearSection(searchTaskContainer, 'PLANT_LOG');
    hideElements(editButtonContainer);
    renderTasksList(tasks);
    updateTaskBar(plantInfoBar);
  }, 'PLANT_NAV');

  localEventManager.addEventListener(all, 'click', () => {
    const { userPlantsContainer, plantInfoBar, editButtonContainer} = plantLogElements.getPlantLogElements();
    clearSection(userPlantsContainer, 'PLANT_LOG');
    clearSection(searchTaskContainer, 'PLANT_LOG');
    resetEditButton();
    showElements('flex', editButtonContainer);
    renderPlantGrid(plantLog.getUserPlantLog(), renderMyPlants, '← back to My Plants');
    const { numberOfPlants, numberOfTasks } = setPlantInfoBar(plantLog.getUserPlantLog());
    plantInfoBar.textContent = `${numberOfPlants} plants, ${numberOfTasks} tasks`;

  }, 'PLANT_NAV')

  appendChildren(menuButtons, all, tasks, archive);

  return menuButtons;
}

const updateTaskBar = (plantInfoBar) => {
  const { numberOfTasks } = setPlantInfoBar(plantLog.getUserPlantLog());
  plantInfoBar.textContent = `${numberOfTasks} tasks`;
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

  setUpPlantElementListeners('.task-element', createTaskMenu);

  localEventManager.addEventListener(document, 'click', handleDocumentClick, 'PLANT_LOG');
}

const createTaskElement = (plant, task) => {
  const taskElement = createElement({tagName: 'div', classEl: ['task-element']});
  const taskContainer = createElement({tagName: 'div', classEl: ['task-result-container']})
  const taskSelector = createElement({tagName: 'button', classEl: ['task-selector']});
  const plantImageContainer = createElement({tagName: 'div', classEl: ['plant-task-image-container']});
  const plantImage = createElement({tagName: 'img', classEl: ['plant-task-image']});
  const plantTaskTextContainer = createElement({tagName: 'p', classEl: ['plant-task-text']});
  const plantTitle = createElement({tagName: 'p', classEl: ['plant-task-title', 'plant-result-title'], textContent: plant.name});
  let taskDescription = createElement({tagName: 'p', classEl: ['task-description', 'plant-result-description'], textContent: task.description});
  const lineSeparator = createElement({tagName: 'div', classEl: ['line-separator', 'task-line-seperator']});
  const menuDotContainer = createMenuDots();
  const searchDropMenu = createElement({tagName: 'div', classEl: ['search-drop-menu']});
  taskElement.plantObject = task;

  setSelectButton(task, taskSelector, 'rgba(255, 255, 255, 0.95)', 'none', 'rgba(255, 255, 255, 0.224)', 'none');

  plantImage.src = plant.image;

  appendChildren(plantImageContainer, plantImage);
  appendChildren(plantTaskTextContainer, plantTitle, taskDescription);
  appendChildren(searchDropMenu, menuDotContainer);
  appendChildren(taskContainer, taskSelector, plantImageContainer, plantTaskTextContainer, searchDropMenu);
  appendChildren(taskElement, taskContainer, lineSeparator);

  localEventManager.addEventListener(taskSelector, 'click', () => {
    selectButtonHandler(task, taskSelector, 'rgba(255, 255, 255, 0.95)', 'none', 'rgba(255, 255, 255, 0.224)', 'none');
  }, 'PLANT_LOG');

  return taskElement;
}

const createTaskMenu = (menuDots, task, taskElement) => {
  const dropMenuContainer = createElement({tagName: 'div', classEl: ['drop-menu-container']});
  const editTask = createElement({tagName: 'p', textContent: 'Edit', classEl: ['drop-menu-item']});
  const deleteTask = createElement({tagName: 'p', textContent: 'Delete', classEl: ['drop-menu-item']});

  appendChildren(dropMenuContainer, editTask, deleteTask);
  appendChildren(menuDots, dropMenuContainer);

  localEventManager.addEventListener(editTask, 'click', () => {
    editTaskHandler();
  }, 'PLANT_LOG');

  localEventManager.addEventListener(deleteTask, 'click', () => {
    deleteTaskHandler(task, taskElement);
  }, 'PLANT_LOG');
}

const editTaskHandler = () => {
  console.log('edit task modal');
}

const deleteTaskHandler = (task, taskElement) => {
  const { plantInfoBar,  } = plantLogElements.getPlantLogElements();
  plantLog.deletePlantTask(task.id);

  if (taskElement && taskElement.parentNode) {
    taskElement.parentNode.removeChild(taskElement);
  }

  updateTaskBar(plantInfoBar);
}

export const plantLogElements = dynamicPlantLogElementsManager();