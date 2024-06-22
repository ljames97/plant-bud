// taskEventHandlers.js

/**
 * Event handler logic for managing tasks within the plant log section of the application.
*/

import { selectButtonHandler } from "../../plant-page";
import { clearSection, createElement, removeModal, setUpModal } from "../../global";
import { handleDocumentClick, localEventManager } from "../../global";
import { appendChildren } from "../../global";
import { createTaskMenu, resetPlantGrid } from "../dom-utils";
import { renderQuickMenu } from "../dom-utils";
import { updatePlantInfoBar } from "../dom-utils";
import { renderTasksList, resetTaskSection, updateTaskBar, updateTaskIcon } from "../dom-utils";
import { plantLog } from "../plantLogMain";
import { updatePlantInFirebase } from "../../../config";

/**
 * Sets up event listeners for selecting tasks and handles task completion state accordingly. 
 * @param {Boolean} completed 
 * @param {HTMLElement} todo 
 * @param {HTMLElement} searchTaskContainer 
 */
export const setUpTaskSelectListeners = (completed, todo, searchTaskContainer) => {
  localEventManager.addEventListener(completed, 'click', () => {
    taskSelectHandler(completed, todo, true, searchTaskContainer);
    completed.active = true;
  }, 'PLANT_TASK');

  localEventManager.addEventListener(todo, 'click', () => {
    taskSelectHandler(todo, completed, false, searchTaskContainer);
    completed.active = false;
  }, 'PLANT_TASK');
}

/**
 * Handles the task selection and renders the corresponding task list.
 * @param {HTMLElement} activeBtn
 * @param {HTMLElement} inactiveBtn 
 * @param {Boolean} completedTaskState
 * @param {HTMLElement} searchTaskContainer
 */
export const taskSelectHandler = (activeBtn, inactiveBtn, completedTaskState, searchTaskContainer) => {
  clearSection(searchTaskContainer, 'PLANT_LOG');
  renderTasksList(completedTaskState);
  activeBtn.style.fontWeight = 600;
  inactiveBtn.style.fontWeight = 100;
}

/**
 * Sets up event listeners for task selection and quick menu.
 * @param {HTMLElement} taskSelector 
 * @param {Object} task 
 * @param {HTMLElement} menuDotContainer 
 * @param {HTMLElement} taskElement 
 */
export const setUpTaskElementListeners = (taskSelector, task, menuDotContainer, taskElement, plant) => {
  localEventManager.addEventListener(taskSelector, 'click', () => {
    selectButtonHandler(task, taskSelector, 'rgba(255, 255, 255, 0.95)', 'none', 'rgba(255, 255, 255, 0.224)', 'none');
    updateTaskBar();
    updateTaskIcon();
  }, 'PLANT_LOG');

  localEventManager.addEventListener(menuDotContainer, 'click', (event) => {
    renderQuickMenu(event, createTaskMenu, menuDotContainer, task, taskElement, plant);
    localEventManager.addEventListener(document, 'click', handleDocumentClick, 'PLANT_LOG');
  }, 'PLANT_LOG');
}

/**
 * Sets up event listeners for the task element menu. Handles edit/delete task button click and updates task icon and task bar.
 * @param {HTMLElement} editTask 
 * @param {Object} task 
 * @param {HTMLElement} deleteTask 
 * @param {HTMLElement} taskElement 
 */
export const setUpTaskMenuListeners = (editTask, task, deleteTask, taskElement, plant) => {
  localEventManager.addEventListener(editTask, 'click', () => {
    editTaskHandler(task, plant);
  }, 'PLANT_LOG');

  localEventManager.addEventListener(deleteTask, 'click', () => {
    deleteTaskHandler(task, taskElement, plant);
    updateTaskIcon();
    updateTaskBar();
  }, 'PLANT_LOG');
}

/**
 * Handles the task edit action and displays the edit task modal.
 * @param {Object} task 
 */
export const editTaskHandler = (task, plant) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const editTaskModal = createElement({tagName: 'div', classEl: ['new-modal']});
  const editTaskInput = createElement({tagName: 'input', placeholder: task.description, classEl: ['new-input']});
  const updateBtn = createElement({tagName: 'button', textContent: 'Update', classEl: ['update-tag-btn', 'submit-btn']});

  setUpModal(editTaskModal, null, 'PLANT_TASK');

  appendChildren(editTaskModal, editTaskInput, updateBtn);
  appendChildren(modalOverlay, editTaskModal);

  localEventManager.addEventListener(updateBtn, 'click', () => {
    updateTaskHandler(task, editTaskInput, editTaskModal, plant);
  })
}

/**
 * Handles updating the task description and refreshing the task section.
 * @param {Object} task 
 * @param {HTMLElement} editTaskInput 
 * @param {HTMLElement} editTaskModal 
 */
const updateTaskHandler = async (task, editTaskInput, editTaskModal, plant) => {
  if (editTaskInput.value === '') {
    return;
  }

  task.description = editTaskInput.value;

  removeModal(editTaskModal, 'PLANT_LOG');
  resetTaskSection();
  await updatePlantInFirebase(plant.firestoreId, plant, 'plants');
}

/**
 * Handles task deletion and removes task element from the DOM.
 * @param {Object} task 
 * @param {HTMLElement} taskElement
 * @param {Object} plant
 */
export const deleteTaskHandler = async (task, taskElement, plant) => {
  plantLog.deletePlantTask(task.id);

  if (taskElement && taskElement.parentNode) {
    taskElement.parentNode.removeChild(taskElement);
  }

  await updatePlantInFirebase(plant.firestoreId, plant, 'plants');
}

/**
 * Displays a modal for adding a new task to a plant.
 * @param {Object} plant 
 */
export const addNewTaskHandler = (plant) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const menuContainer = document.querySelector('.drop-menu-container');
  const newTaskModal = createElement({tagName: 'div', classEl: ['new-modal']});
  const newTaskInput = createElement({tagName: 'input', placeholder: 'New task', classEl: ['new-input']});
  // priority input, notes, date, alert etc.
  const submitBtn = createElement({tagName: 'button', textContent: 'Add task', classEl: ['submit-btn']});
  const cancelBtn = createElement({tagName: 'p', textContent: 'X', classEl: ['cancel-btn']});
  
  setUpModal(newTaskModal, menuContainer, 'PLANT_LOG');

  appendChildren(newTaskModal, cancelBtn, newTaskInput, submitBtn);
  appendChildren(modalOverlay, newTaskModal);

  localEventManager.addEventListener(submitBtn, 'click', () => {
    submitTaskHandler(plant, newTaskInput.value, newTaskModal);
  }, 'PLANT_LOG');
}

/**
 * Handles the submission of a new task for a plant.
 * @param {Object} plant 
 * @param {HTMLElement} newTaskInput 
 * @param {HTMLElement} newTaskModal 
 */
const submitTaskHandler = async (plant, newTaskInput, newTaskModal) => {
  if (newTaskInput === '') {
    return;
  }

  removeModal(newTaskModal, 'PLANT_LOG');

  if (!plant.tasks.some(task => task.description === newTaskInput)) {
    const newTask = {
      id: Date.now(),
      description: newTaskInput,
      selected: false
    }
    plant.tasks.push(newTask);
  }

  resetPlantGrid(plantLog.getUserPlantLog());
  updatePlantInfoBar();
  updateTaskIcon();
  await updatePlantInFirebase(plant.firestoreId, plant, 'plants');
}