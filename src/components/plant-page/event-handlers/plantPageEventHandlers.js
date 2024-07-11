// plantPageEventHandling.js

/**
 * Event handler logic the plant page section.
 */

import { removeModal } from "../../global/dom-utils";
import { localEventManager } from "../../global/event-handlers";
import { appendChildren } from "../../global/utils";
import { hideSectionButtons } from "../dom-utils";
import { toggleEditMode } from "../edit-mode";
import { backToDashboardHandler } from "./backBtnEventHandlers";
import { addToPlantsHandler, permanentDeleteBtnHandler, unarchiveBtnHandler } from "./helperEventHandlers";

/**
 * Sets up event listeners for the new task/requirement modal. Handles submitting data, removing the modal and preventing event propagation for modal click.
 * @param {HTMLElement} submitBtn 
 * @param {HTMLElement} cancelBtn 
 * @param {HTMLElement} modal 
 * @param {HTMLElement} sectionElement 
 * @param {HTMLElement} userInput 
 * @param {String} sectionClass 
 * @param {Function} submitHandler
 * @param {Object} plant 
 */
export const setUpModalEventListeners = (submitBtn, cancelBtn, modal, sectionElement, userInput, sectionClass, submitHandler, plant) => {
  const modalOverlay = document.querySelector('.modal-overlay');

  localEventManager.addEventListener(submitBtn, 'click', () => {
    submitHandler(plant, sectionElement, userInput.value, sectionClass, modal);
  }, `PLANT_PAGE_${sectionClass}`);

  localEventManager.addEventListener(cancelBtn, 'click', () => {
    removeModal(modal);
  }, `PLANT_PAGE_${sectionClass}`);

  localEventManager.addEventListener(modalOverlay, 'click', () => {
    removeModal(modal);
  }, `PLANT_PAGE_${sectionClass}`)

  localEventManager.addEventListener(modal, 'click', (event) => {
    event.stopPropagation();
  }, `PLANT_PAGE_${sectionClass}`)
}

/**
 * Sets up event listeners for various plant page actions, including editing, adding, unarchiving, and navigating back to the dashboard.
 * @param {HTMLElement} sectionBtn 
 * @param {Object} plant 
 * @param {HTMLElement} plantTitle 
 * @param {HTMLElement} plantDescription 
 * @param {HTMLElement} plantImageContainer 
 * @param {HTMLElement} plantImage 
 * @param {HTMLElement} sectionContainer 
 * @param {String} sectionClass 
 * @param {Function} sectionRender 
 * @param {HTMLElement} subHeader 
 * @param {HTMLElement} permanentDeleteBtn 
 * @param {HTMLElement} backToDashboard 
 */
export const setUpPlantPageListeners = (sectionBtn, plant, plantTitle, plantDescription, plantImageContainer, plantImage, sectionContainer, sectionClass, sectionRender, subHeader, permanentDeleteBtn, backToDashboard) => {
  const isEditBtn = sectionBtn.classList.contains('edit-btn');
  const isAddBtn = sectionBtn.textContent === 'Add plant' || sectionBtn.textContent === '';

  if (isEditBtn) {
    localEventManager.addEventListener(sectionBtn, 'click', () => 
      toggleEditMode(plant, sectionBtn, {plantTitle, plantDescription, plantImageContainer, plantImage, sectionContainer}, sectionClass, sectionRender), `PLANT_PAGE_${sectionClass}`)
  } 
  
  if (isAddBtn) {
    hideSectionButtons();
    localEventManager.addEventListener(sectionBtn, 'click', () => {
      addToPlantsHandler(sectionBtn, plant);
    }, 'PLANT_PAGE');
  } 
  
  if (sectionBtn.textContent === 'Unarchive') {
    appendChildren(subHeader, permanentDeleteBtn);
    setUpUnarchiveListeners(sectionBtn, plant, sectionClass, sectionRender, permanentDeleteBtn);
  }

  localEventManager.addEventListener(backToDashboard, 'click', () => {
    backToDashboardHandler(sectionClass, sectionRender);
  }, `PLANT_PAGE_${sectionClass}`);
}

/**
 * Sets up event listeners for the unarchive button and the permanent delete button, handling unarchiving and permanent deletion actions.
 * @param {HTMLElement} sectionBtn 
 * @param {Object} plant 
 * @param {String} sectionClass 
 * @param {Function} sectionRender 
 * @param {HTMLElement} permanentDeleteBtn 
 */
export const setUpUnarchiveListeners = (sectionBtn, plant, sectionClass, sectionRender, permanentDeleteBtn) => {
  localEventManager.addEventListener(sectionBtn, 'click', () => {
    unarchiveBtnHandler(plant, sectionClass, sectionRender);
  }, 'PLANT_PAGE');
  localEventManager.addEventListener(permanentDeleteBtn, 'click', () => {
    permanentDeleteBtnHandler(plant, sectionClass, sectionRender);
  }, 'PLANT_PAGE');
}