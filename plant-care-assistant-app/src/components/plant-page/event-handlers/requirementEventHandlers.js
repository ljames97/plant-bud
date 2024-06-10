import { setUpModalEventListeners } from "./plantPageEventHandlers";
import { createElement, removeModal, setUpModal } from "../../global";
import { appendChildren } from "../../global";

/**
 * Handles adding a new requirement to the plant's requirements list.
 * @param {HTMLElement} plantPageModal - modal element for the plant page.
 * @param {HTMLElement} requirements - container element for requirements.
 * @param {String} sectionClass - class name for the section.
 * @param {Object} plant - plant object.
 */
export const addNewRequirementHandler = (plantPageModal, requirements, sectionClass, plant) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const addRequirementInput = createElement({tagName: 'input', placeHolder: 'New requirement', classEl: ['plant-page-input']});
  const submitBtn = createElement({tagName: 'button', textContent: 'Add requirement', classEl: ['submit-requirement-btn']});
  const cancelBtn = createElement({tagName: 'button', textContent: 'X', classEl: ['cancel-btn']});
  setUpModal(plantPageModal);

  appendChildren(plantPageModal, cancelBtn, addRequirementInput, submitBtn);
  appendChildren(modalOverlay, plantPageModal);

  setUpModalEventListeners(submitBtn, cancelBtn, plantPageModal, requirements, addRequirementInput, sectionClass, submitRequirementHandler, plant);
}

/**
 * Handles submitting a new requirement and updating the plant's requirements list.
 * @param {Object} plant - plant object.
 * @param {HTMLElement} requirements - container element for requirements.
 * @param {HTMLElement} addRequirementInput - input element for the new requirement.
 */
export const submitRequirementHandler = (plant, requirements, addRequirementInput, modal) => {
  if (addRequirementInput === '') {
    return;
  }

  console.log(modal);
  removeModal(modal);

  const newUserRequirmentContainer = createElement({tagName: 'div', classEl: ['requirement-container']});
  const newUserRequirementIconContainer = createElement({tagName: 'div', classEl: ['requirement-icon-container']})
  const newUserRequirementIcon = createElement({tagName: 'img', classEl: ['requirement-icon']});
  const newUserRequirement = createElement({tagName: 'p', textContent: addRequirementInput, classEl: ['requirement']})
  newUserRequirementIcon.src = '../../public/plant-pot-icon.png';

  appendChildren(newUserRequirementIconContainer, newUserRequirementIcon);
  appendChildren(newUserRequirmentContainer, newUserRequirementIconContainer, newUserRequirement);
  appendChildren(requirements, newUserRequirmentContainer);

  if (!plant.requirements.includes(addRequirementInput)) {
    plant.requirements.push(addRequirementInput);
    console.log(plant);
  }
}