
// plant-page.js

// TODO:
// - local storage
// - cut down large functions
// - (plant requirements)
// - (store plant elements in plantLogManager so dont have to keep recreating them)
// - (css/UI considerations for the plant search. eg. perhaps a modal for the search instead of cancel button + animations)

import { domElements, createElement, dynamicPlantElements, resetDomElements } from "./domManipulation";
import { appendChildren, removeChildren, showElements } from "./utility";
import { localEventManager, imageChangeHandler } from "./eventHandling";
import { plantLog, addPlantToGrid } from "./plantLog";

/**
 * Render plant details on screen
 * @param {Object} plant 
 * @param {HTMLElement} userPlantGrid 
 */
export const renderPlantDetails = (plant, userPlantGrid) => {
  const { mainSection } = domElements;
  const subHeader = createElement({tagName: 'div', classEl: 'sub-header'});
  const backToDashboard = createElement({tagName: 'p', textContent: '← back to dashboard'});
  const editPlantDetailsBtn = createElement({tagName: 'button', textContent: 'Edit'});
  
  // elements could be stored in a manager function instead of beiong created again (these are same elements as in the plant grid)
  const { plantTitle, plantImageContainer, plantImage, plantDate, plantNotes } = dynamicPlantElements;
  plantTitle.textContent = plant.name;
  plantDate.textContent = plant.dateAdded;
  plantNotes.textContent = plant.notes;
  plantImage.src = plant.image;

  appendChildren(plantImageContainer, plantImage);
  appendChildren(subHeader, backToDashboard, editPlantDetailsBtn);

  appendChildren(mainSection, subHeader, plantTitle, plantDate, plantImageContainer, plantNotes);

  localEventManager.addEventListener(editPlantDetailsBtn, 'click', () => 
    toggleEditMode(plant, editPlantDetailsBtn, {plantTitle, plantDate, plantNotes, plantImageContainer, plantImage}))
  localEventManager.addEventListener(backToDashboard, 'click', () => {
    backToDashboardHandler(mainSection, userPlantGrid, subHeader, plantTitle, plantDate, plantImageContainer, plantNotes);
  })

  // add watering scheduele and other requirements (soil, light etc)
}

/**
 * Toggle edit mode to edit plant details including title, image, date and notes
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
    elements.plantNotes.innerHTML = `<textarea class="edit-plant-notes">${plant.notes}</textarea>`;

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
    const updatedNotes = document.querySelector('.edit-plant-notes').value;
    // const updatedImageUrl = document.querySelector('edit-plant-image').value;

    plant.name = updatedName;
    plant.dateAdded = updatedDate;
    plant.notes = updatedNotes;
    // plant.imageDataUrl = updatedImageUrl;

    plantLog.updatePlantInfo(plant);
    refreshPlantGrid();

    elements.plantTitle.textContent = updatedName;
    elements.plantDate.textContent = updatedDate;
    elements.plantNotes.textContent = updatedNotes;

    const imageInput = document.querySelector('.edit-plant-image');
    if (imageInput) {
      imageInput.remove();
    }
  }
}

/**
 * Refresh plant grid by removing existing inner html and updating the userPlantLog
 */
const refreshPlantGrid = () => {
  const { userPlantGrid } = domElements;
  userPlantGrid.innerHTML = '';

  plantLog.userPlantLog.forEach(plant => {
    addPlantToGrid(plant);
  })
}

/**
 * Remove plant page and return to dashboard (plantGrid)
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