
// plant-page.js
/**
 * For viewing and editing plant details and plant requirements (watering scheduele, light etc).
 */

import { createElement, dynamicPlantElements, resetDomElements, refreshPlantGrid, createDynamicPlantElements } from "./domManipulation";
import { appendChildren, removeChildren, showElements } from "./utility";
import { localEventManager, imageChangeHandler } from "./eventHandling";
import { addPlantToGrid, plantLog } from "./plantLog";

/**
 * Render plant details on screen
 * @param {Object} plant 
 * @param {HTMLElement} sectionContainer 
 * @param {HTMLElement} hiddenContainer 
 * @param {string} displayType 
 * @param {string} backButtonText 
 */
export const renderPlantDetails = (plant, sectionContainer, hiddenContainer, displayType, backButtonText) => {
  const subHeader = createElement({tagName: 'div', classEl: 'sub-header'});
  const backToDashboard = createElement({tagName: 'p', textContent: backButtonText});
  let sectionBtn = '';

  if (backButtonText === '← back to dashboard') {
    sectionBtn = createElement({tagName: 'button', textContent: 'Edit', classEl: 'edit-btn'});
  } else if (backButtonText === '← back to results' && !plant.isAdded) {
    sectionBtn = createElement({tagName: 'button', textContent: 'Add to My Plants', classEl: 'add-to-plants-btn'});
  } else {
    sectionBtn = createElement({tagName: 'p', textContent: 'Added to My Plants'})
  }
  
  const { plantTitle, plantImageContainer, plantImage, plantDate, plantDescription } = createDynamicPlantElements();
  plantTitle.textContent = plant.name;
  plantDate.textContent = plant.dateAdded;
  plantDescription.textContent = plant.description;
  plantImage.src = plant.image;

  appendChildren(plantImageContainer, plantImage);
  appendChildren(subHeader, backToDashboard, sectionBtn);


  appendChildren(sectionContainer, subHeader, plantTitle, plantDate, plantImageContainer, plantDescription);

  // conditional logic for edit button or add plant button depending on userplant vs result from plant quiz
  if (sectionBtn.classList.contains('edit-btn')) {
    localEventManager.addEventListener(sectionBtn, 'click', () => 
    toggleEditMode(plant, sectionBtn, {plantTitle, plantDate, plantDescription, plantImageContainer, plantImage}))
  } else if (sectionBtn.classList.contains('add-to-plants-btn')) {
    localEventManager.addEventListener(sectionBtn, 'click', () => {
      copyToMyPlants(plant);
      replaceButton(sectionBtn, plant);
    })
  }

  localEventManager.addEventListener(backToDashboard, 'click', () => {
    backToDashboardHandler(sectionContainer, hiddenContainer, displayType, subHeader, plantTitle, plantDate, plantImageContainer, plantDescription);
  })

  // add watering scheduele and other requirements (soil, light etc)
}

const replaceButton = (button, plant) => {
  const newText = createElement({tagName: 'p', textContent: 'Added to My Plants'});
  button.parentNode.replaceChild(newText, button);
  plant.isAdded = true;
}

/**
 * Add plant from quiz result or plant search to the plantLog and My Plants grid
 * @param {Object} plant 
 */
export const addToMyPlants = (plant) => {
  plantLog.addToUserPlantLog(plant);
  addPlantToGrid(plant);
}

export const copyToMyPlants = (plant) => {
  const newPlant = {
    name: plant.name,
    dateAdded: '',
    description: plant.description,
    image: plant.image,
    id: plant.id
  };

  addToMyPlants(newPlant);
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
 * @param {HTMLElement} mainSection 
 * @param {HTMLElement} hiddenContainer 
 * @param {...HTMLElement} elements 
 */
const backToDashboardHandler = (mainSection, hiddenContainer, displayType, ...elements) => {
  removeChildren(mainSection, ...elements)
  
  showElements(displayType, hiddenContainer)

  if (mainSection.classList.contains('plant-log')) {
    resetDomElements();
  }
}