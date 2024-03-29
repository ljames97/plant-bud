// plantLogEventHandling.js
/**
 * Event handler logic.
 */

import { renderPlantDetails, resetSection } from "../plant-page/plantPageMain";
import { clearSection, domElements } from "../utils/globalDomManipulation";
import { localEventManager } from "../utils/globalEventHandling";
import { hideElements } from "../utils/gobalUtility";
import { plantLogElements } from "./plantLogDomManipulation";
import { plantLog, renderMyPlants } from "./plantLogMain";

export const setupUserPlantGridEventListener = () => {
  const { plantLogEl } = domElements;
  const { plantLogTitle, addPlantBtn, userPlantsContainer, searchContainer } = plantLogElements.getPlantLogElements();

  // event propagation
  localEventManager.addEventListener(userPlantsContainer, 'click', (event) => {
    let target = event.target;
    while (target && target !== userPlantsContainer) {
      if (target.classList.contains('plant-image')) {
        const plantId = target.getAttribute('data-id');
        const plant = plantLog.getPlantById(plantId);
        if (plant) {
          clearSection(plantLogEl, 'PLANT_LOG');
          renderPlantDetails(plant, plantLogEl, userPlantsContainer, 'grid', '← back to My Plants', '.plant-log', renderMyPlants, 'PLANT_LOG');
        }
        return;
      }
      target = target.parentNode;
    }
  }, 'PLANT_LOG');
}