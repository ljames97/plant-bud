// gridManagement.js
/**
 * For rendering, resetting, and managing the plant grid in the Plant Log section.
*/

import { pinPlantIcon } from "../../../images";
import { clearSection, createElement, createMenuDots, domElements } from "../../global/dom-utils";
import { appendChildren } from "../../global/utils";
import { setupUserPlantGridEventListener } from "../event-handlers";
import { setUpNewPlantListeners } from "../event-handlers";
import { plantLog, populatePlantGrid, renderMyPlants } from "../plantLogMain";
import { movePlantToTop, plantLogElements } from "./plantLogDomUtils";
import { createPlantLogTags } from "./tagDomUtils";

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
  console.log(plantLogType);
  if (plantLogType.length < 0) {
    return;
  }
  const { plantLogEl } = domElements;
  populatePlantGrid(plantLogType);
  setupUserPlantGridEventListener(plantLogEl, plantLogType, sectionRender, backButtonText);
}

/**
 * Resets the plant grid and renders it with the provided plant array.
 * @param {Array} plantArray 
 */
export const resetPlantGrid = (plantArray) => {
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();
  clearSection(userPlantsContainer, 'PLANT_LOG');
  renderPlantGrid(plantArray, renderMyPlants, '← back to My Plants');
}

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
  const tagContainer = createPlantLogTags(newPlant);
  const taskCounter = createElement({tagName: 'p', classEl: ['task-counter']});
  const plantTitle = createElement({tagName: 'p',  classEl: ['plant-grid-title'], textContent: newPlant.name});
  const pinIconContainer = createElement({tagName: 'div', classEl: ['pin-icon-container']});
  const pinIcon = createElement({tagName: 'img', classEl: ['pin-icon-img']});
  pinIcon.src = pinPlantIcon;

  plantImage.src = newPlant.image;
  menuDots.classList.add('plant-menu');
  
  if (newPlant.tasks) {
    const unselectedTasksCount = newPlant.tasks ? newPlant.tasks.filter(task => !task.selected).length : 0;
    taskCounter.textContent = `${unselectedTasksCount} tasks`;
  }

  appendChildren(editButtons, selectButton, menuDots);
  appendChildren(plantImageContainer, plantImage, editButtons);
  appendChildren(userPlantContainer, plantImageContainer, tagContainer, taskCounter, plantTitle);
  appendChildren(pinIconContainer, pinIcon);
  appendChildren(userPlantContainer, pinIconContainer);
  appendChildren(userPlantsContainer, userPlantContainer);

  if (newPlant.pinned === true) {
    pinIconContainer.style.display = 'block';
    movePlantToTop(userPlantContainer);
  }

  setUpNewPlantListeners(menuDots, newPlant);
}

/**
 * Refresh plant grid by removing existing inner html and updating the userPlantLog.
 */
export const refreshPlantGrid = () => {
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();

  clearSection(userPlantsContainer, 'PLANT_LOG')

  const userPlantLog = plantLog.getUserPlantLog();
  userPlantLog.forEach(plant => {
    addPlantToGrid(plant);
  })
}