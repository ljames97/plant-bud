// tagEventHandlers.js

/**
 * Event handler logic for managing tags within the plant log section of the application.
*/

import { updatePlantInFirebase } from "../../../config";
import { createElement, removeModal, setUpModal } from "../../global";
import { localEventManager } from "../../global";
import { appendChildren, removeItemFromArray } from "../../global";
import { resetPlantGrid } from "../dom-utils";
import { plantLog } from "../plantLogMain";

/**
 * Sets up event listeners for tag buttons. Handles deleting or updating the tag button.
 * @param {HTMLElement} deleteBtn 
 * @param {HTMLElement} updateBtn 
 * @param {HTMLElement} newTag 
 * @param {Object} plant 
 * @param {HTMLElement} editTagModal 
 * @param {HTMLElement} editTagInput 
 * @param {HTMLElement} errorMessage 
 */
export const setUpTagButtonListeners = (deleteBtn, updateBtn, newTag, plant, editTagModal, editTagInput, errorMessage) => {
  localEventManager.addEventListener(deleteBtn, 'click', () => {
    deleteTagHandler(newTag, plant, editTagModal);
  });

  localEventManager.addEventListener(updateBtn, 'click', () => {
    updateTagHandler(newTag, plant, editTagModal, editTagInput, errorMessage);
  });
}

/**
 * Handles the deletion of a tag from a plant.
 * @param {HTMLElement} newTag 
 * @param {Object} plant 
 * @param {HTMLElement} editTaskModal 
 */
const deleteTagHandler = async (newTag, plant, editTaskModal) => {
  const foundTag = plant.tags.find(tag => tag.description === newTag.textContent);
  plant.tags = removeItemFromArray(plant.tags, foundTag.id);
  removeModal(editTaskModal, 'PLANT_LOG');
  resetPlantGrid(plantLog.getUserPlantLog());

  await updatePlantInFirebase(plant.firestoreId, plant, 'plants');
}

/**
 * Handles the editing of a tag, creating a modal for updating or deleting the tag.
 * @param {HTMLElement} newTag 
 * @param {Object} plant 
 */
export const editTagHandler = (newTag, plant) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const editTagModal = createElement({tagName: 'div', classEl: ['new-modal']});
  const errorMessage = createElement({tagName: 'p', textContent: 'Tag name needs to be max 10 letters', classEl: ['modal-error-message']});
  const editTagInput = createElement({tagName: 'input', placeholder: newTag.textContent, classEl: ['new-input']});
  const editTagButtons = createElement({tagName: 'div', classEl: ['edit-tag-buttons']});
  const deleteBtn = createElement({tagName: 'button', textContent: 'Delete', classEl: ['delete-tag-btn']});
  const updateBtn = createElement({tagName: 'button', textContent: 'Update', classEl: ['update-tag-btn', 'submit-btn']});

  setUpModal(editTagModal, null, 'PLANT_LOG');

  appendChildren(editTagButtons, deleteBtn, updateBtn);
  appendChildren(editTagModal, errorMessage, editTagInput, editTagButtons);
  appendChildren(modalOverlay, editTagModal);

  setUpTagButtonListeners(deleteBtn, updateBtn, newTag, plant, editTagModal, editTagInput, errorMessage);
}

/**
 * Handles updating the description of a tag.
 * @param {HTMLElement} newTag 
 * @param {Object} plant 
 * @param {HTMLElement} editTagModal 
 * @param {HTMLElement} editTagInput 
 * @param {HTMLElement} errorMessage 
 * @returns 
 */
const updateTagHandler = async (newTag, plant, editTagModal, editTagInput, errorMessage) => {
  if (editTagInput.value === '') {
    return;
  }

  if (editTagInput.value.length > 10) {
    errorMessage.style.display = 'block';
    return;
  }

  const foundTag = plant.tags.find(tag => tag.description === newTag.textContent);
  foundTag.description = editTagInput.value;
  removeModal(editTagModal, 'PLANT_LOG');
  resetPlantGrid(plantLog.getUserPlantLog());

  await updatePlantInFirebase(plant.firestoreId, plant, 'plants');
}

/**
 * Displays a modal for adding a new tag to a plant.
 * @param {Object} plant 
 */
export const addNewTagHandler = (plant) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const menuContainer = document.querySelector('.drop-menu-container');
  const newTagModal = createElement({tagName: 'div', classEl: ['new-modal']});
  const errorMessage = createElement({tagName: 'p', textContent: 'Tag name needs to be max 10 letters', classEl: ['modal-error-message']});
  const newTagInput = createElement({tagName: 'input', placeholder: 'e.g. New, Flowering', classEl: ['new-input']});
  const submitBtn = createElement({tagName: 'button', textContent: 'Add tag', classEl: ['submit-btn']});
  const cancelBtn = createElement({tagName: 'p', textContent: 'X', classEl: ['cancel-btn']});

  setUpModal(newTagModal, menuContainer, 'PLANT_LOG');

  appendChildren(newTagModal, errorMessage, cancelBtn, newTagInput, submitBtn);
  appendChildren(modalOverlay, newTagModal);

  localEventManager.addEventListener(submitBtn, 'click', () => {
    submitTagHandler(plant, newTagInput.value, newTagModal, errorMessage);
  }, 'PLANT_LOG');
}

/**
 * Handles the submission of a new tag for a plant.
 * @param {Object} plant 
 * @param {HTMLElement} newTagInput 
 * @param {HTMLElement} newTagModal 
 * @param {HTMLElement} errorMessage 
 */
const submitTagHandler = async (plant, newTagInput, newTagModal, errorMessage) => {
  if (newTagInput === '') {
    return;
  }

  if (newTagInput.length > 10) {
    errorMessage.style.display = 'block';
    return;
  }

  removeModal(newTagModal, 'PLANT_LOG');

  if (!plant.tags.some(tag => tag.description === newTagInput)) {
    const newTag = {
      id: Date.now(),
      description: newTagInput,
    }
    plant.tags.push(newTag);
  }

  resetPlantGrid(plantLog.getUserPlantLog());
  await updatePlantInFirebase(plant.firestoreId, plant, 'plants');
}

