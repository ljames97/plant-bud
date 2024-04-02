// plantLogMain.js
/**
 * Main file for the Plant Log module, centralising the module's functionality.
 * For displaying user plants on the dashboard.
 */

import { domElements, createElement, prepareDashboard } from "../utils/globalDomManipulation";
import { appendChildren, findItemInArray, removeChildren, removeItemFromArray } from "../utils/gobalUtility";
import { dummyPlants } from "../utils/data";
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
  const { sectionHeader, plantLogTitle, searchContainer, searchInput, searchResultsContainer, userPlantsContainer, addPlantBtn } = plantLogElements.createPlantLogElements();

  appendChildren(sectionHeader, plantLogTitle)
  appendChildren(searchContainer, searchInput, searchResultsContainer)
  appendChildren(plantLogEl, sectionHeader, searchContainer, userPlantsContainer, addPlantBtn);

  populatePlantGrid();
  setupUserPlantGridEventListener(plantLogEl);

  localEventManager.addEventListener(searchInput, 'input', () => {
    removeChildren(plantLogEl, userPlantsContainer, addPlantBtn);
    updateSearchResults(plantLogEl, searchInput.value, searchResultsContainer, plantLog.getUserPlantLog(), '← back to My Plants', '.plant-log', renderMyPlants);
  }, 'PLANT_LOG')

  localEventManager.addEventListener(addPlantBtn, 'click', () => {
    renderManualPlantForm(plantLogEl);
  }, 'PLANT_LOG');
}

/**
 * Store userPlantLog and return methods related to the plant log.
 * Also stores the original plant data for users to reset any edits made to the original plant.
 * @returns {Object} Methods to add, remove, update and retrieve plants from the userPlantLog.
 */
const plantLogManager = () => {
  let userPlantLog = [];
  let originalPlantLog = [];

  return {
    addToUserPlantLog: (plant) => {
      userPlantLog.push(plant);
      const clonePlant = JSON.parse(JSON.stringify(plant));
      originalPlantLog.push(clonePlant);
    },
    deletePlantFromLog: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        userPlantLog = removeItemFromArray(userPlantLog, plant.id);
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
    getPlant: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        return foundPlant;
      } else {
        alert('Cannot find plant!');
      }
    },
    getPlantById: (plantId) => {
      const userPlantLog = plantLog.getUserPlantLog();
      return userPlantLog.find(plant => plant.id.toString() === plantId);
    },
    getUserPlantLog: () => {
      return userPlantLog;
    },
    getOriginalPlantLog: () => {
      return originalPlantLog;
    },
    getOriginalPlant: (plant) => {
      const foundPlant = findItemInArray(originalPlantLog, plant.id);
      return foundPlant;
      }
    }
}

export const plantLog = plantLogManager();

/**
 * Add and display a new plant on the userPlantGrid
 * @param {Object} newPlant 
 */
export const addPlantToGrid = (newPlant) => {
  const userPlantsContainer = document.querySelector('.user-plants');
  const userPlantContainer = createElement({tagName: 'div', classEl: 'user-plant'});
  const plantImageContainer = createElement({tagName: 'div', classEl: 'plant-image-container'});
  const plantImage = createElement({tagName: 'img', classEl: 'plant-image', dataAttributes: { 'id': newPlant.id.toString() }});
  const plantTitle = createElement({tagName: 'p', textContent: newPlant.name});
  plantImage.src = newPlant.image

  appendChildren(plantImageContainer, plantImage);
  appendChildren(userPlantContainer, plantImageContainer, plantTitle);
  appendChildren(userPlantsContainer, userPlantContainer);
}

/**
 * Populate the plant grid with plants stored in the userPlantLog
 */
export const populatePlantGrid = () => {
  const userPlantLog = plantLog.getUserPlantLog() 
  
  userPlantLog.forEach(plant => {
    addPlantToGrid(plant);
  });
}

dummyPlants.forEach(plant => {
  plantLog.addToUserPlantLog(plant);
})