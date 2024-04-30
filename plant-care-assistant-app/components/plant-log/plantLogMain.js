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
import { createMenuDots, handleDocumentClick, toggleMenu, updateSearchResults } from "../plant-discovery/plantDiscoveryMain";
import { removeModal, setUpModal } from "../plant-page/plantPageDomManipulation";
import { deletePlantBtnHandler } from "../plant-page/plantPageEventHandling";

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
  const editButtons = createElement({tagName: 'div', classEl: ['edit-plant-buttons']});
  const selectButton = createElement({tagName: 'button', classEl: ['plant-select-button']});
  const menuDots = createMenuDots();
  const tagContainer = createTags(newPlant);
  const taskCounter = createElement({tagName: 'p', classEl: ['task-counter']});
  const plantTitle = createElement({tagName: 'p', textContent: newPlant.name});
  const pinIconContainer = createElement({tagName: 'div', classEl: ['pin-icon-container']});
  const pinIcon = createElement({tagName: 'img', classEl: ['pin-icon-img']});
  pinIcon.src = '../../public/pin-icon.png'

  plantImage.src = newPlant.image;
  menuDots.classList.add('plant-menu');
  
  if (newPlant.tasks) {
    taskCounter.textContent = `${newPlant.tasks.length} tasks`;
  }

  appendChildren(editButtons, selectButton, menuDots);
  appendChildren(plantImageContainer, plantImage, editButtons);
  appendChildren(userPlantContainer, plantImageContainer, tagContainer, taskCounter, plantTitle);
  appendChildren(pinIconContainer, pinIcon);
  appendChildren(userPlantContainer, pinIconContainer);
  appendChildren(userPlantsContainer, userPlantContainer);

  if (newPlant.pinned === true) {
    pinIconContainer.style.display = 'block';
    console.log(newPlant)
    movePlantToTop(userPlantContainer);
  }

  localEventManager.addEventListener(menuDots, 'click', (event) => {
      renderQuickMenu(event, createPlantMenu, menuDots, newPlant);
      localEventManager.addEventListener(document, 'click', handleDocumentClick, 'DOCUMENT');
    }, 'DOCUMENT');
}

const createTags = (plant) => {
  const tagContainer = createElement({tagName: 'div', classEl: ['plant-tag-container']});
  const tags = plant.tags
  tags.forEach(tag => {
    const newTag = createElement({tagName: 'button', textContent: tag.description, classEl: ['search-tag', 'plant-log-tag']});
    appendChildren(tagContainer, newTag);
    localEventManager.addEventListener(newTag, 'click', () => {
      editTagHandler(newTag, plant);
    })
  });

  return tagContainer;
}

const editTagHandler = (newTag, plant) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const editTaskModal = createElement({tagName: 'div', classEl: ['new-modal']});
  const editTaskInput = createElement({tagName: 'input', placeholder: newTag.textContent, classEl: ['new-input']});
  const editTagButtons = createElement({tagName: 'div', classEl: ['edit-tag-buttons']});
  const deleteBtn = createElement({tagName: 'button', textContent: 'Delete', classEl: ['delete-tag-btn']});
  const updateBtn = createElement({tagName: 'button', textContent: 'Update', classEl: ['update-tag-btn', 'submit-btn']});

  setUpModal(editTaskModal, null, 'PLANT_LOG');

  appendChildren(editTagButtons, deleteBtn, updateBtn);
  appendChildren(editTaskModal, editTaskInput, editTagButtons);
  appendChildren(modalOverlay, editTaskModal);

  localEventManager.addEventListener(deleteBtn, 'click', () => {
    deleteTagHandler(newTag, plant, editTaskModal);
  });

  localEventManager.addEventListener(editTagButtons, 'click', () => {
    updateTagHandler(newTag, plant, editTaskModal, editTaskInput);
  })
}

const deleteTagHandler = (newTag, plant, editTaskModal) => {
  const foundTag = plant.tags.find(tag => tag.description === newTag.textContent);
  plant.tags = removeItemFromArray(plant.tags, foundTag.id);
  removeModal(editTaskModal, 'PLANT_LOG');
  resetPlantGrid();
}

const updateTagHandler = (newTag, plant, editTaskModal, editTaskInput) => {
  if (editTaskInput.value === '') {
    return;
  }
  const foundTag = plant.tags.find(tag => tag.description === newTag.textContent);
  foundTag.description = editTaskInput.value;
  removeModal(editTaskModal, 'PLANT_LOG');
  resetPlantGrid();
}

//global
export const resetPlantGrid = () => {
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();
  clearSection(userPlantsContainer, 'PLANT_LOG');
  renderPlantGrid(plantLog.getUserPlantLog(), renderMyPlants, '← back to My Plants');
}

