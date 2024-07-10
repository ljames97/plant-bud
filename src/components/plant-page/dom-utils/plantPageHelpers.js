// plantPageDomUtils.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { hideElements, removeChildren, showElements } from "../../global/utils";
import { createIcon } from "../../global/dom-utils";

/**
 * Remove image input where users can upload image from their device.
 */
export const removeImageInput = () => {
  const imageInput = document.querySelector('.edit-plant-image');
  const label = document.querySelector('.file-upload-label');
  const imageContainer = document.querySelector('.plant-page-image-container');
  if (imageInput) {
    removeChildren(imageContainer, imageInput, label);
  }
}

/**
 * Replace the 'Add to plants' button with an icon to show that plant has been added to the users plant log.
 * @param {HTMLElement} button 
 * @param {Object} plant 
 */
export const replaceButton = (button, plant) => {
  const newIcon = createIcon();
  button.parentNode.replaceChild(newIcon, button);
  plant.isAdded = true;
}

/**
 * Hides specific section buttons, eg. tasks and requirements buttons.
 */
export const hideSectionButtons = () => {
  const tasksBtn = document.getElementById('task-nav');
  const requirementBtn = document.querySelector('.add-requirement-btn');
  hideElements(tasksBtn, requirementBtn);
}

/**
 * Renders the plant page section ("About", "Requirements" etc.) and hides/shows the edit button accordingly.
 * @param {HTMLElement} activeSection
 * @param {Boolean} editBtnState 
 * @param  {...HTMLElement} inactiveSections
 */
export const renderPlantSection = (activeSection, editBtnState, ...inactiveSections) => {
  const editBtn = document.querySelector('.edit-btn');
  inactiveSections.forEach(section => {
    section.classList.remove('flex');
    section.classList.add('hidden');
  });
  activeSection.classList.remove('hidden');
  activeSection.classList.add('flex');
  // hideElements(...inactiveSections);
  // showElements('flex', activeSection);

  if (editBtn && editBtnState === false) {
    editBtn.classList.add('hidden');
  } else if (editBtn) {
    editBtn.classList.remove('hidden');
  }
}