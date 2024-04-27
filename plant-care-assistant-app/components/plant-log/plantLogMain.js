// plantLogMain.js
/**
 * Main file for the Plant Log module, centralising the module's functionality.
 * For displaying user plants on the dashboard.
 */

import { domElements, createElement, clearSection, resetSection } from "../utils/globalDomManipulation";
import { appendChildren, findItemInArray, hideElements, removeChildren, removeItemFromArray } from "../utils/gobalUtility";
import { dummyPlants, plantDirectory } from "../utils/data";
import { setupUserPlantGridEventListener } from "./plantLogEventHandling";
import { localEventManager } from "../utils/globalEventHandling";
import { renderManualPlantForm } from "../add-plant/addPlantMain";
import { plantLogElements } from "./plantLogDomManipulation";
import { updateSearchResults } from "../plant-discovery/plantDiscoveryMain";

/**
 * Renders plant log elements on screen and calls functions to populate grid and set up event listeners.
 */
export const renderMyPlants = () => {
  const { plantLogEl } = domElements;
  const { sectionHeader, menuButtons, plantInfoBar, infoBarContainer, plantLogTitle, userPlantsContainer } = plantLogElements.createPlantLogElements();

  const { numberOfPlants, numberOfTasks } = setPlantInfoBar(plantLog.getUserPlantLog());
  plantInfoBar.textContent = `${numberOfPlants} plants, ${numberOfTasks} tasks`;

  appendChildren(sectionHeader, plantLogTitle)
  appendChildren(plantLogEl, sectionHeader, menuButtons, infoBarContainer, userPlantsContainer);

  renderPlantGrid(plantLog.getUserPlantLog(), renderMyPlants, '← back to My Plants');

  localEventManager.removeAllEventListeners('PLANT_SEARCH');
  localEventManager.removeAllEventListeners('PLANT_DISCOVERY');
}

export const setPlantInfoBar = (userPlants, plantInfoBar) => {
  const numberOfTasks = userPlants.reduce((total, plant) => {
    return total + (plant.tasks ? plant.tasks.length : 0)
  }, 0);
  const numberOfPlants = userPlants.length

  return {numberOfPlants, numberOfTasks}
}

/**
 * Render the deleted plants in the plant grid. Change the My Plants section into an Archive Plants section. 
 */
export const renderDeletedPlants = () => {
  const { userPlantsContainer, plantInfoBar } = plantLogElements.getPlantLogElements();
  clearSection(userPlantsContainer, 'PLANT_LOG')
  renderPlantGrid(plantLog.getDeletedPlants(), renderMyPlants, '← back to Plant Archive');
  plantInfoBar.textContent = `${plantLog.getDeletedPlants().length} archived plants`;
}

/**
 * Render the plant grid. Eg. Either populate the grid with My Plants or with archived plants.
 * @param {Array} plantLogType - eg. userPlantLog or deletedPlantLog.
 * @param {Function} sectionRender - eg. renderMyPlants, renderDeletedPlants etc.
 * @param {String} backButtonText - text for the back button eg. 'back to My Plants'.
 */
export const renderPlantGrid = (plantLogType, sectionRender, backButtonText) => {
  const { plantLogEl } = domElements;
  populatePlantGrid(plantLogType);
  setupUserPlantGridEventListener(plantLogEl, plantLogType, sectionRender, backButtonText);
}

/**
 * Store userPlantLog and return methods related to the plant log.
 * Also stores the original plant data for users to reset any edits made to the original plant.
 * @returns {Object} Methods to add, remove, update and retrieve plants from the userPlantLog.
 */
const plantLogManager = () => {
  let userPlantLog = [];
  let originalPlantLog = [];
  let deletedPlantLog = [];

  return {
    addToUserPlantLog: (plant) => {
      userPlantLog.push(plant);
      const foundPlant = findItemInArray(originalPlantLog, plant.id);
      if (!foundPlant) {
        const clonePlant = JSON.parse(JSON.stringify(plant));
        originalPlantLog.push(clonePlant);
      }
    },
    deletePlantFromLog: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        userPlantLog = removeItemFromArray(userPlantLog, plant.id);
        deletedPlantLog.push(plant);
      } 
    },
    updatePlantInfo: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        foundPlant.name = plant.name;
        foundPlant.dateAdded = plant.dateAdded;
        foundPlant.notes = plant.notes;
        foundPlant.image = plant.image;
      }
    },
    removeFromDeletedPlants: (plant) => {
      const foundPlant = findItemInArray(deletedPlantLog, plant.id);
      if (foundPlant) {
        deletedPlantLog = removeItemFromArray(deletedPlantLog, plant.id);
        plantLog.addToUserPlantLog(plant);
      }
    },
    permanentDelete: (plant) => {
      deletedPlantLog = removeItemFromArray(deletedPlantLog, plant.id);
      originalPlantLog = removeItemFromArray(originalPlantLog, plant.id);
    },
    getPlant: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        return foundPlant;
      } else {
        alert('Cannot find plant!');
      }
    },
    getOriginalPlant: (plant) => {
      const foundPlant = findItemInArray(originalPlantLog, plant.id);
      return foundPlant;
    },
    getPlantById: (plantId, plantLogType) => {
      return plantLogType.find(plant => plant.id.toString() === plantId);
    },
    getUserPlantLog: () => {
      return userPlantLog;
    },
    getOriginalPlantLog: () => {
      return originalPlantLog;
    },
    getDeletedPlants: () => {
      return deletedPlantLog;
    },
    deletePlantTask: (plantTaskId) => {
      userPlantLog.forEach(plant => {
        if (plant.tasks) {
          const index = plant.tasks.findIndex(task => task.id === plantTaskId);
          if (index !== -1) {
            plant.tasks.splice(index, 1);
          }
        }
      });
    }
  }
}

export const plantLog = plantLogManager();

/**
 * Add and display a new plant on the userPlantGrid.
 * @param {Object} newPlant 
 */
export const addPlantToGrid = (newPlant) => {
  const userPlantsContainer = document.querySelector('.user-plants');
  const userPlantContainer = createElement({tagName: 'div', classEl: ['user-plant']});
  const plantImageContainer = createElement({tagName: 'div', classEl: ['plant-image-container']});
  const plantImage = createElement({tagName: 'img', classEl: ['plant-image'], dataAttributes: { 'id': newPlant.id.toString() }});
  const taskCounter = createElement({tagName: 'p', classEl: ['task-counter']});
  const plantTitle = createElement({tagName: 'p', textContent: newPlant.name});
  plantImage.src = newPlant.image;
  if (newPlant.tasks) {
    taskCounter.textContent = `${newPlant.tasks.length} tasks`;
  }


  appendChildren(plantImageContainer, plantImage);
  appendChildren(userPlantContainer, plantImageContainer, taskCounter, plantTitle);
  appendChildren(userPlantsContainer, userPlantContainer);
}

/**
 * Populate the plant grid with plants stored in the userPlantLog
 * @param {Array} plants - eg. userPlantLog or archivedplants
 */
export const populatePlantGrid = (plants) => {  
  plants.forEach(plant => {
    addPlantToGrid(plant);
  });
}

dummyPlants.forEach(plant => {
  plantLog.addToUserPlantLog(plant);
})