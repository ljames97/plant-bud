// plantPageMain.js
/**
 * Main file for the Plant Page module, centralising the module's functionality.
 * For viewing and editing plant details and plant requirements (watering scheduele, light etc).
 */

import { clearSection, createElement, resetSection } from "../utils/globalDomManipulation";
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren, findItemInArray, getDate, hideElements, removeChildren, showElements } from "../utils/gobalUtility";
import { createDynamicPlantElements, createIcon, createSectionBtn, createTagButton, removeImageInput } from "./plantPageDomManipulation";

import { plantLog } from "../plant-log/plantLogMain";
import { setUpDeleteResetBtns, setUpImageInput } from "./plantPageEventHandling";
import { plantDirectory } from "../utils/data";
import { renderQuizResults } from "../plant-quiz/plantQuizMain";

/**
 * Render plant details on screen.
 * @param {Object} plant 
 * @param {HTMLElement} sectionContainer 
 * @param {string} backButtonText 
 * @param {string} sectionClass
 * @param {Function} sectionRender
 */
export const renderPlantDetails = (plant, sectionContainer, backButtonText, sectionClass, sectionRender) => {
  const subHeader = createElement({tagName: 'div', classEl: ['sub-header']});
  const permanentDeleteBtn = createElement({tagName: 'button', textContent: 'Permanently Delete', classEl: ['permanent-delete-btn']});
  const backToDashboard = createElement({tagName: 'div', classEl: ['back-button']});
  const backButtonImg = createElement({tagName: 'img'});
  backButtonImg.src = '../../public/back-button.png';
  let sectionBtn = '';

  sectionBtn = createSectionBtn(backButtonText, sectionBtn, plant);
  sectionBtn.classList.add('section-button');
  
  const { headerContainer, plantTitle, navContainer, mainSection, aboutSection, plantImageContainer, plantImage, plantDescriptionContainer, plantDescription } = createDynamicPlantElements(plant, sectionBtn, sectionClass);
  plantTitle.textContent = plant.name;
  plantDescription.textContent = plant.description;
  plantImage.src = plant.image;

  const tagContainer = createTags(plant);

  appendChildren(backToDashboard, backButtonImg);
  appendChildren(headerContainer, backToDashboard, plantTitle, sectionBtn);
  appendChildren(plantImageContainer, plantImage);
  appendChildren(aboutSection, plantImageContainer, tagContainer, plantDescriptionContainer);
  appendChildren(sectionContainer, subHeader, headerContainer, navContainer, mainSection);

  window.scrollTo(0, 0);

  // conditional logic for edit button, add plant button or unarchive button
  if (sectionBtn.classList.contains('edit-btn')) {
    localEventManager.addEventListener(sectionBtn, 'click', () => 
      toggleEditMode(plant, sectionBtn, {plantTitle, plantDescription, plantImageContainer, plantImage, sectionContainer}, sectionClass, sectionRender), `PLANT_PAGE_${sectionClass}`)
  } 
  
  if (sectionBtn.textContent === 'Add plant' || sectionBtn.textContent === '') {
    const tasksBtn = document.getElementById('task-nav');
    const requirmentBtn = document.querySelector('.add-requirement-btn');
    tasksBtn.style.display = 'none';
    requirmentBtn.style.display = 'none';
    localEventManager.addEventListener(sectionBtn, 'click', () => {
      addToPlantsHandler(sectionBtn, plant);
    }, 'PLANT_PAGE');
  } 
  
  if (sectionBtn.textContent === 'Unarchive') {
    appendChildren(subHeader, permanentDeleteBtn);
    localEventManager.addEventListener(sectionBtn, 'click', () => {
      unarchiveBtnHandler(plant, sectionClass, sectionRender);
    }, 'PLANT_PAGE');
    localEventManager.addEventListener(permanentDeleteBtn, 'click', () => {
      permanentDeleteBtnHandler(plant, sectionClass, sectionRender);
    }, 'PLANT_PAGE');
  }

  localEventManager.addEventListener(backToDashboard, 'click', () => {
    const plantInfoContainer = document.querySelector('.plant-info');
    if (plantInfoContainer && plantInfoContainer.quizResult) {
      const quizContainer = document.querySelector('.quiz-container');
      const resultContainers = document.querySelectorAll('.result-container');
      plantInfoContainer.remove();
      resultContainers.forEach(result => result.remove());
      showElements('flex', quizContainer);
      renderQuizResults(quizContainer.plantResults);
      return;
    } else if (plantInfoContainer && !plantInfoContainer.quizResult) {
      plantInfoContainer.remove();
    }

    resetSection(sectionClass, sectionRender, `PLANT_PAGE_${sectionClass}`);
  }, `PLANT_PAGE_${sectionClass}`);
}

const createTags = (plant) => {
  let skillTag, flowerTag, outdoorTag, effortTag

  if (plant.skill) {
    skillTag = createTagButton(plant.skill[0]);
  }
  
  if (plant.florwering && plant.florwering.includes('Yes')) {
    flowerTag = createTagButton('Flowering');
  }

  if (plant.transferToOutdoors && plant.transferToOutdoors.includes('Yes')) {
    outdoorTag = createTagButton('+ Outdoors');
  }

  if (plant.lowEffort && plant.lowEffort.includes('No')) {
    effortTag = createTagButton('Low effort');
  }

  const tagContainer = createElement({tagName: 'div', classEl: ['tag-container']});
  appendChildren(tagContainer, skillTag, flowerTag, outdoorTag, effortTag)

  return tagContainer;
}

