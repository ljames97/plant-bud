import { setUpModalListeners } from "../event-handlers";
import { removeChildren } from "../utils";
import { clearSection } from "./sectionManipulation";

/**
 * Sets up a modal for closing and interacting with the modal.
 * @param {HTMLElement} modal - modal element to be set up.
 * @param {HTMLElement} menuContainer - container element for the menu.
 * @param {String} eventRegistry - event registry identifier eg. 'PLANT_LOG', 'PLANT_SEARCH'.
 */
export const setUpModal = (modal, menuContainer, eventRegistry) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  modalOverlay.classList.add('flex');
  modal.classList.add('flex');

  setUpModalListeners(modalOverlay, modal, eventRegistry);
}

/**
 * Removes a modal from the DOM.
 * @param {HTMLElement} modal - modal element to be removed.
 * @param {String} eventRegistry - event registry identifier eg. 'PLANT_LOG', 'PLANT_SEARCH'.
 */
export const removeModal = (modal, eventRegistry) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  clearSection(modal, eventRegistry);
  clearSection(modalOverlay, eventRegistry);
  removeChildren(modalOverlay, modal);
  modalOverlay.classList.remove('flex');
}