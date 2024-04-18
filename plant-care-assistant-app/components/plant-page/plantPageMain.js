// plantPageMain.js
/**
 * Main file for the Plant Page module, centralising the module's functionality.
 * For viewing and editing plant details and plant requirements (watering scheduele, light etc).
 */

import { clearSection, createElement, resetSection } from "../utils/globalDomManipulation";
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren, findItemInArray, getDate, hideElements, removeChildren, showElements } from "../utils/gobalUtility";
import { createDynamicPlantElements, createRequirements, createSectionBtn, createTagButton, removeImageInput } from "./plantPageDomManipulation";

import { plantLog, renderDeletedPlants } from "../plant-log/plantLogMain";
import { setUpDeleteResetBtns, setUpImageInput } from "./plantPageEventHandling";
import { plantDirectory } from "../utils/data";

/**
 * Render plant details on screen.
 * @param {Object} plant 
 * @param {HTMLElement} sectionContainer 
 * @param {string} backButtonText 
 * @param {string} sectionClass
 * @param {Function} sectionRender
 */
export const renderPlantDetails = (plant, sectionContainer, backButtonText, sectionClass, sectionRender) => {
  const subHeader = createElement({tagName: 'div', classEl: 'sub-header'});
  const backToDashboard = createElement({tagName: 'p', textContent: backButtonText});
  const permanentDeleteBtn = createElement({tagName: 'button', textContent: 'Permanently Delete', classEl: 'permanent-delete-btn'});
  let sectionBtn = '';

  sectionBtn = createSectionBtn(backButtonText, sectionBtn, plant);
  sectionBtn.classList.add('section-button');
  
  const { headerContainer, plantTitle, navContainer, mainSection, aboutSection, plantImageContainer, plantImage, plantDate, plantDescriptionContainer, plantDescription } = createDynamicPlantElements(plant, sectionClass);
  plantTitle.textContent = plant.name;
  plantDate.textContent = plant.dateAdded;
  plantDescription.textContent = plant.description;
  plantImage.src = plant.image;

  const tagContainer = createTags(plant);

  appendChildren(subHeader, backToDashboard);
  appendChildren(headerContainer, plantTitle, sectionBtn);
  appendChildren(plantImageContainer, plantImage);
  appendChildren(aboutSection, plantImageContainer, tagContainer, plantDescriptionContainer);
  appendChildren(sectionContainer, subHeader, headerContainer, navContainer, mainSection, plantDate);

  // conditional logic for edit button, add plant button or unarchive button
  if (sectionBtn.classList.contains('edit-btn')) {
    localEventManager.addEventListener(sectionBtn, 'click', () => 
      toggleEditMode(plant, sectionBtn, {plantTitle, plantDate, plantDescription, plantImageContainer, plantImage, sectionContainer}, sectionClass, sectionRender), `PLANT_PAGE_${sectionClass}`)
  } 
  
  if (sectionBtn.textContent === 'Add to My Plants') {
    localEventManager.addEventListener(sectionBtn, 'click', () => {
      addToPlantsHandler(sectionBtn, plant);
    }, 'PLANT_PAGE');
  } 
  
  if (sectionBtn.textContent === 'Unarchive') {
    appendChildren(subHeader, permanentDeleteBtn);
    localEventManager.addEventListener(sectionBtn, 'click', () => {
      unarchiveBtnHandler(plant);
    }, 'PLANT_PAGE');
    localEventManager.addEventListener(permanentDeleteBtn, 'click', () => {
      permanentDeleteBtnHandler(plant);
    }, 'PLANT_PAGE');
  }

  localEventManager.addEventListener(backToDashboard, 'click', () => {
    resetSection(sectionClass, sectionRender, `PLANT_PAGE_${sectionClass}`);
  }, `PLANT_PAGE_${sectionClass}`);
}

const createTags = (plant) => {
  let flowerTag, outdoorTag, effortTag

  const skillTag = createTagButton(plant.skill[0]);
  
  if (plant.florwering && plant.florwering.includes('Yes')) {
    flowerTag = createTagButton('Flowering');
  }

  if (plant.transferToOutdoors && plant.transferToOutdoors.includes('Yes')) {
    outdoorTag = createTagButton('+ Outdoors');
  }

  if (plant.lowEffort && plant.lowEffort.includes('No')) {
    effortTag = createTagButton('Low effort');
  }

  const tagContainer = createElement({tagName: 'div', classEl: 'tag-container'});
  appendChildren(tagContainer, skillTag, flowerTag, outdoorTag, effortTag)

  return tagContainer;
}

/**
 * Remove the plant from the deleted plants log and render the deleted plants page.
 * @param {Object} plant 
 */
