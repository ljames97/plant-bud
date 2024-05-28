import { setUpModalEventListeners } from "./";
import { renderQuickMenu } from "../../plant-log/dom-utils";
import { deleteTaskHandler, editTaskHandler } from "../../plant-log/event-handlers";
import { createElement, createMenuDots, removeModal, setUpModal } from "../../utils/globalDomUtils";
import { handleDocumentClick, localEventManager } from "../../utils/globalEventHandlers";
import { appendChildren } from "../../utils/gobalUtility";
import { createTaskMenu, setSelectButton } from "../dom-utils";

/**
 * Handles adding a new task to the plant's tasks list.
 * @param {HTMLElement} plantPageModal - modal element for the plant page.
 * @param {HTMLElement} tasks - container element for tasks.
 * @param {String} sectionClass - class name for the section.
 * @param {Object} plant - plant object.
 */
export const addNewTaskHandler = (plantPageModal, tasks, sectionClass, plant) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const newTaskInput = createElement({tagName: 'input', placeHolder: 'New task', classEl: ['plant-page-input']});
  const newTaskAddBtn = createElement({tagName: 'button', textContent: 'Add task', classEl: ['submit-requirement-btn']});
  const cancelTaskBtn = createElement({tagName: 'button', textContent: 'X', classEl: ['cancel-btn']});

  setUpModal(plantPageModal);

  appendChildren(plantPageModal, cancelTaskBtn, newTaskInput, newTaskAddBtn);
  appendChildren(modalOverlay, plantPageModal);

  setUpModalEventListeners(newTaskAddBtn, cancelTaskBtn, plantPageModal, tasks, newTaskInput, sectionClass, submitTaskHandler, plant);
}

/**
 * Handles submitting a new task and updating the plant's tasks list.
 * @param {Object} plant - plant object.
 * @param {HTMLElement} tasks - container element for tasks.
 * @param {String} newTaskInput - input element value for the new task.
 * @param {String} sectionClass - class name for the section.
 */
export const submitTaskHandler = (plant, tasks, newTaskInput, sectionClass, modal) => {
  if (newTaskInput === '') {
    return;
  }

  removeModal(modal, 'PLANT_PAGE');

  const newTaskElement = createElement({tagName: 'div', classEl: ['new-task']});
  const taskSelectBtn = createElement({tagName: 'button', classEl: ['select-btn']});
  const newUserTask = createElement({tagName: 'p', textContent: newTaskInput, classEl: ['new-user-task']});
  const menuDots = createMenuDots();
  menuDots.classList.add('plant-page-task-menu');

  appendChildren(newTaskElement, taskSelectBtn, newUserTask, menuDots);
  appendChildren(tasks, newTaskElement);

  if (!plant.tasks.some(task => task.description === newTaskInput)) {
    const newTask = {
      id: Date.now(),
      description: newTaskInput,
      selected: false
    }
    plant.tasks.push(newTask);
  }

  const foundTask = plant.tasks.find(task => task.description === newTaskInput);
  setSelectButton(foundTask, taskSelectBtn, 'green', 'none', 'transparent', '0.5px black solid');

  setUpTaskListeners(taskSelectBtn, foundTask, sectionClass, menuDots, newTaskElement);
}
 /**
  * Sets up event listeners for newly added task. Handles task "Select" button and menu click.
  * @param {HTMLElement} taskSelectBtn - button to complete task.
  * @param {Object} foundTask - corresponding task for the select button listener.
  * @param {String} sectionClass - class name for the section.
  * @param {HTMLElement} menuDots - menu dot element that toggles quick menu.
  * @param {HTMLElement} newTaskElement - element for the new task.
  */
const setUpTaskListeners = (taskSelectBtn, foundTask, sectionClass, menuDots, newTaskElement) => {
  localEventManager.addEventListener(taskSelectBtn, 'click', () => {
    selectButtonHandler(foundTask, taskSelectBtn, 'green', 'none', 'transparent', '0.5px black solid');
  }, `PLANT_PAGE_${sectionClass}`);

  localEventManager.addEventListener(menuDots, 'click', (event) => {
    renderQuickMenu(event, createTaskMenu, menuDots, foundTask, newTaskElement);
    localEventManager.addEventListener(document, 'click', handleDocumentClick, 'PLANT_PAGE');
  });
}

/**
 * Sets up event listeners for the task menu. Handles task edit and delete.
 * @param {HTMLElement} editTask - edit task menu button.
 * @param {Object} task - task object.
 * @param {HTMLElement} deleteTask - delete task menu button.
 * @param {HTMLElement} taskElement - task element in the DOM.
 */
export const setUpTaskMenuListeners = (editTask, task, deleteTask, taskElement) => {
  localEventManager.addEventListener(editTask, 'click', () => {
    editTaskHandler(task);

  }, 'PLANT_PAGE');

  localEventManager.addEventListener(deleteTask, 'click', () => {
    deleteTaskHandler(task, taskElement);
  }, 'PLANT_PAGE');
}

/**
 * Handles the selection state of a task and updates the select button accordingly.
 * @param {Object} task - task object.
 * @param {HTMLElement} taskSelectBtn - select button element.
 * @param {String} activeColor - background color when task is selected.
 * @param {String} activeBorder - border style when task is selected.
 * @param {String} inactiveColor - background color when task is not selected.
 * @param {String} inactiveBorder - border style when task is not selected.
 */
export const selectButtonHandler = (task, taskSelectBtn, activeColor, activeBorder, inactiveColor, inactiveBorder) => {
  if (task.selected === false) {
    taskSelectBtn.style.backgroundColor = activeColor;
    taskSelectBtn.style.border = activeBorder;
    task.selected = true;
  } else {
    taskSelectBtn.style.backgroundColor = inactiveColor;
    taskSelectBtn.style.border = inactiveBorder;
    task.selected = false;
  }
}