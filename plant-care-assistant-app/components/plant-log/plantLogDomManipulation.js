// plantLogDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { removeModal, selectButtonHandler, setSelectButton, setUpModal } from "../plant-page/plantPageDomManipulation";
import { buttonHighlight, clearSection, createElement, createMenuDots, domElements, resetSection } from "../utils/globalDomManipulation"
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren, hideElements, showElements } from "../utils/gobalUtility";
import { deleteSelectedHandler, editButtonHandler, editSelectHandler, serUpMenuButtonListeners, setUpPlantLogListeners, setUpTaskSelectListeners, taskSelectHandler } from "./plantLogEventHandling";
import { plantLog, renderDeletedPlants, renderMyPlants, renderQuickMenu, resetPlantGrid, setPlantInfoBar, updatePlantInfoBar, updateTaskIcon } from "./plantLogMain";

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
      const editButton = createElement({tagName: 'button', classEl: ['edit-plant-log-button', 'search-tag'], textContent: 'Select'});
      editButton.editMode = false;
      const editDots = createMenuDots();
      const userPlantsContainer = createElement({tagName: 'div', classEl: ['user-plants']});
      const menuButtons = createMenuButtons();
      const taskSelectContainer = createTaskSelect();

      appendChildren(editButtonContainer, editButton, editDots);
      appendChildren(infoBarContainer, plantInfoBar, editButtonContainer);
      hideElements(editDots);

      setUpPlantLogListeners(editButton, editDots);

      return { sectionHeader, menuButtons, plantInfoBar, infoBarContainer, taskSelectContainer, plantLogTitle, userPlantsContainer };
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
 * Creates the select menu with options based on user plant selections.
 * @param {HTMLElement} menuDots 
 */
export const createSelectMenu = (menuDots) => {
  const userPlants = plantLog.getUserPlantLog();
  const selectedPlants = userPlants.filter(plant => plant.selected === true);

  const dropMenuContainer = createElement({tagName: 'div', classEl: ['drop-menu-container', 'select-menu']});
  const deleteSelected = createElement({tagName: 'p', textContent: 'Delete selected', classEl: ['drop-menu-item']});

  appendChildren(dropMenuContainer, deleteSelected);
  appendChildren(menuDots, dropMenuContainer);

  localEventManager.addEventListener(deleteSelected, 'click', () => {
    deleteSelectedHandler(selectedPlants);
  })
}

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
 * Creates and returns the menu buttons for the plant log.
 */
const createMenuButtons = () => {
  const {plantLogEl} = domElements
  const menuButtons = createElement({tagName: 'div', classEl: ['search-tags']});
  const all = createElement({tagName: 'button', classEl: ['search-tag', 'log-menu-btn'], id: 'log-all', textContent: 'All'});
  const tasks = createElement({tagName: 'button', classEl: ['search-tag', 'log-menu-btn'], id: 'log-tasks', textContent: 'Tasks'});
  const taskCountIcon = createElement({tagName: 'div', classEl: ['task-count-icon']});
  const archive = createElement({tagName: 'button', classEl: ['search-tag', 'log-menu-btn'], id: 'log-archive', textContent: 'Archive'});
  const searchTaskContainer = createElement({tagName: 'div', classEl: ['task-results']});
  appendChildren(plantLogEl, searchTaskContainer);
  appendChildren(tasks, taskCountIcon);

  const { numberOfTasks } = setPlantInfoBar(plantLog.getUserPlantLog());
  taskCountIcon.textContent = numberOfTasks;
  taskCountIcon.style.display = numberOfTasks > 0 ? 'block' : 'none';

  all.inactiveBtns = [tasks, archive]
  tasks.inactiveBtns = [all, archive]
  archive.inactiveBtns = [all, tasks]
  const menuButtonsArray = [all, tasks, archive];

  serUpMenuButtonListeners(menuButtonsArray, archive, tasks, all);

  appendChildren(menuButtons, all, tasks, archive);

  return menuButtons;
}

/**
 * Displays the task selection container.
 */
export const renderTaskSelect = () => {
  const taskSelectContainer = document.querySelector('.task-select-container');
  taskSelectContainer.style.display = 'flex';
}

/**
 * Creates and returns the task selection container with options for task filtering.
 */
const createTaskSelect = () => {
  const searchTaskContainer = document.querySelector('.task-results');
  const taskSelectContainer = createElement({tagName: 'div', classEl: ['task-select-container']});
  const separator = createElement({tagName: 'p', textContent: '|', classEl: ['task-select']});
  const todo = createElement({tagName: 'p', textContent: 'Task list', classEl: ['task-select', 'to-do-select']});
  const completed = createElement({tagName: 'p', textContent: 'Completed', classEl: ['task-select', 'completed-select']});

  appendChildren(taskSelectContainer, todo, separator, completed);

  setUpTaskSelectListeners(completed, todo, searchTaskContainer);

  return taskSelectContainer;
}

/**
 * Updates the task information bar with the current number of tasks.
 */