/**
 * Remove the plant from the deleted plants log and render the deleted plants page.
 * @param {Object} plant 
 */
const unarchiveBtnHandler = (plant, sectionClass, sectionRender) => {
  plantLog.removeFromDeletedPlants(plant);
  resetSection(sectionClass, sectionRender, `PLANT_PAGE_${sectionClass}`);
}

/**
 * Add the plant to My Plants and change the button to text. 
 * @param {HTMLElement} sectionBtn 
 * @param {Object} plant 
 */
const addToPlantsHandler = (sectionBtn, plant) => {
  copyToMyPlants(plant);
  replaceButton(sectionBtn, plant);
}

/**
 * Update the 'isAdded' for the plant if it was originally added from the plant directory.
 * Remove the plant from all plant log arrays found in the plantLogManager.
 * @param {Object} plant 
 */
const permanentDeleteBtnHandler = (plant, sectionClass, sectionRender) => {
  permanentDeletePlant(plant);
  resetSection(sectionClass, sectionRender, `PLANT_PAGE_${sectionClass}`)
}

export const permanentDeletePlant = (plant) => {
  const directoryPlant = findItemInArray(plantDirectory, plant.id);
  if (directoryPlant) {
    directoryPlant.isAdded = false;
  }
  plantLog.permanentDelete(plant);
}

/**
 * Replace the 'Add to plants' button with 'Added to My Plants' message for plants that are already added to the users plant log.
 * @param {HTMLElement} button 
 * @param {String} text 
 * @param {Object} plant 
 */
const replaceButton = (button, plant) => {
  const newIcon = createIcon();
  button.parentNode.replaceChild(newIcon, button);
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
    flowering: plant.flowering,
    transferToOutdoors: plant.transferToOutdoors,
    waterSchedule: plant.waterSchedule,
    tempLight: plant.tempLight,
    lowEffort: plant.lowEffort,
    image: plant.image,
    id: plant.id,
    requirements: plant.requirements,
    tasks: plant.tasks,
    tags: plant.tags
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

  const imageInput = createElement({tagName: 'input', classEl: ['file-input'], id: 'file-upload', type: 'file'});
  const label = createElement({tagName: 'label', classEl: ['file-upload-label'], fr: 'file-upload'});
  const imageInputImg = createElement({tagName: 'img', classEl: ['image-input-img']});
  const imageContainer = document.querySelector('.plant-page-image-container');
  imageInputImg.src = '../../public/footer-nav-icons/add.png';

  appendChildren(label, imageInputImg, imageInput);
  appendChildren(imageContainer, label);
  setUpImageInput(imageInput, elements, sectionClass, plant);

  const buttonContainer = createElement({tagName: 'div', classEl: ['edit-button-container']});
  const deletePlantBtn = createElement({tagName: 'button', textContent: 'Delete Plant', classEl: ['delete-plant-btn']});
  const resetPlantDetailsBtn = createElement({tagName: 'button', textContent: 'Reset plant details', classEl: ['reset-plant-btn']});
  const aboutSection = document.querySelector('.about-section')
  appendChildren(buttonContainer, resetPlantDetailsBtn, deletePlantBtn)
  appendChildren(aboutSection, buttonContainer);

  setUpDeleteResetBtns(plant, elements, sectionClass, sectionRender, deletePlantBtn, resetPlantDetailsBtn);
}

/**
 * Change plant information into editable input fields. 
 * @param {Object} plant 
 * @param {Object} elements 
 */
const toggleEditFields = (plant, elements) => {
  clearSection(elements.plantTitle, 'PLANT_PAGE');
  clearSection(elements.plantDescription, 'PLANT_PAGE');

  const titleInput = createElement({tagName: 'input', classEl: ['edit-plant-title'], placeholder: plant.name});
  const descriptionInput = createElement({tagName: 'textarea', classEl: ['edit-plant-notes'], value: plant.description});

  appendChildren(elements.plantTitle, titleInput);
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

  let updatedName = document.querySelector('.edit-plant-title').value;
  let updatedDescription = document.querySelector('.edit-plant-notes').value;

  if (updatedName !== '') {
    plant.name = updatedName;
  } else {
    updatedName = plant.name;
  }

  if (updatedDescription !== '') {
    plant.description = updatedDescription;
  } else {
    updatedDescription = plant.description
  }

  const buttonContainer = document.querySelector('.edit-button-container');
  const aboutSection = document.querySelector('.about-section')
  removeChildren(aboutSection, buttonContainer);

  plantLog.updatePlantInfo(plant);

  elements.plantTitle.textContent = updatedName;
  elements.plantDescription.textContent = updatedDescription;

  removeImageInput();
}

export const renderPlantSection = (activeSection, editBtnState, ...inactiveSections) => {
  const editBtn = document.querySelector('.edit-btn');
  hideElements(...inactiveSections);
  showElements('flex', activeSection);

  if (editBtnState === false) {
    hideElements(editBtn);
  } else {
    showElements('block', editBtn);
  }

}
