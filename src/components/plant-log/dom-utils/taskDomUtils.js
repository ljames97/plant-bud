// taskDomUtils.js

/**
 * For managing tasks within the Plant Log section
*/

import { tickIcon } from "../../../images";
import { clearSection, createElement, createMenuDots, domElements } from "../../global/dom-utils";
import { appendChildren } from "../../global/utils";
import { setSelectButton } from "../../plant-page/dom-utils";
import { setUpTaskElementListeners, setUpTaskMenuListeners, setUpTaskSelectListeners, taskSelectHandler } from "../event-handlers";
import { plantLog, setPlantInfoBar } from "../plantLogMain";
import { plantLogElements } from "./plantLogDomUtils";

/**
 * Displays the task selection container.
 */
export const renderTaskSelect = () => {
  const taskSelectContainer = document.querySelector('.task-select-container');
  taskSelectContainer.classList.add('flex');
}

/**
 * Creates and returns the task selection container with options for task filtering.
 */
export const createTaskSelect = () => {
  const searchTaskContainer = document.querySelector('.task-results');
  const taskSelectContainer = createElement({tagName: 'div', classEl: ['task-select-container']});
  const separator = createElement({tagName: 'p', textContent: '|', classEl: ['task-select']});
  const todo = createElement({tagName: 'p', textContent: 'Task list', classEl: ['task-select', 'to-do-select']});
  const completed = createElement({tagName: 'p', textContent: 'Completed', classEl: ['task-select', 'completed-select']});
  taskSelectContainer.classList.add('hidden');

  appendChildren(taskSelectContainer, todo, separator, completed);

  setUpTaskSelectListeners(completed, todo, searchTaskContainer);

  return taskSelectContainer;
}

/**
 * Renders the list of tasks based on their completion state.
 * @param {Boolean} completedState -  boolean indicating whether to show completed tasks.
 */
export const renderTasksList = (completedState) => {
  const { plantLogEl } = domElements;
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
export const createTaskElement = (plant, task) => {
  const taskElement = createElement({tagName: 'div', classEl: ['task-element']});
  const taskContainer = createElement({tagName: 'div', classEl: ['task-result-container']})
  const taskSelector = createElement({tagName: 'button', classEl: ['task-selector'], ariaLabel: 'Select task'});
  const plantImageContainer = createElement({tagName: 'div', classEl: ['plant-task-image-container']});
  const plantImage = createElement({tagName: 'img', classEl: ['plant-task-image'], alt: 'Plant image'});
  const plantTaskTextContainer = createElement({tagName: 'p', classEl: ['plant-task-text']});
  const plantTitle = createElement({tagName: 'p', classEl: ['plant-task-title', 'plant-result-title'], textContent: plant.name});
  let taskDescription = createElement({tagName: 'p', classEl: ['task-description', 'plant-result-description'], textContent: task.description});
  const lineSeparator = createElement({tagName: 'div', classEl: ['line-separator', 'task-line-seperator']});
  const menuDotContainer = createMenuDots();
  const searchDropMenu = createElement({tagName: 'div', classEl: ['search-drop-menu']});
  taskElement.plantObject = task;
  const selectIcon = createElement({tagName: 'img', classEl: ['select-icon-image']});
  selectIcon.src = tickIcon;
  selectIcon.classList.add('hidden');
  plantImage.src = plant.image;

  appendChildren(taskSelector, selectIcon);
  appendChildren(plantImageContainer, plantImage);
  appendChildren(plantTaskTextContainer, plantTitle, taskDescription);
  appendChildren(searchDropMenu, menuDotContainer);
  appendChildren(taskContainer, taskSelector, plantImageContainer, plantTaskTextContainer, searchDropMenu);
  appendChildren(taskElement, taskContainer, lineSeparator);

  setUpTaskElementListeners(taskSelector, task, menuDotContainer, taskElement, plant);
  setSelectButton(task, taskSelector, '#9fd653', 'none', 'rgba(255, 255, 255, 0.224)', 'none');

  return taskElement;
}

/**
 * Creates the task menu with options to edit or delete the task.
 * @param {HTMLElement} menuDots - menu dots container element.
 * @param {Object} task - task object.
 * @param {HTMLElement} taskElement - task element in the DOM.
 */
export const createTaskMenu = (menuDots, task, taskElement, plant) => {
  const dropMenuContainer = createElement({tagName: 'div', classEl: ['drop-menu-container', 'select-menu']});
  const editTask = createElement({tagName: 'p', textContent: 'Edit', classEl: ['drop-menu-item']});
  const deleteTask = createElement({tagName: 'p', textContent: 'Delete', classEl: ['drop-menu-item']});

  appendChildren(dropMenuContainer, editTask, deleteTask);
  appendChildren(menuDots, dropMenuContainer);

  setUpTaskMenuListeners(editTask, task, deleteTask, taskElement, plant);
}

/**
 * Resets the task section based on the current selection (completed or to-do).
 */
export const resetTaskSection = () => {
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
 * Updates the task count icon based on the number of tasks.
 */
export const updateTaskIcon = () => {
  const taskCountIcon = document.querySelector('.task-count-icon');

  if (!taskCountIcon) {
    return;
  }

  const { numberOfTasks } = setPlantInfoBar(plantLog.getUserPlantLog());
  taskCountIcon.textContent = numberOfTasks;
  const cssClass = numberOfTasks > 0 ? 'show' : 'hidden';
  taskCountIcon.classList.remove('show', 'hidden');
  taskCountIcon.classList.add(cssClass)
}

/**
 * Updates the task information bar with the current number of tasks.
 */
export const updateTaskBar = () => {
  const { plantInfoBar,  } = plantLogElements.getPlantLogElements();

  if (!plantInfoBar) {
    return;
  }
  const { numberOfTasks } = setPlantInfoBar(plantLog.getUserPlantLog());
  plantInfoBar.textContent = `${numberOfTasks} tasks`;
}