// plantLogEventHandling.js
/**
 * Event handler logic the plant log section.
 */

import { renderPlantDetails } from "../plant-page/plantPageMain";
import { clearSection } from "../utils/globalDomManipulation";
import { localEventManager } from "../utils/globalEventHandling";
import { plantLogElements } from "./plantLogDomManipulation";
import { plantLog, renderMyPlants } from "./plantLogMain";

/**
 * Sets up an event listener for clicks within the user plants grid in the My Plants section.
 * Utilizes event delegation to handle clicks on dynamically added plant images, allowing for efficient
 * event handling and reducing the need for attaching listeners to individual plants in the grid.
 * 
 * @param {HTMLElement} plantLogElement - The container element for the plant log section where events are monitored.
 */
export const setupUserPlantGridEventListener = (plantLogElement) => {
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();

  // Event propagation for elements in the userPlantGrid.
  localEventManager.addEventListener(userPlantsContainer, 'click', (event) => {
    let target = event.target;
    while (target && target !== userPlantsContainer) {
      if (target.classList.contains('plant-image')) {
        const plantId = target.getAttribute('data-id');
        const plant = plantLog.getPlantById(plantId);
        if (plant) {
          clearSection(plantLogElement, 'PLANT_LOG');
          renderPlantDetails(plant, plantLogElement, '← back to My Plants', '.plant-log', renderMyPlants);
        }
        return;
      }
      target = target.parentNode;
    }
  }, 'PLANT_LOG');
}