// addPlantDomManipulation.js
/**
 * For stored dom elements, dynamic elements, and utility functions related to the dom. 
 */

import { createElement } from "../utils/globalDomManipulation";
import { appendChildren } from "../utils/gobalUtility";

/**
 * Creates form for user to upload plant manually
 * @returns user plant upload form
 */
export const createManualPlantForm = () => {
  const plantForm = createElement({tagName: 'form', classEl: 'manual-plant-form'});
  const name = createElement({tagName: 'input', placeholder: 'Plant name'});
  const dateAdded = createElement({tagName: 'input', placeholder: 'Date added'});
  const cancelBtn = createElement({tagName: 'button', textContent: 'Cancel', classEl: 'cancel-search-btn'});

  const plantPhoto = createElement({tagName: 'input', classEl: 'plant-photo-input'});
  plantPhoto.setAttribute('type', 'file');
  plantPhoto.setAttribute('accept', 'image/*');

  const submitBtn = createElement({tagName: 'button', textContent: 'Add My Plant'});
  // may add watering scheduele, similar plants etc.
  const description = createElement({tagName: 'textarea', placeholder: 'Description'})
  appendChildren(plantForm, name, dateAdded, plantPhoto, description, submitBtn);

  return { plantForm, name, dateAdded, plantPhoto, description, submitBtn, cancelBtn };
}