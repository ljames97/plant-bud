// menuButtonEventHandler.js

/**
 * Event handler functions for menu buttons in the Plant Log section.
*/

import { deletePlantBtnHandler } from "../../plant-page/event-handlers";
import { permanentDeletePlant } from "../../plant-page";
import { buttonHighlight, clearSection } from "../../global/dom-utils";
import { localEventManager } from "../../global/event-handlers";
import { hideElements, showElements } from "../../global/utils";
import { renderDeletedPlants, resetPlantGrid } from "../dom-utils";
import { plantLogElements, resetEditButton, updatePlantInfoBar } from "../dom-utils";
import { renderMaximumTagsError } from "../dom-utils";
import { renderTaskSelect, renderTasksList, updateTaskBar } from "../dom-utils";
import { plantLog } from "../plantLogMain";
import { pinPlantHandler } from "./plantLogEventHandlers";
import { addNewTagHandler } from "./tagEventHandlers";
import { addNewTaskHandler } from "./taskEventHandlers";
import { updatePlant } from "../../global/utils/gobalUtility";

/**
 * Sets up event listeners for menu buttons. 
 * @param {Array} menuButtonsArray - array of menu button elements.
 * @param {HTMLElement} archive - archive button element.
 * @param {HTMLElement} tasks - tasks button element.
 * @param {HTMLElement} all - all button element.
 */
export const setUpMenuButtonListeners = (archive, tasks, all) => {
  localEventManager.addEventListener(archive, 'click', () => {
    archiveBtnClickHandler();
    buttonHighlight(archive, 'white', 'rgba(255, 255, 255, 0.224', 'black', 'white', ...archive.inactiveBtns);
  }, 'PLANT_NAV');

  localEventManager.addEventListener(tasks, 'click', () => {
    taskBtnHandler();
    buttonHighlight(tasks, 'white', 'rgba(255, 255, 255, 0.224', 'black', 'white', ...tasks.inactiveBtns);
  }, 'PLANT_NAV');

  localEventManager.addEventListener(all, 'click', () => {
    allBtnClickHandler();
    buttonHighlight(all, 'white', 'rgba(255, 255, 255, 0.224', 'black', 'white', ...all.inactiveBtns);
  }, 'PLANT_NAV')
}

/**
 * Handles the "All" button click event and resets the plant grid.
 */
export const allBtnClickHandler = () => {
  const { editButtonContainer, userPlantsContainer, addNewPlantDesktopButton } = plantLogElements.getPlantLogElements();
  const searchTaskContainer = document.querySelector('.task-results');
  const taskSelectContainer = document.querySelector('.task-select-container');
  clearSection(searchTaskContainer, 'PLANT_LOG');
  hideElements(taskSelectContainer, searchTaskContainer);
  resetEditButton();
  editButtonContainer.classList.add('flex');
  editButtonContainer.classList.remove('hidden');
  addNewPlantDesktopButton.classList.remove('hide-desktop');
  userPlantsContainer.classList.remove('zero-height');
  resetPlantGrid(plantLog.getUserPlantLog());
  updatePlantInfoBar();
}

/**
 * Handles the "Tasks" button click event and renders the tasks list.
 */
export const taskBtnHandler = () => {
  const { editButtonContainer, userPlantsContainer, addNewPlantDesktopButton } = plantLogElements.getPlantLogElements();
  const searchTaskContainer = document.querySelector('.task-results');
  clearSection(searchTaskContainer, 'PLANT_LOG');
  searchTaskContainer.classList.add('flex');
  searchTaskContainer.classList.remove('hidden');
  hideElements(editButtonContainer);
  userPlantsContainer.classList.add('zero-height');
  addNewPlantDesktopButton.classList.add('hide-desktop');
  renderTasksList(false);
  renderTaskSelect();
  updateTaskBar();
}

/**
 * Handles the "Archive" button click event and renders the archived plants.
 */
export const archiveBtnClickHandler = () => {
  const { editButtonContainer, userPlantsContainer, addNewPlantDesktopButton } = plantLogElements.getPlantLogElements();
  const searchTaskContainer = document.querySelector('.task-results');
  const taskSelectContainer = document.querySelector('.task-select-container');
  clearSection(searchTaskContainer, 'PLANT_LOG');
  resetEditButton();
  hideElements(editButtonContainer, searchTaskContainer, taskSelectContainer);
  userPlantsContainer.classList.remove('zero-height');
  addNewPlantDesktopButton.classList.add('hide-desktop');
  renderDeletedPlants();
}

/**
 * Sets up event listeners for plant menu buttons. Handles adding new task, new tag, pin plant and delete plant.
 * @param {HTMLElement} newTask 
 * @param {Object} plant 
 * @param {HTMLElement} addTag 
 * @param {HTMLElement} pinPlant 
 * @param {HTMLElement} deletePlant 
 */
export const setUpPlantMenuListeners = (newTask, plant, addTag, pinPlant, deletePlant) => {
  localEventManager.addEventListener(newTask, 'click', () => {
    addNewTaskHandler(plant);
  });

  localEventManager.addEventListener(addTag, 'click', () => {
    if (plant.tags.length > 1) {
      renderMaximumTagsError();
      return;
    }
    addNewTagHandler(plant);
  });

  localEventManager.addEventListener(pinPlant, 'click', (event) => {
    pinPlantHandler(event, plant)
  });

  localEventManager.addEventListener(deletePlant, 'click', () => {
    deletePlantBtnHandler(plant);
  });
}

export const setUpArchivePlantListeners = (unarchive, plant, permanentDelete) => {
  localEventManager.addEventListener(unarchive, 'click', () => {
    plantLog.removeFromDeletedPlants(plant);
    renderDeletedPlants();
    plant.selected = false;

    console.log(plant)
  }, 'PLANT_LOG');

  localEventManager.addEventListener(permanentDelete, 'click', () => {
    permanentDeletePlant(plant);
    renderDeletedPlants();
  },'PLANT_LOG')
}