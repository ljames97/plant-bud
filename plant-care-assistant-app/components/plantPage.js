
// plant-page.js
/**
 * For viewing and editing plant details and plant requirements (watering scheduele, light etc).
 */

import { domElements, createElement, dynamicPlantElements, resetDomElements, refreshPlantGrid } from "./domManipulation";
import { appendChildren, removeChildren, showElements } from "./utility";
import { localEventManager, imageChangeHandler } from "./eventHandling";
import { plantLog } from "./plantLog";

/**
 * Render plant details on screen
 * @param {Object} plant 
 * @param {HTMLElement} container 
 */
export const renderPlantDetails = (plant, container, userPlantGrid) => {
  const subHeader = createElement({tagName: 'div', classEl: 'sub-header'});
  const backToDashboard = createElement({tagName: 'p', textContent: '← back to dashboard'});
  const editPlantDetailsBtn = createElement({tagName: 'button', textContent: 'Edit'});
  
  const { plantTitle, plantImageContainer, plantImage, plantDate, plantDescription } = dynamicPlantElements;
  plantTitle.textContent = plant.name;
  plantDate.textContent = plant.dateAdded;
  plantDescription.textContent = plant.description;
  plantImage.src = plant.image;

  appendChildren(plantImageContainer, plantImage);
  appendChildren(subHeader, backToDashboard, editPlantDetailsBtn);

  appendChildren(container, subHeader, plantTitle, plantDate, plantImageContainer, plantDescription);

  localEventManager.addEventListener(editPlantDetailsBtn, 'click', () => 
    toggleEditMode(plant, editPlantDetailsBtn, {plantTitle, plantDate, plantDescription, plantImageContainer, plantImage}))
  localEventManager.addEventListener(backToDashboard, 'click', () => {
    backToDashboardHandler(container, userPlantGrid, subHeader, plantTitle, plantDate, plantImageContainer, plantDescription);
  })

  // add watering scheduele and other requirements (soil, light etc)
}

/**
 * Toggle edit mode to edit plant details including title, image, date and notes.
 * @param {Object} plant 
 * @param {HTMLElement} editBtn 
 * @param {HTMLElement} elements 
 */
const toggleEditMode = (plant, editBtn, elements) => {
  const isEditMode = editBtn.textContent === 'Edit';

  if (isEditMode) {
    editBtn.textContent = 'Save';

    elements.plantTitle.innerHTML = `<input type="text" class="edit-plant-title" value="${plant.name}">`;
    elements.plantDate.innerHTML = `<input type="text" class="edit-plant-date" value="${plant.dateAdded}">`;
    elements.plantDescription.innerHTML = `<textarea class="edit-plant-notes">${plant.description}</textarea>`;

    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.classList.add('edit-plant-image');
    imageInput.accept = 'image/*';
    elements.plantImageContainer.insertBefore(imageInput, elements.plantImageContainer.firstChild);

    imageInput.addEventListener('change', (event) => {
      imageChangeHandler(event, (dataUrl) => {
        plant.image = dataUrl;
        elements.plantImage.src = dataUrl;
      });
    });

  } else {
    editBtn.textContent = 'Edit';

    const updatedName = document.querySelector('.edit-plant-title').value;
    const updatedDate = document.querySelector('.edit-plant-date').value;
    const updatedDescription = document.querySelector('.edit-plant-notes').value;

    plant.name = updatedName;
    plant.dateAdded = updatedDate;
    plant.description = updatedDescription;

    plantLog.updatePlantInfo(plant);
    refreshPlantGrid();

    elements.plantTitle.textContent = updatedName;
    elements.plantDate.textContent = updatedDate;
    elements.plantDescription.textContent = updatedDescription;

    const imageInput = document.querySelector('.edit-plant-image');
    if (imageInput) {
      imageInput.remove();
    }
  }
}

/**
 * Remove plant page and return to dashboard (plantGrid).
 * @param {HTMLElement} main 
 * @param {HTMLElement} userPlantGrid 
 * @param {...HTMLElement} elements 
 */
const backToDashboardHandler = (main, userPlantGrid, ...elements) => {
  removeChildren(main, ...elements)
  
  const displayType = 'grid';
  showElements(displayType, userPlantGrid)

  resetDomElements();
}