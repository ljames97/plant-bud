// editModeEventHandlers.js

import { plantLog, renderMyPlants } from "../../plant-log";
import { clearSection, createElement, removeModal, resetSection, setUpModal } from "../../global/dom-utils";
import { imageChangeHandler, localEventManager } from "../../global/event-handlers";
import { renderPlantDetails } from "../plantPageMain";
import { deleteImageFromFirebase, uploadImageToFirebase } from "../../../config";
import { appendChildren } from "../../global/utils";
import { updatePlant } from "../../global/utils/gobalUtility";


/**
 * Delete the plant from userPlantLog and reset the My Plants section.
 * @param {Object} plant 
 */
export const deletePlantBtnHandler = (plant) => {
  plantLog.deletePlantFromLog(plant);
  resetSection('plant-log', renderMyPlants, 'ADD_PLANT');
}

/**
 * Creates and appends the areYouSureModal to the DOM.
 * @returns modal and the yes/no buttons.
 */
export const createAreYouSureModal = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const areYouSureModal = createElement({tagName: 'div', classEl: ['are-you-sure-modal'], id: 'are-you-sure-modal'});
  const modalText = createElement({tagName: 'p', textContent: 'Are you sure?', classEl: ['modal-text']});
  const buttonContainer = createElement({tagName: 'div', classEl: ['are-you-sure-button-container']});
  const yesBtn = createElement({tagName: 'button', textContent: 'Yes', classEl: ['are-you-sure-button'], id: 'yes-btn'});
  const noBtn = createElement({tagName: 'button', textContent: 'No', classEl: ['are-you-sure-button'], id: 'no-btn'});

  appendChildren(buttonContainer, yesBtn, noBtn);
  appendChildren(areYouSureModal, modalText, buttonContainer);
  appendChildren(modalOverlay, areYouSureModal);

  setUpModal(areYouSureModal, 'PLANT_PAGE');

  return { areYouSureModal, yesBtn, noBtn };
}

/**
 * Renders areYouSureModal and handles yes/no click.
 * @param {Object} plant 
 */
export const areYouSureDelete = (plant) => {
  const { areYouSureModal, yesBtn, noBtn } = createAreYouSureModal();

  localEventManager.addEventListener(yesBtn, 'click', () => {
    removeModal(areYouSureModal, 'PLANT_PAGE');
    plantLog.deletePlantFromLog(plant);
    resetSection('plant-log', renderMyPlants, 'ADD_PLANT');
  }, 'PLANT_PAGE');

  localEventManager.addEventListener(noBtn, 'click', () => {
    removeModal(areYouSureModal, 'PLANT_PAGE');
  }, 'PLANT_PAGE');
}

/**
 * Renders areYouSureModal and handles yes/no click.
 * @param {Object} plant 
 * @param {Object} elements 
 * @param {String} sectionClass 
 * @param {Function} sectionRender 
 */
export const areYouSureReset = (plant, elements, sectionClass, sectionRender) => {
  const { areYouSureModal, yesBtn, noBtn } = createAreYouSureModal();

  localEventManager.addEventListener(yesBtn, 'click', () => {
    removeModal(areYouSureModal, 'PLANT_PAGE');
    resetPlantDetailsBtnHandler(plant, elements, sectionClass, sectionRender);
  }, 'PLANT_PAGE');

  localEventManager.addEventListener(noBtn, 'click', () => {
    removeModal(areYouSureModal, 'PLANT_PAGE');
  }, 'PLANT_PAGE');
}

/**
 * Reset plant details to their initial state before any user edits. 
 * @param {Object} plant 
 * @param {Object} elements 
 * @param {String} sectionClass 
 * @param {Function} sectionRender 
 */
export const resetPlantDetailsBtnHandler = async (plant, elements, sectionClass, sectionRender) => {
  const originalPlant = plantLog.getOriginalPlant(plant);

  plant.name = originalPlant.name;
  plant.dateAdded = originalPlant.dateAdded;
  plant.description = originalPlant.description;
  await deleteImageFromFirebase(plant.image, 'plants');
  plant.image = originalPlant.image;
  updatePlant(plant);

  clearSection(elements.sectionContainer, 'PLANT_PAGE');
  renderPlantDetails(plant, elements.sectionContainer, '← back to My Plants', sectionClass, sectionRender);
}

/**
 * Sets up the delete plant and reset plant details buttons. 
 * @param {Object} plant 
 * @param {Object} elements 
 * @param {String} sectionClass 
 * @param {Function} sectionRender 
 * @param {HTMLElement} deletePlantBtn 
 * @param {HTMLElement} resetPlantDetailsBtn 
 */
export const setUpDeleteResetBtns = (plant, elements, sectionClass, sectionRender, deletePlantBtn, resetPlantDetailsBtn) => {
  localEventManager.addEventListener(deletePlantBtn, 'click', () => {
    areYouSureDelete(plant);
  }, 'PLANT_PAGE');
  localEventManager.addEventListener(resetPlantDetailsBtn, 'click', () => {
    areYouSureReset(plant, elements, sectionClass, sectionRender);
  }, 'PLANT_PAGE');
}

/**
 * Set up user image input. User can choose a file from their device to uplaod. 
 * @param {HTMLElement} imageInput 
 * @param {Object} elements 
 * @param {String} sectionClass 
 * @param {Object} plant 
 */
export const setUpImageInput = (imageInput, elements, sectionClass, plant) => {
  imageInput.type = 'file';
  imageInput.classList.add('edit-plant-image');
  imageInput.accept = 'image/*';
  elements.plantImageContainer.insertBefore(imageInput, elements.plantImageContainer.firstChild);

  localEventManager.addEventListener(imageInput, 'change', async (event) => {
    const isGuest = sessionStorage.getItem("guestLogin");

    imageChangeHandler(event, async (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        elements.plantImage.src = e.target.result;
        if (isGuest) {
          plant.image = e.target.result;
          updatePlant(plant);
        }
      }
      reader.readAsDataURL(file);

      try {
        await deleteImageFromFirebase(plant.image);
        const imageUrl = await uploadImageToFirebase(file, 'plants');
        plant.image = imageUrl;
      } catch (error) {
        console.error("Error uploading image:", error);
      }

    });
  }, `PLANT_PAGE_${sectionClass}`);
}