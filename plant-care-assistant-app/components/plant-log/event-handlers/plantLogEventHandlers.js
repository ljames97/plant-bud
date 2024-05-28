// plantLogEventHandling.js
/**
 * Event handler logic for the plant log section.
 */

import { resetSection } from "../../utils/globalDomUtils";
import { handleDocumentClick, localEventManager } from "../../utils/globalEventHandlers";
import { hideElements, showElements } from "../../utils/gobalUtility";
import { resetPlantGrid } from "../dom-utils";
import { createArchivePlantMenu, createPlantMenu, createSelectMenu, renderQuickMenu } from "../dom-utils";
import { movePlantToTop, togglePlantSelect, toggleSelectButton } from "../dom-utils";
import { plantLog, renderMyPlants } from "../plantLogMain";

/**
 * Sets up event listeners for the plant log (My Plants) page.
 * @param {HTMLElement} editButton 
 * @param {HTMLElement} editDots 
 */
export const setUpPlantLogListeners = (editButton, editDots) => {
  localEventManager.addEventListener(editButton, 'click', () => {
    editButtonHandler(editDots, editButton);
  }, 'PLANT_EDIT');

  localEventManager.addEventListener(editDots, 'click', (event) => {
    editSelectHandler(event, editDots);
  }, 'PLANT_EDIT');
}

/**
 * Render the quick dropdown menu when edit button is clicked.
 * @param {Event} event
 * @param {HTMLElement} menuDots 
 */
export const editSelectHandler = (event, menuDots) => {
  renderQuickMenu(event, createSelectMenu, menuDots, null);
}

/**
 * Deletes the selected plants from the log.
 * @param {Array} selectedPlants - array of plant objects to be deleted.
 */
export const deleteSelectedHandler = (selectedPlants) => {
  selectedPlants.forEach(plant => plantLog.deletePlantFromLog(plant));
  resetSection('.plant-log', renderMyPlants, 'PLANT_LOG');
}

/**
 * Handles the edit button state and toggles between edit modes.
 * @param {HTMLElement} editDots 
 * @param {HTMLElement} editButton
 */
export const editButtonHandler = (editDots, editButton) => {
  const selectButton = document.querySelectorAll('.plant-select-button');
  const menu = document.querySelectorAll('.plant-menu');
  if (editButton.editMode) {
    hideElements(editDots);
    editButton.textContent = 'Select';
    editButton.editMode = false;

    selectButton.forEach(btn => btn.style.display = 'none');
    menu.forEach(menu => menu.style.display = 'flex');

    resetSection('.plant-log', renderMyPlants, 'PLANT_LOG');

  } else {
    showElements('flex', editDots);
    editButton.textContent = 'Cancel';

    selectButton.forEach(btn => btn.style.display = 'block');
    menu.forEach(menu => menu.style.display = 'none');

    editButton.editMode = true;
    setUpPlantEventListener();
  }
}

/**
 * Sets up event listeners for selecting a plant within the user plants container during "edit" mode.
 */
const setUpPlantEventListener = () => {
  const userPlantsContainer = document.querySelector('.user-plants');

  localEventManager.removeAllEventListeners('PLANT_CONTAINER');

  localEventManager.addEventListener(userPlantsContainer, 'click', (event) => {
    let target = event.target;
    while (target && target !== userPlantsContainer) {
      if (target.classList.contains('plant-image')) {
        const plantId = target.getAttribute('data-id');
        const plant = plantLog.getPlantById(plantId, plantLog.getUserPlantLog());
        const userPlantContainer = target.closest('.user-plant');
        const selectButton = userPlantContainer.querySelector('.plant-select-button');
        if (plant) {
          toggleSelectButton(selectButton, plant);
          togglePlantSelect(plant);
        }
        return;
      }
      target = target.parentNode;
    }
  }, 'PLANT_CONTAINER');
}

/**
 * Sets up event listeners for new plant in the user plants grid. Handles rendering the quick menu and document click.
 * @param {HTMLElement} menuDots 
 * @param {Object} newPlant 
 */
export const setUpNewPlantListeners = (menuDots, newPlant) => {
  localEventManager.addEventListener(menuDots, 'click', (event) => {
    if (!newPlant.archived) {
      renderQuickMenu(event, createPlantMenu, menuDots, newPlant);
    } else {
      renderQuickMenu(event, createArchivePlantMenu, menuDots, newPlant);
    }
      localEventManager.addEventListener(document, 'click', handleDocumentClick, 'DOCUMENT');
    }, 'DOCUMENT');
}

/**
 * Handles pinning or unpinning a plant.
 * @param {Event} event 
 * @param {Object} plant 
 */
export const pinPlantHandler = (event, plant) => {
  const target = event.target;
  const userPlantContainer = target.closest('.user-plant');

  if (!plant.pinned) {
    plant.pinned = true;
    movePlantToTop(userPlantContainer);
  } else {
    plant.pinned = false;
  }

  resetPlantGrid(plantLog.getUserPlantLog());
}