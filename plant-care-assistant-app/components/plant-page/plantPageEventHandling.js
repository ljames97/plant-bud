import { domElements } from "../utils/globalDomManipulation";
import { removeChildren, showElements } from "../utils/gobalUtility";
import { renderNewPlantSearch } from "../plant-discovery/plantDiscoveryMain";
import { plantLogElements } from "../plant-log/plantLogDomManipulation";
import { myPlantsInit, renderMyPlants } from "../plant-log/plantLogMain";

/**
 * Remove plant page and return to dashboard (plantGrid).
 * @param {HTMLElement} mainSection 
 * @param {HTMLElement} hiddenContainer 
 * @param {...HTMLElement} elements 
 */
export const backToDashboardHandler = (mainSection, hiddenContainer, displayType, ...elements) => {
  removeChildren(mainSection, ...elements)
  
  if (hiddenContainer.classList.contains('discovery-search-container')) {
    const { plantDiscovery } = domElements;
    renderNewPlantSearch();
    removeChildren(plantDiscovery, mainSection);
    return;
  }
  
  if (hiddenContainer.classList.contains('plant-log')) {
    const { plantLogEl } = domElements;
    renderMyPlants();
    removeChildren(plantLogEl, mainSection);
    return;
  }

  if (mainSection.classList.contains('plant-log')) {
    const { plantLogEl } = domElements;
    plantLogElements.resetPlantLogElements();
    return;
  }

  showElements(displayType, hiddenContainer);
}