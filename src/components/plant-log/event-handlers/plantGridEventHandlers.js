// plantGridEventHandling.js

/**
 * Event handler functions for managing events within the plant grid in the Plant Log section.
*/

import { renderPlantDetails } from "../../plant-page";
import { clearSection, createElement } from "../../global/dom-utils";
import { localEventManager } from "../../global/event-handlers";
import { appendChildren } from "../../global/utils";
import { plantLogElements } from "../dom-utils";
import { plantLog } from "../plantLogMain";

/**
 * Sets up an event listener for clicks within the user plants grid in the My Plants section.
 * Utilizes event delegation to handle clicks on dynamically added plant images, allowing for efficient
 * event handling and reducing the need for attaching listeners to individual plants in the grid.
 * 
 * @param {HTMLElement} plantLogElement - container element for the plant log section where events are monitored.
 * @param {Array} plantLogType - eg. userPlantLog or deletedPlantLog.
 * @param {Function} sectionRender - eg. renderMyPlants, renderDeletedPlants etc.
 * @param {String} backButtonText - text for the back button eg. 'back to My Plants'.
 */
export const setupUserPlantGridEventListener = (plantLogElement, plantLogType, sectionRender, backButtonText) => {
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();
  const plantPageContainer = createElement({tagName: 'div', classEl: ['plant-page-container']});

  // Event propagation for elements in the userPlantGrid.
  localEventManager.addEventListener(userPlantsContainer, 'click', (event) => {
    let target = event.target;
    while (target && target !== userPlantsContainer) {
      if (target.classList.contains('plant-image')) {
        const plantId = target.getAttribute('data-id');
        const plant = plantLog.getPlantById(plantId, plantLogType);
        if (plant) {
          localEventManager.removeAllEventListeners('PLANT_NAV');
          localEventManager.removeAllEventListeners('PLANT_SEARCH');
          clearSection(plantLogElement, 'PLANT_LOG');
          appendChildren(plantLogElement, plantPageContainer);
          renderPlantDetails(plant, plantPageContainer, backButtonText, '.plant-log', sectionRender);
        }
        return;
      }
      target = target.parentNode;
    }

  }, 'PLANT_CONTAINER');
}