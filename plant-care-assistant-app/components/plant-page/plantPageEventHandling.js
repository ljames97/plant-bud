import { domElements, resetDomElements } from "../utils/globalDomManipulation";
import { removeChildren, showElements } from "../utils/gobalUtility";
import { renderNewPlantSearch } from "../plant-discovery/plantDiscoveryMain";

/**
 * Remove plant page and return to dashboard (plantGrid).
 * @param {HTMLElement} mainSection 
 * @param {HTMLElement} hiddenContainer 
 * @param {...HTMLElement} elements 
 */
export const backToDashboardHandler = (mainSection, hiddenContainer, displayType, ...elements) => {
  removeChildren(mainSection, ...elements)
  
  if (hiddenContainer.classList.contains('search-container')) {
    const { plantDiscovery } = domElements;
    renderNewPlantSearch();
    removeChildren(plantDiscovery, mainSection);
    return;
  }
  
  if (mainSection.classList.contains('plant-log')) {
    resetDomElements();
  }

  showElements(displayType, hiddenContainer);
}