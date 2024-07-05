// plantLogMain.js
/**
 * Main file for the Plant Log module, centralising the module's functionality.
 * For displaying user plants on the dashboard.
 */

import './plantLog.css';
import { findItemInArray, removeItemFromArray } from "../global/utils";
import { localEventManager } from "../global/event-handlers";
import { plantLogElements, updatePlantInfoBar } from "./dom-utils";
import { addPlantToGrid, renderPlantGrid } from "./dom-utils";
import { addPlantToFirebase, deletePlantFromFirebase, updatePlantInFirebase } from '../../config';

/**
 * Renders plant log elements on screen and calls functions to populate grid and set up event listeners.
 */
export const renderMyPlants = () => {
  plantLogElements.createPlantLogElements();
  console.log('RENDERING');
  renderPlantGrid(plantLog.getUserPlantLog(), renderMyPlants, '← back to My Plants');
  updatePlantInfoBar();

  localEventManager.removeAllEventListeners('PLANT_SEARCH');
  localEventManager.removeAllEventListeners('PLANT_LIBRARY');
}

/**
 * Calculates the number of plants and the total number of unselected tasks from the user's plant log.
 * @param {Array} userPlants - array of plant objects representing the user's plant log
 * @returns {Object} Object containing the number of plants and the number of unselected tasks.
 */
export const setPlantInfoBar = (userPlants) => {
  const numberOfTasks = userPlants.reduce((total, plant) => {
    const unselectedTasksCount = plant.tasks ? plant.tasks.filter(task => !task.selected).length : 0;
    return total + unselectedTasksCount;
  }, 0);
  const numberOfPlants = userPlants.length

  return {numberOfPlants, numberOfTasks}
}


/**
 * Store userPlantLog and return methods related to the plant log.
 * Also stores the original plant data for users to reset any edits made to the original plant.
 * @returns {Object} Methods to add, remove, update and retrieve plants from the userPlantLog.
 */
export const plantLogManager = () => {
  let userPlantLog = [];
  let originalPlantLog = [];
  let deletedPlantLog = [];
  let userId = null;

  return {
    setUserId: (id) => {
      userId = id;
    },
    initialisePlantLog: (userPlants, originalPlants) => {
      userPlantLog = userPlants;
      originalPlantLog = originalPlants;
      userPlantLog.forEach(plant => {
        if (plant.archived === true) {
          userPlantLog = removeItemFromArray(userPlantLog, plant.id);
          deletedPlantLog.push(plant);
        }
      });
      console.log(originalPlantLog);
    },
    addToUserPlantLog: async (plant) => {
      userPlantLog.push(plant);
      const foundPlant = findItemInArray(originalPlantLog, plant.id);
      if (!foundPlant) {
        const clonePlant = JSON.parse(JSON.stringify(plant));
        originalPlantLog.push(clonePlant);
        const originalDocId = await addPlantToFirebase(userId, clonePlant, 'original');
        clonePlant.firestoreId = originalDocId;
        await updatePlantInFirebase(originalDocId, clonePlant, 'original'); // put inside addplantfirebase fnc
        plant.originalFirestoreId = originalDocId;
      }
      const docId = await addPlantToFirebase(userId, plant, 'plants');
      plant.firestoreId = docId;
      await updatePlantInFirebase(plant.firestoreId, plant, 'plants');
    },
    deletePlantFromLog: async (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        userPlantLog = removeItemFromArray(userPlantLog, plant.id);
        deletedPlantLog.push(plant);
        plant.archived = true;
      } 
      await updatePlantInFirebase(plant.firestoreId, plant, 'plants');
    },
    updatePlantInfo: async (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        foundPlant.name = plant.name;
        foundPlant.dateAdded = plant.dateAdded;
        foundPlant.image = plant.image;
      }
      await updatePlantInFirebase(plant.firestoreId, plant, 'plants');
    },
    removeFromDeletedPlants: async (plant) => {
      const foundPlant = findItemInArray(deletedPlantLog, plant.id);
      if (foundPlant) {
        deletedPlantLog = removeItemFromArray(deletedPlantLog, plant.id);
        userPlantLog.push(plant);
        plant.archived = false;
      }
      await updatePlantInFirebase(plant.firestoreId, plant, 'plants');
    },
    permanentDelete: async (plant) => {
      deletedPlantLog = removeItemFromArray(deletedPlantLog, plant.id);
      originalPlantLog = removeItemFromArray(originalPlantLog, plant.id);
      await deletePlantFromFirebase(plant.firestoreId, 'plants', plant);
      await deletePlantFromFirebase(plant.originalFirestoreId, 'original', plant);
    },
    getPlant: (plant) => {
      const foundPlant = findItemInArray(userPlantLog, plant.id);
      if (foundPlant) {
        return foundPlant;
      } else {
        return false;
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
 * Populate the plant grid with plants stored in the userPlantLog
 * @param {Array} plants - eg. userPlantLog or archivedplants
 */
export const populatePlantGrid = (plants) => {  
  plants.forEach(plant => {
    addPlantToGrid(plant);
  });
}