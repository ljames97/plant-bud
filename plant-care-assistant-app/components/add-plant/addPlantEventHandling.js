// addPlantEventHandling.js
/**
 * Event handler logic for adding a new plant to 'My Plants'.
 */

import { plantLog, renderMyPlants } from "../plant-log/plantLogMain";
import { removeModal } from "../plant-page/plantPageDomManipulation";
import { domElements, resetSection } from "../utils/globalDomManipulation";

/**
 * Validates the form data, creates a new plant object, adds it to the plant log,
 * and updates the UI to reflect the new addition.
 * @param {Event} event 
 * @param {HTMLElement} plantName - user input field for plant name (date, description etc.)
 * @param {HTMLElement} dateAdded 
 * @param {HTMLElement} description 
 * @param {String} imageDataUrl - image url
 */
export const submitNewPlantHandler = (event, plantName, dateAdded, description, imageDataUrl) => {
  const { myPlantsBtn } = domElements;
  event.preventDefault();

  const newPlant = {
    name: plantName,
    dateAdded: dateAdded,
    description: description,
    image: imageDataUrl,
    id: Date.now(),
    requirements: [],
    tasks: [],
    tags: []
  };

  plantLog.addToUserPlantLog(newPlant);

  if (myPlantsBtn.classList.contains('active')) {
    resetSection('.plant-log', renderMyPlants, 'PLANT_LOG');
  }
}

/**
 * Handles the logic for the "Next" button, updating the state
 * and proceeding to the next step or submitting the form if on the last step.
 * @param {String} userInput - value of the input element for the current step.
 * @param {Object} state - current state of the modal, including the current step and new plant data.
 * @param {Event} event - click event object.
 * @param {String} imageDataUrl - URL of the selected image file, if applicable.
 * @param {HTMLElement} modal - modal element.
 * @returns updated state after handling the "Next" button click.
 */
export const nextButtonHandler = (userInput, state, event, imageDataUrl, modal) => {
  let newPlant = { ...state.newPlant };
  if (state.currentStep === 0) {
    newPlant.name = userInput;
  } else if (state.currentStep === 1) {
    newPlant.dateAdded = userInput;
  } else if (state.currentStep === 2) {
    newPlant.description = userInput;
  } else if (state.currentStep === 3) {
    submitNewPlantHandler(event, newPlant.name, newPlant.dateAdded, newPlant.description, imageDataUrl);
    removeModal(modal, 'ADD_PLANT');
    return { currentStep: 0, newPlant: {} };
  }

  return { currentStep: state.currentStep + 1, newPlant };
};

/**
 * Handles the logic for the "Back" button, updating the state to return to the previous step.
 * @param {Object} state - current state of the modal, including the current step and new plant data.
 * @returns updated state after handling the "Back" button click.
 */
export const backButtonHandler = (state) => {
  if (state.currentStep > 0) {
    return { currentStep: state.currentStep - 1, newPlant: state.newPlant };
  }
  return state;
};