const unarchiveBtnHandler = (plant) => {
  plantLog.removeFromDeletedPlants(plant);
  renderDeletedPlants();
}

/**
 * Add the plant to My Plants and change the button to text. 
 * @param {HTMLElement} sectionBtn 
 * @param {Object} plant 
 */
const addToPlantsHandler = (sectionBtn, plant) => {
  copyToMyPlants(plant);
  replaceButton(sectionBtn, 'Added to My Plants', plant);
}

/**
 * Update the 'isAdded' for the plant if it was originally added from the plant directory.
 * Remove the plant from all plant log arrays found in the plantLogManager.
 * @param {Object} plant 
 */
const permanentDeleteBtnHandler = (plant) => {
  const directoryPlant = findItemInArray(plantDirectory, plant.id);
  if (directoryPlant) {
    directoryPlant.isAdded = false;
  }
  plantLog.permanentDelete(plant);
  renderDeletedPlants();
}

/**
 * Replace the 'Add to plants' button with 'Added to My Plants' message for plants that are already added to the users plant log.
 * @param {HTMLElement} button 
 * @param {String} text 
 * @param {Object} plant 
 */
const replaceButton = (button, text, plant) => {
  const newText = createElement({tagName: 'p', textContent: text});
  button.parentNode.replaceChild(newText, button);
  plant.isAdded = true;
}

/**
 * Make a copy of the plant and upload it to the userPlantLog.
 * @param {Object} plant 
 */
export const copyToMyPlants = (plant) => {
  const newPlant = {
    name: plant.name,
    dateAdded: getDate(),
    description: plant.description,
    shortDescription: plant.shortDescription,
    skill: plant.skill,
    image: plant.image,
    id: plant.id
  };

  plantLog.addToUserPlantLog(newPlant);
}

/**
 * Toggle edit or save mode.
 * @param {Object} plant 
 * @param {HTMLElement} editBtn
 * @param {Object} elements
 * @param {string} sectionClass
 * @param {Function} sectionRender
 */
const toggleEditMode = (plant, editBtn, elements, sectionClass, sectionRender) => {
  const isEditMode = editBtn.textContent === 'Edit';

  if (isEditMode) {
    editMode(plant, editBtn, elements, sectionClass, sectionRender);
  } else {
    saveMode(plant, editBtn, elements);
  }
}

/**
 * To edit plant details including title, image, date and description.
 * @param {Object} plant 
 * @param {HTMLElement} editBtn 
 * @param {Object} elements 
 * @param {string} sectionClass 
 * @param {Function} sectionRender 
 */
const editMode = (plant, editBtn, elements, sectionClass, sectionRender) => {
  editBtn.textContent = 'Save';
  toggleEditFields(plant, elements);

  const imageInput = document.createElement('input');
  setUpImageInput(imageInput, elements, sectionClass, plant);

  const deletePlantBtn = createElement({tagName: 'button', textContent: 'Delete Plant', classEl: 'delete-plant-btn'});
  const resetPlantDetailsBtn = createElement({tagName: 'button', textContent: 'Reset plant details', classEl: 'reset-plant-btn'});
  appendChildren(elements.sectionContainer, deletePlantBtn, resetPlantDetailsBtn);

  setUpDeleteResetBtns(plant, elements, sectionClass, sectionRender, deletePlantBtn, resetPlantDetailsBtn);
}

/**
 * Change plant information into editable input fields. 
 * @param {Object} plant 
 * @param {Object} elements 
 */
const toggleEditFields = (plant, elements) => {
  clearSection(elements.plantTitle, 'PLANT_PAGE');
  clearSection(elements.plantDate, 'PLANT_PAGE');
  clearSection(elements.plantDescription, 'PLANT_PAGE');

  const titleInput = createElement({tagName: 'input', classEl: 'edit-plant-title', value: plant.name});
  const dateInput = createElement({tagName: 'input', classEl: 'edit-plant-date', value: plant.dateAdded});
  const descriptionInput = createElement({tagName: 'textarea', classEl: 'edit-plant-notes', value: plant.description});

  appendChildren(elements.plantTitle, titleInput);
  appendChildren(elements.plantDate, dateInput);
  appendChildren(elements.plantDescription, descriptionInput);
}

/**
 * To save edited plant details to the userPlantLog and render the changes on screen.
 * @param {Object} plant 
 * @param {HTMLElement} editBtn 
 * @param {Object} elements 
 */
const saveMode = (plant, editBtn, elements) => {
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

export const renderPlantSection = (activeSection, ...inactiveSections) => {
  hideElements(...inactiveSections);
  showElements('block', activeSection);
}