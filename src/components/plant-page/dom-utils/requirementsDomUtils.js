import { addIcon, clear, waterPlantsIcon } from "../../../images";
import { createElement } from "../../global/dom-utils";
import { localEventManager } from "../../global/event-handlers";
import { appendChildren } from "../../global/utils";
import { addNewRequirementHandler, submitRequirementHandler } from "../event-handlers";

/**
 * Creates and returns the requirements section for a plant, allowing users to upload their own requirements.
 * @param {HTMLElement} plantPageModal - modal element for the plant page.
 * @param {Object} plant - plant object.
 * @param {String} sectionClass - class name for the section.
 */
export const createRequirements = (plantPageModal, plant, sectionClass) => {
  const requirementsSection = createElement({tagName: 'div', classEl: ['requirements-section']});
  const requirements = createElement({tagName: 'div', classEl: ['requirements']})
  const waterScheduleMain = createElement({tagName: 'div', classEl: ['requirement-container']});
  const waterScheduleIconContainer = createElement({tagName: 'div', classEl: ['requirement-icon-container']});
  const waterScheduleIcon = createElement({tagName: 'img', classEl: ['water-scheduele-icon']});
  const tempLightMain = createElement({tagName: 'div', classEl: ['requirement-container']});
  const tempLightIconContainer = createElement({tagName: 'div', classEl: ['requirement-icon-container']});
  const tempLightIcon = createElement({tagName: 'img', classEl: ['temp-light-icon']});
  const waterSchedule = createElement({tagName: 'p', textContent: plant.waterSchedule, classEl: ['requirement']});
  const tempLight = createElement({tagName: 'p', textContent: plant.tempLight, classEl: ['requirement']});
  plantPageModal.classList.add('plant-page-modal');
  plantPageModal.classList.add('hidden');
  requirementsSection.style.display = 'none';
  waterScheduleIcon.src = waterPlantsIcon;
  tempLightIcon.src = clear;

  // allow user to upload their own requirements
  const addRequirementBtn = createElement({tagName: 'button', classEl: ['add-requirement-btn']});
  const addBtnImageContainer = createElement({tagName: 'div', classEl: ['add-btn-image-container']});
  const addBtnImage = createElement({tagName: 'img', classEl: ['add-btn-image']});
  addBtnImage.src = addIcon;

  appendChildren(addBtnImageContainer, addBtnImage)
  appendChildren(addRequirementBtn, addBtnImageContainer);

  appendChildren(waterScheduleIconContainer, waterScheduleIcon);
  appendChildren(tempLightIconContainer, tempLightIcon);
  appendChildren(waterScheduleMain, waterScheduleIconContainer, waterSchedule);
  appendChildren(tempLightMain, tempLightIconContainer, tempLight);
  appendChildren(requirements, waterScheduleMain, tempLightMain)
  appendChildren(requirementsSection, requirements, plantPageModal, addRequirementBtn);

  if (plant.requirements) {
    plant.requirements.forEach(item => {
      submitRequirementHandler(plant, requirements, item, plantPageModal);
    });
  }

  localEventManager.addEventListener(addRequirementBtn, 'click', () => {
    addNewRequirementHandler(plantPageModal, requirements, sectionClass, plant);
  }, `PLANT_PAGE_${sectionClass}`)

  return requirementsSection;
}