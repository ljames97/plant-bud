// plantLogMain.js
/**
 * For displaying user plants on the dashboard
 */

import { domElements, createElement, prepareDashboard } from "../utils/globalDomManipulation";
import { appendChildren, findItemInArray } from "../utils/gobalUtility";
import { dummyPlants } from "../utils/data";
import { setupUserPlantGridEventListener } from "./plantLogEventHandling";
import { localEventManager } from "../utils/globalEventHandling";
import { renderManualPlantForm } from "../add-plant/addPlantMain";
import { plantLogElements } from "./plantLogDomManipulation";

/**
 * Initialises the plant log ('My Plants') section of the app.
 */
export const myPlantsInit = () => {
  const { myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;

  if (myPlantsBtn.classList.contains('active')) {
    console.log('ACTIVE');
    return;
  }

  if (myPlantsBtn.classList.contains('dormant')) {
    prepareDashboard(myPlantsBtn, discoverBtn, plantQuizBtn);
    return;
  }

  prepareDashboard(myPlantsBtn, discoverBtn, plantQuizBtn);
  renderMyPlants();
  myPlantsBtn.classList.add('dormant');
}

const renderMyPlants = () => {
  const { plantLogEl } = domElements;
  const { plantLogTitle, addPlantBtn, userPlantsContainer } = plantLogElements.createPlantLogElements();;

  appendChildren(plantLogEl, plantLogTitle, userPlantsContainer, addPlantBtn);

  populatePlantGrid();
  setupUserPlantGridEventListener();

  localEventManager.addEventListener(addPlantBtn, 'click', () => {
    renderManualPlantForm(plantLogTitle, addPlantBtn, userPlantsContainer);
  });
}

/**
 * Store userPlantLog and return utility functions related to the plant log
 * @returns functions to add, remove, update and retrieve plants from the userPlantLog
 */
const plantLogManager = () => {
  let userPlantLog = [];

  return {
    addToUserPlantLog: (plant) => {
      userPlantLog.push(plant);
    },
    deletePlantFromLog: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        removeItemFromArray(userPlantLog, plant.id);
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
      return plantLog.userPlantLog.find(plant => plant.id.toString() === plantId);
    },
    userPlantLog
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
  plantLog.userPlantLog.forEach(plant => {
    addPlantToGrid(plant);
  });
}

// dummyPlants.forEach(plant => {
//   plantLog.addToUserPlantLog(plant);
// })