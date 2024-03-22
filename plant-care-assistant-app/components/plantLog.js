// plantLog.js
/**
 * For displaying user plants on the dashboard
 */

import { dummyPlants } from "./data";
import { domElements, createElement, prepareDashboard } from "./domManipulation";
import { appendChildren, findItemInArray } from "./utility";

export const startMyPlants = () => {
  const { myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;
  prepareDashboard(myPlantsBtn, discoverBtn, plantQuizBtn);
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
  const { userPlantGrid } = domElements;
  const userPlantContainer = createElement({tagName: 'div', classEl: 'user-plant'});
  const plantImageContainer = createElement({tagName: 'div', classEl: 'plant-image-container'});
  const plantImage = createElement({tagName: 'img', classEl: 'plant-image', dataAttributes: { 'id': newPlant.id.toString() }});
  const plantTitle = createElement({tagName: 'p', textContent: newPlant.name});
  plantImage.src = newPlant.image

  appendChildren(plantImageContainer, plantImage);
  appendChildren(userPlantContainer, plantImageContainer, plantTitle);
  appendChildren(userPlantGrid, userPlantContainer);
}

/**
 * Populate the plant grid with plants stored in the userPlantLog
 */
export const populatePlantGrid = () => {
  plantLog.userPlantLog.forEach(plant => {
    addPlantToGrid(plant);
  });
}

// user added plants added to plantLog (irl will be taken from local storage or when added by user)
dummyPlants.forEach(plant => {
  plantLog.addToUserPlantLog(plant);
})