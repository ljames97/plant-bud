// addPlantMain.js
/**
 * Main file for the Add To Plant module, centralising the module's functionality.
 * Render plant upload modal, add new plant to the userPlantLog and validate plant details.
 */

import './addPlant.css';
import { createElement, setUpModal } from "../global";
import { appendChildren } from "../global";

/**
 * Render plant form for the user to manually upload a plant to 'My Plants'.
 * Sets up event listeners for image upload and form submission. The image upload
 * listener reads the selected file and stores its data URL for later use.
 */
export const renderAddPlantModal = () => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const addPlantModal = createElement({ tagName: 'div', classEl: ['new-modal'] });

  setUpModal(addPlantModal, null, 'ADD_MODAL');
  appendChildren(modalOverlay, addPlantModal);

  updateModalContent(addPlantModal, { currentStep: 0, newPlant: {} });
};