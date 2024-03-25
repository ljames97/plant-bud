// plant-discovery/eventHandling.js
/**
 * Event handler logic.
 */

import { renderPlantSearchResults } from "./plantDiscoveryMain";

/**
 * Handle plant search button click.
 * @param {HTMLElement} userSearch 
 * @param {HTMLElement} searchForPlant 
 * @param {HTMLElement} searchButton 
 */
export const searchButtonClickHandler = (userSearch, searchForPlant, searchButton) => {
  renderPlantSearchResults(userSearch, searchForPlant);
  localEventManager.removeEventListener(searchButton, 'click');
}