// global
export const renderQuickMenu = (event, createMenuFunc, menuDots, plantOrTask, element) => {
  event.stopPropagation();
  toggleMenu();
  createMenuFunc(menuDots, plantOrTask, element);
}

const createArchivePlantMenu = () => {
  
}

const createPlantMenu = (menuDots, plant) => {
  const dropMenuContainer = createElement({tagName: 'div', classEl: ['drop-menu-container']});
  const newTask = createElement({tagName: 'p', textContent: 'New task', classEl: ['drop-menu-item']});
  const addTag = createElement({tagName: 'p', textContent: 'New tag', classEl: ['drop-menu-item']});
  const pinPlant = createElement({tagName: 'p', textContent: !plant.pinned ? 'Pin' : 'Unpin', classEl: ['drop-menu-item']});
  const deletePlant = createElement({tagName: 'p', textContent: 'Delete', classEl: ['drop-menu-item']});

  appendChildren(dropMenuContainer, newTask, addTag, pinPlant, deletePlant);
  appendChildren(menuDots, dropMenuContainer);

  localEventManager.addEventListener(newTask, 'click', () => {
    addNewTaskHandler(plant);
  })

  localEventManager.addEventListener(addTag, 'click', () => {
    addNewTagHandler(plant);
  })

  localEventManager.addEventListener(pinPlant, 'click', (event) => {
    pinPlantHandler(event, plant)
  })

  localEventManager.addEventListener(deletePlant, 'click', () => {
    deletePlantBtnHandler(plant);
  })
}

const pinPlantHandler = (event, plant) => {
  const target = event.target;
  const userPlantContainer = target.closest('.user-plant');

  if (!plant.pinned) {
    plant.pinned = true;
    movePlantToTop(userPlantContainer);
  } else {
    plant.pinned = false;
  }

  resetPlantGrid();
}

const addNewTaskHandler = (plant) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const menuContainer = document.querySelector('.drop-menu-container');
  const newTaskModal = createElement({tagName: 'div', classEl: ['new-modal']});
  const newTaskInput = createElement({tagName: 'input', placeholder: 'New task', classEl: ['new-input']});
  // priority input, notes, date, alert etc.
  const submitBtn = createElement({tagName: 'button', textContent: 'Add task', classEl: ['submit-btn']});
  const cancelBtn = createElement({tagName: 'p', textContent: 'X', classEl: ['cancel-btn']});
  
  setUpModal(newTaskModal, menuContainer, 'PLANT_LOG');

  appendChildren(newTaskModal, cancelBtn, newTaskInput, submitBtn);
  appendChildren(modalOverlay, newTaskModal);

  localEventManager.addEventListener(submitBtn, 'click', () => {
    submitTaskHandler(plant, newTaskInput.value, newTaskModal);
  }, 'PLANT_LOG');
}

const addNewTagHandler = (plant) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const menuContainer = document.querySelector('.drop-menu-container');
  const newTagModal = createElement({tagName: 'div', classEl: ['new-modal']});
  const newTagInput = createElement({tagName: 'input', placeholder: 'e.g. New, Flowering', classEl: ['new-input']});
  const submitBtn = createElement({tagName: 'button', textContent: 'Add tag', classEl: ['submit-btn']});
  const cancelBtn = createElement({tagName: 'p', textContent: 'X', classEl: ['cancel-btn']});

  setUpModal(newTagModal, menuContainer, 'PLANT_LOG');

  appendChildren(newTagModal, cancelBtn, newTagInput, submitBtn);
  appendChildren(modalOverlay, newTagModal);

  localEventManager.addEventListener(submitBtn, 'click', () => {
    submitTagHandler(plant, newTagInput.value, newTagModal);
  }, 'PLANT_LOG');
}

const submitTagHandler = (plant, newTagInput, newTagModal) => {
  if (newTagInput === '') {
    return;
  }

  removeModal(newTagModal, 'PLANT_LOG');
  
  if (plant.tags.length > 1) {
    console.log('Maximum tags created!');
    return;
  }

  if (!plant.tags.some(tag => tag.description === newTagInput)) {
    const newTag = {
      id: Date.now(),
      description: newTagInput,
    }
    plant.tags.push(newTag);
    console.log(plant.tags);
  }

  resetPlantGrid();
}

const submitTaskHandler = (plant, newTaskInput, newTaskModal) => {
  if (newTaskInput === '') {
    return;
  }

  removeModal(newTaskModal, 'PLANT_LOG');

  if (!plant.tasks.some(task => task.description === newTaskInput)) {
    const newTask = {
      id: Date.now(),
      description: newTaskInput,
      selected: false
    }
    plant.tasks.push(newTask);
  }
}

const movePlantToTop = (userPlantContainer) => {
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();

  if (userPlantContainer) {
    userPlantsContainer.prepend(userPlantContainer);
  }
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