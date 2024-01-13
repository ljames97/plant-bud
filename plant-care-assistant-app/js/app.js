/**
 * Project: Plant Care Assistant App - Draft Portfolio Project (PlantBud)
 *
 * Description:
 * A plant care assistant for discovering suitable plants for the user's home as well as learning about and keeping track of their plants. 
 *
 * Version: 1.0.0
 * Author: Luke James
 * Created on: 09/01/2024
 * 
 */

/**
 * TODO:
 * - set up multiple https pages for each feature
 * - core feature simple css and start js code (plant suitability quiz, schedueler, plant logging, plant information via search, dashboard)
 * - clean up css and public image folder
 *
 * */

const toggleMobileNav = (isOpen) => {
  const mobileNavModal = document.querySelector('.mobile-nav-modal');
  if (isOpen) {
    mobileNavModal.classList.add('show');
  } else {
    mobileNavModal.classList.remove('show');
  }
}

/**
 * Function to assign event handlers to static elements
 */
const staticEventHandlers = () => {
  const eventHandlerData = staticEventHandlerManager();

  eventHandlerData.forEach(eventHandler => {
    const button = document.querySelector(eventHandler.class)

    button.addEventListener('click', () => {
      eventHandler.handler();
    });
  })
}

/**
 * Function to manage static elements and their event handlers
 * @returns event handler data (array)
 */
const staticEventHandlerManager = () => {
  const eventHandlerData = [
    {
      class: '.menu-bars',
      handler: () => toggleMobileNav(true)
    },
    {
      class: '.mobile-nav-close-btn',
      handler: () => toggleMobileNav(false)
    }
  ];

  return eventHandlerData;
}


staticEventHandlers();