// plantLogEventHandling.js
/**
 * Event handler logic.
 */

import { renderPlantDetails } from "../plant-page/plantPageMain";
import { domElements } from "../utils/globalDomManipulation";
import { localEventManager } from "../utils/globalEventHandling";
import { hideElements } from "../utils/gobalUtility";
import { plantLogElements } from "./plantLogDomManipulation";
import { plantLog } from "./plantLogMain";

export const setupUserPlantGridEventListener = () => {
  const { plantLogEl } = domElements;
  const { plantLogTitle, addPlantBtn, userPlantsContainer } = plantLogElements.getPlantLogElements();

  // event propagation
  localEventManager.addEventListener(userPlantsContainer, 'click', (event) => {
    let target = event.target;
    while (target && target !== userPlantsContainer) {
      if (target.classList.contains('plant-image')) {
        const plantId = target.getAttribute('data-id');
        const plant = plantLog.getPlantById(plantId);
        if (plant) {
          renderPlantDetails(plant, plantLogEl, userPlantsContainer, 'grid', '← back to My Plants');
          hideElements(plantLogTitle, addPlantBtn, userPlantsContainer );
        }
        return;
      }
      target = target.parentNode;
    }
  });
}