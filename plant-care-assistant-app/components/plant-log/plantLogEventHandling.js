// plantLogEventHandling.js
/**
 * Event handler logic.
 */

import { renderPlantDetails } from "../plant-page/plantPageMain";
import { domElements, hideInitialDomElements } from "../utils/globalDomManipulation";
import { localEventManager } from "../utils/globalEventHandling";
import { hideElements } from "../utils/gobalUtility";
import { plantLog } from "./plantLogMain";

export const setupUserPlantGridEventListener = () => {
  const { userPlantGrid, plantLogEl } = domElements;

  // event propagation
  localEventManager.addEventListener(userPlantGrid, 'click', (event) => {
    let target = event.target;
    while (target && target !== userPlantGrid) {
      if (target.classList.contains('plant-image')) {
        const plantId = target.getAttribute('data-id');
        const plant = plantLog.getPlantById(plantId);
        if (plant) {
          renderPlantDetails(plant, plantLogEl, userPlantGrid, 'grid', '← back to dashboard');
          hideElements(userPlantGrid);
          hideInitialDomElements();
        }
        return;
      }
      target = target.parentNode;
    }
  });
}