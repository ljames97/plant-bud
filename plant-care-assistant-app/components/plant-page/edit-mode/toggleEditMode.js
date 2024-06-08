import { appendChildren, clearSection, createElement } from "../../global";
import { editMode, saveMode } from "./editSaveMode";

/**
 * Toggle edit or save mode.
 * @param {Object} plant 
 * @param {HTMLElement} editBtn
 * @param {Object} elements
 * @param {string} sectionClass
 * @param {Function} sectionRender
 */
export const toggleEditMode = (plant, editBtn, elements, sectionClass, sectionRender) => {
  const isEditMode = editBtn.textContent === 'Edit';

  if (isEditMode) {
    editMode(plant, editBtn, elements, sectionClass, sectionRender);
  } else {
    saveMode(plant, editBtn, elements);
  }
}

/**
 * Change plant information into editable input fields. 
 * @param {Object} plant 
 * @param {Object} elements 
 */
export const toggleEditFields = (plant, elements) => {
  clearSection(elements.plantTitle, 'PLANT_PAGE');
  clearSection(elements.plantDescription, 'PLANT_PAGE');

  const titleInput = createElement({tagName: 'input', classEl: ['edit-plant-title'], placeholder: plant.name});
  const descriptionInput = createElement({tagName: 'textarea', classEl: ['edit-plant-notes'], value: plant.description});

  appendChildren(elements.plantTitle, titleInput);
  appendChildren(elements.plantDescription, descriptionInput);
}