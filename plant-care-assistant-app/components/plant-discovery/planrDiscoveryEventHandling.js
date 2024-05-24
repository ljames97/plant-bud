// plantDiscoveryEventHandling.js
/**
 * Event handler logic for plant search section
 */

import { copyToMyPlants, renderPlantDetails } from "../plant-page/plantPageMain";
import { clearSection } from "../utils/globalDomManipulation";
import { appendChildren } from "../utils/gobalUtility";
import { replaceElement } from "./plantDiscoveryDomManipulation";

/**
 * Handles the click event on a plant element, clearing the main section and rendering the plant details.
 * @param {HTMLElement} mainSection - main section element where the plant info container will be appended.
 * @param {HTMLElement} plantInfoContainer - container element where plant information will be displayed.
 * @param {Object} plant - plant object containing the details to be rendered.
 * @param {String} backButtonText - text to display on the back button.
 * @param {String} sectionClass - class for the section.
 * @param {Function} sectionRender - function to render the section.
 */
export const plantElementClickHandler = (mainSection, plantInfoContainer, plant, backButtonText, sectionClass, sectionRender) => {
  clearSection(mainSection, 'PLANT_SEARCH');
  appendChildren(mainSection, plantInfoContainer);
  renderPlantDetails(plant, plantInfoContainer, backButtonText, sectionClass, sectionRender);
}

/**
 * Handles the quick add action for a plant, adding it to "My Plants".
 * @param {HTMLElement} quickAdd - quick add menu item element.
 * @param {Object} plant - plant object to be added to "My Plants".
 * @returns 
 */
export const quickAddHandler = (quickAdd, plant) => {
  if (plant.isAdded === true) {
    return;
  }
  copyToMyPlants(plant);
  plant.isAdded = true;
  replaceElement(quickAdd);
}