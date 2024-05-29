/**
 * Sets up event listeners for the modal. Handles removal and preventing event propagation for modal click.
 * @param {HTMLElement} modalOverlay - modal overlay element.
 * @param {HTMLElement} modal - modal element to be set up.
 * @param {String} eventRegistry - event registry identifier eg. 'PLANT_LOG', 'PLANT_SEARCH'
 */
export const setUpModalListeners = (modalOverlay, modal, eventRegistry) => {
  localEventManager.addEventListener(modalOverlay, 'click', () => {
    removeModal(modal, eventRegistry);
  }, eventRegistry);

  localEventManager.addEventListener(modal, 'click', (event) => {
    event.stopPropagation();
  }, eventRegistry);
}

/**
 * Handles document click events to remove the drop menu container if the click is outside the container.
 * @param {Event} event 
 */
export const handleDocumentClick = (event) => {
  const dropMenuContainer = document.querySelector('.drop-menu-container');
  if (dropMenuContainer && !dropMenuContainer.contains(event.target)) {
    dropMenuContainer.remove();
  }
}