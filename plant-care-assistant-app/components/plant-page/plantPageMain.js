// plantPageMain.js
/**
 * For viewing and editing plant details and plant requirements (watering scheduele, light etc).
 */

import { clearSection, createElement } from "../utils/globalDomManipulation";
import { localEventManager, imageChangeHandler } from "../utils/globalEventHandling";
import { appendChildren, getDate, removeChildren } from "../utils/gobalUtility";
import { createDynamicPlantElements } from "./plantPageDomManipulation";

import { addPlantToGrid, plantLog, renderMyPlants } from "../plant-log/plantLogMain";

/**
 * Render plant details on screen
 * @param {Object} plant 
 * @param {HTMLElement} sectionContainer 
 * @param {HTMLElement} hiddenContainer 
 * @param {string} displayType 
 * @param {string} backButtonText 
 */
export const renderPlantDetails = (plant, sectionContainer, hiddenContainer, displayType, backButtonText, sectionClass, sectionRender, sectionEventRegistry) => {
  const subHeader = createElement({tagName: 'div', classEl: 'sub-header'});
  const backToDashboard = createElement({tagName: 'p', textContent: backButtonText});
  let sectionBtn = '';

  if (backButtonText === '← back to My Plants') {
    sectionBtn = createElement({tagName: 'button', textContent: 'Edit', classEl: 'edit-btn'});
  } else if (backButtonText === '← back to results' && !plant.isAdded || backButtonText === 'back to search' && !plant.isAdded) {
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
    toggleEditMode(plant, sectionBtn, {plantTitle, plantDate, plantDescription, plantImageContainer, plantImage, sectionContainer, hiddenContainer}, sectionClass, sectionRender), 'PLANT_PAGE')
  } else if (sectionBtn.classList.contains('add-to-plants-btn')) {
    localEventManager.addEventListener(sectionBtn, 'click', () => {
      copyToMyPlants(plant);
      replaceButton(sectionBtn, plant);
    }, 'PLANT_PAGE')
  }

  localEventManager.addEventListener(backToDashboard, 'click', () => {
    resetSection(sectionClass, sectionRender, `PLANT_PAGE_${sectionClass}`);
  }, `PLANT_PAGE_${sectionClass}`);

  // add watering scheduele and other requirements (soil, light etc)
}

/**
 * Replace the 'Add to plants' button with 'Added to My Plants' message for plants that are already added to the users plant log.
 * @param {HTMLElement} button 
 * @param {Object} plant 
 */
const replaceButton = (button, plant) => {
  const newText = createElement({tagName: 'p', textContent: 'Added to My Plants'});
  button.parentNode.replaceChild(newText, button);
  plant.isAdded = true;
}

export const copyToMyPlants = (plant) => {
  const newPlant = {
    name: plant.name,
    dateAdded: getDate(),
    description: plant.description,
    image: plant.image,
    id: plant.id
  };

  plantLog.addToUserPlantLog(newPlant);
  addPlantToGrid(newPlant);
}

/**
 * Toggle edit mode to edit plant details including title, image, date and notes.
 * @param {Object} plant 
 * @param {HTMLElement} editBtn 
 * @param {HTMLElement} elements 
 */
const toggleEditMode = (plant, editBtn, elements, sectionClass, sectionRender) => {
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

    const deletePlantBtn = createElement({tagName: 'button', textContent: 'Delete Plant', classEl: 'delete-plant-btn'});
    const resetPlantDetailsBtn = createElement({tagName: 'button', textContent: 'Reset plant details', classEl: 'reset-plant-btn'});
    appendChildren(elements.sectionContainer, deletePlantBtn, resetPlantDetailsBtn);

    localEventManager.addEventListener(deletePlantBtn, 'click', () => {
      deletePlantBtnHandler(plant);
    }, 'PLANT_PAGE');
    localEventManager.addEventListener(resetPlantDetailsBtn, 'click', () => {
      resetPlantDetailsBtnHandler(plant, elements, sectionClass, sectionRender);
    })

  } else {
    editBtn.textContent = 'Edit';

    const updatedName = document.querySelector('.edit-plant-title').value;
    const updatedDate = document.querySelector('.edit-plant-date').value;
    const updatedDescription = document.querySelector('.edit-plant-notes').value;

    plant.name = updatedName;
    plant.dateAdded = updatedDate;
    plant.description = updatedDescription;

    const deletePlantBtn = document.querySelector('.delete-plant-btn');
    const resetPlantDetailsBtn = document.querySelector('.reset-plant-btn');
    removeChildren(elements.sectionContainer, deletePlantBtn, resetPlantDetailsBtn);

    plantLog.updatePlantInfo(plant);

    elements.plantTitle.textContent = updatedName;
    elements.plantDate.textContent = updatedDate;
    elements.plantDescription.textContent = updatedDescription;

    removeImageInput();
  }
}

const deletePlantBtnHandler = (plant) => {
  plantLog.deletePlantFromLog(plant);
  resetSection('.plant-log', renderMyPlants, 'ADD_PLANT');
}

const resetPlantDetailsBtnHandler = (plant, elements, sectionClass, sectionRender) => {
  const originalPlant = plantLog.getOriginalPlant(plant);

  plant.name = originalPlant.name;
  plant.dateAdded = originalPlant.dateAdded;
  plant.description = originalPlant.description;
  plant.image = originalPlant.image;

  elements.sectionContainer.innerHTML = '';
  renderPlantDetails(plant, elements.sectionContainer, elements.hiddenContainer, 'grid', '← back to My Plants', sectionClass, sectionRender, 'PLANT_PAGE');
}

export const resetSection = (sectionClass, renderSection, eventRegistryName) => {
  const section = document.querySelector(sectionClass);
  clearSection(section, eventRegistryName);
  renderSection();
}

const removeImageInput = () => {
  const imageInput = document.querySelector('.edit-plant-image');
  if (imageInput) {
    imageInput.remove();
  }
}