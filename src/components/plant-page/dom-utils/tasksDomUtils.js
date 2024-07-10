import { createElement } from "../../global/dom-utils";
import { localEventManager } from "../../global/event-handlers";
import { appendChildren } from "../../global/utils";
import { addNewTaskHandler, setUpTaskMenuListeners, submitTaskHandler } from "../event-handlers";
import { addIcon } from "../../../images";

/**
 * Creates and returns the user tasks section for a plant, allowing users to add and manage tasks.
 * @param {Object} plant - plant object.
 * @param {HTMLElement} plantPageModal - modal element for the plant page.
 * @param {String} sectionClass - class name for the section.
 */
export const createUserTasks = (plant, plantPageModal, sectionClass) => {
  const userTaskSection = createElement({tagName: 'div', classEl: ['tasks-section']});
  const tasks = createElement({tagName: 'div', classEl: ['tasks']});
  const newTaskBtn = createElement({tagName: 'button', classEl: ['add-task-btn'], ariaLabel: 'Add new task'});
  const newTaskImgContainer = createElement({tagName: 'div', classEl: ['new-task-image-container']});
  const newTaskImg = createElement({tagName: 'img', classEl: ['new-task-image'], alt: 'Plant image for this task'});
  userTaskSection.classList.add('hidden');
  newTaskImg.src = addIcon;

  appendChildren(newTaskImgContainer, newTaskImg);
  appendChildren(newTaskBtn, newTaskImgContainer);
  appendChildren(userTaskSection, tasks, newTaskBtn);

  if (plant.tasks) {
    plant.tasks.forEach(task => {
      submitTaskHandler(plant, tasks, task.description, sectionClass, plantPageModal)
    })
  }

  localEventManager.addEventListener(newTaskBtn, 'click', () => {
    addNewTaskHandler(plantPageModal, tasks, sectionClass, plant);
  }, `PLANT_PAGE_${sectionClass}`);

  return userTaskSection;
}

/**
 * Creates a task menu with options to edit or delete a task.
 * @param {HTMLElement} menuDots - menu dots container element. 
 * @param {Object} task - task object.
 * @param {HTMLElement} taskElement - task element in the DOM.
 */
export const createTaskMenu = (menuDots, task, taskElement, plant) => {
  const dropMenuContainer = createElement({tagName: 'div', classEl: ['drop-menu-container']});
  const editTask = createElement({tagName: 'p', textContent: 'Edit', classEl: ['drop-menu-item']});
  const deleteTask = createElement({tagName: 'p', textContent: 'Delete', classEl: ['drop-menu-item']});

  appendChildren(dropMenuContainer, editTask, deleteTask);
  appendChildren(menuDots, dropMenuContainer);

  setUpTaskMenuListeners(editTask, task, deleteTask, taskElement, plant);
}

/**
 * Sets the visual state of a select button based on the task's selected state.
 * @param {Object} task - task object.
 * @param {HTMLElement} taskSelectBtn - select button element.
 * @param {String} activeColor - background color when task is selected.
 * @param {String} activeBorder - border style when task is selected.
 * @param {String} inactiveColor - background color when task is not selected.
 * @param {String} inactiveBorder - border style when task is not selected.
 */
export const setSelectButton = (task, taskSelectBtn, activeColor, activeBorder, inactiveColor, inactiveBorder) => {
  if (task.selected === false) {
    taskSelectBtn.style.backgroundColor = inactiveColor;
    taskSelectBtn.style.border = inactiveBorder;
  } else {
    taskSelectBtn.style.backgroundColor = activeColor;
    taskSelectBtn.style.border = activeBorder;
  }
}