export const updateTaskBar = () => {
  const { plantInfoBar,  } = plantLogElements.getPlantLogElements();
  const { numberOfTasks } = setPlantInfoBar(plantLog.getUserPlantLog());
  plantInfoBar.textContent = `${numberOfTasks} tasks`;
}

/**
 * Renders the list of tasks based on their completion state.
 * @param {Boolean} completedState -  boolean indicating whether to show completed tasks.
 */
export const renderTasksList = (completedState) => {
  const { plantLogEl } = domElements
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();
  const searchTaskContainer = document.querySelector('.task-results');
  appendChildren(plantLogEl, searchTaskContainer);
  clearSection(userPlantsContainer, 'PLANT_LOG');

  const userPlants = plantLog.getUserPlantLog();
  userPlants.forEach(plant => {
    if (plant.tasks && plant.tasks.length > 0) {
      plant.tasks.forEach(task => {
        if (task.selected === completedState) {
          const taskElement = createTaskElement(plant, task);
          appendChildren(searchTaskContainer, taskElement);
        }
      });
    }
  });
}

/**
 * Creates and returns a task element for a specific plant task.
 * @param {Object} plant 
 * @param {Object} task 
 */
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
    updateTaskBar();
    updateTaskIcon();
  }, 'PLANT_LOG');

  localEventManager.addEventListener(menuDotContainer, 'click', (event) => {
    renderQuickMenu(event, createTaskMenu, menuDotContainer, task, taskElement);
    localEventManager.addEventListener(document, 'click', handleDocumentClick, 'PLANT_LOG');
  }, 'PLANT_LOG');

  return taskElement;
}

// render/update needs to go in Main.js. only create/toggle should be in DomManipulation.js

/**
 * Creates the task menu with options to edit or delete the task.
 * @param {HTMLElement} menuDots - menu dots container element.
 * @param {Object} task - task object.
 * @param {HTMLElement} taskElement - task element in the DOM.
 */
const createTaskMenu = (menuDots, task, taskElement) => {
  const dropMenuContainer = createElement({tagName: 'div', classEl: ['drop-menu-container']});
  const editTask = createElement({tagName: 'p', textContent: 'Edit', classEl: ['drop-menu-item']});
  const deleteTask = createElement({tagName: 'p', textContent: 'Delete', classEl: ['drop-menu-item']});

  appendChildren(dropMenuContainer, editTask, deleteTask);
  appendChildren(menuDots, dropMenuContainer);

  localEventManager.addEventListener(editTask, 'click', () => {
    editTaskHandler(task);
  }, 'PLANT_LOG');

  localEventManager.addEventListener(deleteTask, 'click', () => {
    deleteTaskHandler(task, taskElement);
    updateTaskIcon();
    updateTaskBar();
  }, 'PLANT_LOG');
}

/**
 * Handles the task edit action and displays the edit task modal.
 * @param {Object} task 
 */
export const editTaskHandler = (task) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const editTaskModal = createElement({tagName: 'div', classEl: ['new-modal']});
  const editTaskInput = createElement({tagName: 'input', placeholder: task.description, classEl: ['new-input']});
  const updateBtn = createElement({tagName: 'button', textContent: 'Update', classEl: ['update-tag-btn', 'submit-btn']});

  setUpModal(editTaskModal, null, 'PLANT_TASK');

  appendChildren(editTaskModal, editTaskInput, updateBtn);
  appendChildren(modalOverlay, editTaskModal);

  localEventManager.addEventListener(updateBtn, 'click', () => {
    updateTaskHandler(task, editTaskInput, editTaskModal);
  })

}

/**
 * Handles updating the task description and refreshing the task section.
 * @param {Object} task 
 * @param {HTMLElement} editTaskInput 
 * @param {HTMLElement} editTaskModal 
 */
const updateTaskHandler = (task, editTaskInput, editTaskModal) => {
  if (editTaskInput.value === '') {
    return;
  }

  task.description = editTaskInput.value;

  removeModal(editTaskModal, 'PLANT_LOG');
  resetTaskSection();
}

/**
 * Resets the task section based on the current selection (completed or to-do).
 */
const resetTaskSection = () => {
  const completeBtn = document.querySelector('.completed-select');
  const todoBtn = document.querySelector('.to-do-select');
  const searchTaskContainer = document.querySelector('.task-results');

  if (!completeBtn) {
    return;
  }

  if (completeBtn.active === true) {
    taskSelectHandler(completeBtn, todoBtn, true, searchTaskContainer);
  } else {
    taskSelectHandler(todoBtn, completeBtn, false, searchTaskContainer);
  }

  updateTaskBar();
}

/**
 * Handles task deletion and removes task element from the DOM.
 * @param {Object} task 
 * @param {HTMLElement} taskElement 
 */
export const deleteTaskHandler = (task, taskElement) => {
  plantLog.deletePlantTask(task.id);

  if (taskElement && taskElement.parentNode) {
    taskElement.parentNode.removeChild(taskElement);
  }
}