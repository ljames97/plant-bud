import { localEventManager } from "../event-handlers/globalEventHandlers";

/**
 * Clear the section by removing any child nodes. An alternative to innerHTML = ''.
 * @param {HTMLElement} element 
 * @param {String} eventRegistryName 
 */
export const clearSection = (element, eventRegistryName) => {
  if (element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  
    localEventManager.removeAllEventListeners(eventRegistryName);
  } else {
    return
  }

}

/**
 * Clear and re-render the section.
 * @param {String} sectionClass - the class of the section element eg. 'plant-log', 'plant-quiz' etc.
 * @param {Function} renderSection - function to render the section on screen eg. renderMyPlants.
 * @param {String} eventRegistryName - event listener register connected to this section eg. 'MY_PLANTS'.
 */
export const resetSection = (sectionClass, renderSection, eventRegistryName) => {
  const section = document.querySelector(sectionClass);
  clearSection(section, eventRegistryName);
  renderSection();
}