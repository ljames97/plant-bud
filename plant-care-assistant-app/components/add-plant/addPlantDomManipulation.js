// addPlantDomManipulation.js
/**
 * For static DOM elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { createElement } from "../utils/globalDomManipulation";
import { appendChildren } from "../utils/gobalUtility";

/**
 * Returns form elements for user to upload a plant with custom title, description, photo and requirements.
 * TODO: Add support for specifying a watering schedule, similar plants, plant requirements etc.
 *
 * @returns html elements for creating the plant upload form in the addPlantMain module.
 */
export const createManualPlantForm = () => {
  const backBtn = createElement({tagName: 'p', textContent: '← back to My Plants', classEl: 'back-button'});
  const plantForm = createElement({tagName: 'form', classEl: 'manual-plant-form'});
  const name = createElement({tagName: 'input', placeholder: 'Plant name'});
  const dateAdded = createElement({tagName: 'input', placeholder: 'Date added', type: 'date'});

  const plantPhoto = createElement({tagName: 'input', classEl: 'plant-photo-input'});
  plantPhoto.setAttribute('type', 'file');
  plantPhoto.setAttribute('accept', 'image/*');

  const submitBtn = createElement({tagName: 'button', textContent: 'Add My Plant'});
  const description = createElement({tagName: 'textarea', placeholder: 'Description'})
  appendChildren(plantForm, name, dateAdded, plantPhoto, description, submitBtn);

  return { plantForm, name, dateAdded, plantPhoto, description, submitBtn, backBtn };
}