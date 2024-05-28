// menuButtonEventHandler.js

/**
 * Event handler functions for menu buttons in the Plant Log section.
*/

import { deletePlantBtnHandler } from "../../plant-page/event-handlers/plantPageEventHandlers";
import { permanentDeletePlant } from "../../plant-page/plantPageMain";
import { buttonHighlight, clearSection } from "../../utils/globalDomUtils";
import { localEventManager } from "../../utils/globalEventHandlers";
import { hideElements, showElements } from "../../utils/gobalUtility";
import { renderDeletedPlants, resetPlantGrid } from "../dom-utils";
import { plantLogElements, resetEditButton, updatePlantInfoBar } from "../dom-utils";
import { renderMaxTagsError } from "../dom-utils";
import { renderTaskSelect, renderTasksList, updateTaskBar } from "../dom-utils";
import { plantLog } from "../plantLogMain";
import { pinPlantHandler } from "./plantLogEventHandlers";
import { addNewTagHandler } from "./tagEventHandlers";
import { addNewTaskHandler } from "./taskEventHandlers";

/**
 * Sets up event listeners for menu buttons. 
 * @param {Array} menuButtonsArray - array of menu button elements.
 * @param {HTMLElement} archive - archive button element.
 * @param {HTMLElement} tasks - tasks button element.
 * @param {HTMLElement} all - all button element.
 */
export const setUpMenuButtonListeners = (menuButtonsArray, archive, tasks, all) => {
  menuButtonsArray.forEach(button => {
    localEventManager.addEventListener(button, 'click', () => {
      buttonHighlight(button, 'white', 'rgba(255, 255, 255, 0.224', 'black', 'white', ...button.inactiveBtns);
      }
    )
  }, 'PLANT_NAV');

  localEventManager.addEventListener(archive, 'click', () => {
    archiveBtnClickHandler();
  }, 'PLANT_NAV');

  localEventManager.addEventListener(tasks, 'click', () => {
    taskBtnHandler();
  }, 'PLANT_NAV');

  localEventManager.addEventListener(all, 'click', () => {
    allBtnClickHandler();
  }, 'PLANT_NAV')
}

/**
 * Handles the "All" button click event and resets the plant grid.
 */
const allBtnClickHandler = () => {
  const { editButtonContainer} = plantLogElements.getPlantLogElements();
  const searchTaskContainer = document.querySelector('.task-results');
  const taskSelectContainer = document.querySelector('.task-select-container');
  clearSection(searchTaskContainer, 'PLANT_LOG');
  hideElements(taskSelectContainer);
  resetEditButton();
  showElements('flex', editButtonContainer);
  resetPlantGrid(plantLog.getUserPlantLog());
  updatePlantInfoBar();
}

/**
 * Handles the "Tasks" button click event and renders the tasks list.
 */
const taskBtnHandler = () => {
  const { editButtonContainer } = plantLogElements.getPlantLogElements();
  const searchTaskContainer = document.querySelector('.task-results');
  clearSection(searchTaskContainer, 'PLANT_LOG');
  hideElements(editButtonContainer);
  renderTasksList(false);
  renderTaskSelect();
  updateTaskBar();
}

/**
 * Handles the "Archive" button click event and renders the archived plants.
 */
const archiveBtnClickHandler = () => {
  const { editButtonContainer } = plantLogElements.getPlantLogElements();
  const searchTaskContainer = document.querySelector('.task-results');
  const taskSelectContainer = document.querySelector('.task-select-container');
  clearSection(searchTaskContainer, 'PLANT_LOG');
  resetEditButton();
  hideElements(editButtonContainer, taskSelectContainer);
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
      renderMaxTagsError();
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
  }, 'PLANT_LOG');

  localEventManager.addEventListener(permanentDelete, 'click', () => {
    permanentDeletePlant(plant);
    renderDeletedPlants();
  },'PLANT_LOG')
}