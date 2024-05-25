// plantLogEventHandling.js
/**
 * Event handler logic the plant log section.
 */

import { renderPlantDetails } from "../plant-page/plantPageMain";
import { buttonHighlight, clearSection, createElement, resetSection } from "../utils/globalDomManipulation";
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren, hideElements, showElements } from "../utils/gobalUtility";
import { createSelectMenu, plantLogElements, renderTaskSelect, renderTasksList, resetEditButton, togglePlantSelect, toggleSelectButton, updateTaskBar } from "./plantLogDomManipulation";
import { plantLog, renderDeletedPlants, renderMyPlants, renderQuickMenu, resetPlantGrid, updatePlantInfoBar } from "./plantLogMain";

/**
 * Sets up an event listener for clicks within the user plants grid in the My Plants section.
 * Utilizes event delegation to handle clicks on dynamically added plant images, allowing for efficient
 * event handling and reducing the need for attaching listeners to individual plants in the grid.
 * 
 * @param {HTMLElement} plantLogElement - The container element for the plant log section where events are monitored.
 * @param {Array} plantLogType - eg. userPlantLog or deletedPlantLog.
 * @param {Function} sectionRender - eg. renderMyPlants, renderDeletedPlants etc.
 * @param {String} backButtonText - text for the back button eg. 'back to My Plants'.
 */
export const setupUserPlantGridEventListener = (plantLogElement, plantLogType, sectionRender, backButtonText) => {
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();
  const plantPageContainer = createElement({tagName: 'div', classEl: ['plant-page-container']});

  // Event propagation for elements in the userPlantGrid.
  localEventManager.addEventListener(userPlantsContainer, 'click', (event) => {
    let target = event.target;
    while (target && target !== userPlantsContainer) {
      if (target.classList.contains('plant-image')) {
        const plantId = target.getAttribute('data-id');
        const plant = plantLog.getPlantById(plantId, plantLogType);
        if (plant) {
          localEventManager.removeAllEventListeners('PLANT_NAV');
          localEventManager.removeAllEventListeners('PLANT_SEARCH');
          clearSection(plantLogElement, 'PLANT_LOG');
          appendChildren(plantLogElement, plantPageContainer);
          renderPlantDetails(plant, plantPageContainer, backButtonText, '.plant-log', sectionRender);
        }
        return;
      }
      target = target.parentNode;
    }

  }, 'PLANT_CONTAINER');
}

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
 * Sets up event listeners for menu buttons. 
 * @param {Array} menuButtonsArray - array of menu button elements.
 * @param {HTMLElement} archive - archive button element.
 * @param {HTMLElement} tasks - tasks button element.
 * @param {HTMLElement} all - all button element.
 */
export const serUpMenuButtonListeners = (menuButtonsArray, archive, tasks, all) => {
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
 * Sets up event listeners for selecting tasks and handles task completion state accordingly. 
 * @param {Boolean} completed 
 * @param {HTMLElement} todo 
 * @param {HTMLElement} searchTaskContainer 
 */
export const setUpTaskSelectListeners = (completed, todo, searchTaskContainer) => {
  localEventManager.addEventListener(completed, 'click', () => {
    taskSelectHandler(completed, todo, true, searchTaskContainer);
    completed.active = true;
  });

  localEventManager.addEventListener(todo, 'click', () => {
    taskSelectHandler(todo, completed, false, searchTaskContainer);
    completed.active = false;
  })
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