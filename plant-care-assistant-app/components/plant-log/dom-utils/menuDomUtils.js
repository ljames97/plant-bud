//menuDomUtils.js
/**
 * For creating and managing menus within the Plant Log section.
*/

import { toggleMenu } from "../../plant-discovery";
import { createElement, domElements } from "../../global";
import { localEventManager } from "../../global";
import { appendChildren } from "../../global";
import { setUpArchivePlantListeners, setUpMenuButtonListeners, setUpPlantMenuListeners } from "../event-handlers";
import { deleteSelectedHandler } from "../event-handlers";
import { plantLog, setPlantInfoBar } from "../plantLogMain";

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
 * Creates and returns the menu buttons for the plant log.
 */
export const createMenuButtons = () => {
  const { plantLogEl } = domElements;
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

  setUpMenuButtonListeners(menuButtonsArray, archive, tasks, all);

  appendChildren(menuButtons, all, tasks, archive);

  return menuButtons;
}

/**
 * Displays a quick menu at the event location.
 * @param {Event} event 
 * @param {Function} createMenuFunc - function to create the menu
 * @param {HTMLElement} menuDots - menu dots element.
 * @param {Object} plantOrTask - plant or task object associated with the menu.
 * @param {HTMLElement} element - element to attach the menu to.
 */
export const renderQuickMenu = (event, createMenuFunc, menuDots, plantOrTask, element) => {
  event.stopPropagation();
  toggleMenu();
  createMenuFunc(menuDots, plantOrTask, element);
}

/**
 * Creates a menu for archiving or permanently deleting a plant.
 * @param {HTMLElement} menuDots 
 * @param {Object} plant 
 */
export const createArchivePlantMenu = (menuDots, plant) => {
  const dropMenuContainer = createElement({tagName: 'div', classEl: ['drop-menu-container']});
  const unarchive = createElement({tagName: 'p', textContent: 'Unarchive', classEl: ['drop-menu-item']});
  const permanentDelete = createElement({tagName: 'p', textContent: 'Permanent delete', classEl: ['drop-menu-item']});

  appendChildren(dropMenuContainer, unarchive, permanentDelete);
  appendChildren(menuDots, dropMenuContainer);

  setUpArchivePlantListeners(unarchive, plant, permanentDelete);
}

/**
 * Creates a menu for performing actions on a plant, such as adding a task, adding a tag, pinning/unpinning, or deleting the plant.
 * @param {HTMLElement} menuDots 
 * @param {Object} plant 
 */
export const createPlantMenu = (menuDots, plant) => {
  const dropMenuContainer = createElement({tagName: 'div', classEl: ['drop-menu-container']});
  const newTask = createElement({tagName: 'p', textContent: 'New task', classEl: ['drop-menu-item']});
  const addTag = createElement({tagName: 'p', textContent: 'New tag', classEl: ['drop-menu-item']});
  const pinPlant = createElement({tagName: 'p', textContent: !plant.pinned ? 'Pin' : 'Unpin', classEl: ['drop-menu-item']});
  const deletePlant = createElement({tagName: 'p', textContent: 'Delete', classEl: ['drop-menu-item']});

  appendChildren(dropMenuContainer, newTask, addTag, pinPlant, deletePlant);
  appendChildren(menuDots, dropMenuContainer);

  setUpPlantMenuListeners(newTask, plant, addTag, pinPlant, deletePlant);
}