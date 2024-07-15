// tagDomUtils.js

/**
 * For managing tags within the Plant Log section.
 */

import { createElement, setUpModal } from "../../global/dom-utils";
import { localEventManager } from "../../global/event-handlers";
import { appendChildren } from "../../global/utils";
import { editTagHandler } from "../event-handlers";


/**
 * Creates and returns a container of tags for a given plant, setting up click event listeners for editing each tag.
 * @param {Object} plant 
 */
export const createPlantLogTags = (plant) => {
  const tagContainer = createElement({tagName: 'div', classEl: ['plant-tag-container']});
  const tags = plant.tags
  if (tags) {
    tags.forEach(tag => {
      const newTag = createElement({tagName: 'button', textContent: tag.description, classEl: ['plant-log-tag']});
      appendChildren(tagContainer, newTag);
      localEventManager.addEventListener(newTag, 'click', () => {
        editTagHandler(newTag, plant);
      })
    });
  }

  return tagContainer;
}

/**
 * Displays an error modal indicating that the maximum number of tags has been added for a plant.
 */
export const renderMaximumTagsError = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const menuContainer = document.querySelector('.drop-menu-container');
  const errorModal = createElement({tagName: 'div', classEl: ['new-modal']});
  const errorMessage = createElement({tagName: 'p', textContent: 'Maximum tags added for this plant!', classEl: ['modal-error-message']});
  errorMessage.classList.add('show');

  setUpModal(errorModal, menuContainer, 'PLANT_LOG');

  appendChildren(errorModal, errorMessage);
  appendChildren(modalOverlay, errorModal);
}