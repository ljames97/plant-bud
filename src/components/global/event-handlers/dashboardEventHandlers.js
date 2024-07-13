// dashboardEventHandlers.js

import { renderAddPlantModal } from "../../add-plant";
import { renderHomePage } from "../../home-page/homeMain";
import { renderNewPlantSearch } from "../../plant-library";
import { renderMyPlants } from "../../plant-log";
import { renderPlantQuiz } from "../../plant-quiz";
import { dashboardNavButtonHighlight, domElements, prepareDashboard } from "../dom-utils";
import { localEventManager } from "./globalEventHandlers";

/**
 * Initialises the given section and prepares dashboard.
 * @param {String} sectionName - eg. 'MY_PLANTS', 'PLANT_QUIZ', 'ADD_PLANT', 'PLANT_LIBRARY', 'HOME_PAGE'.
 */
export const sectionInit = (sectionName) => {
  const { myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn, homeBtn, 
          desktopMyPlantsBtn, desktopQuizBtn, desktopLibraryBtn, desktopHomeBtn } = domElements;
          
  const sectionMap = {
    'MY_PLANTS': { buttons: [myPlantsBtn, desktopMyPlantsBtn], renderFunc: renderMyPlants },
    'PLANT_QUIZ': { buttons: [quizBtn, desktopQuizBtn], renderFunc: renderPlantQuiz },
    'ADD_PLANT': { buttons: [addNewPlantBtn], renderFunc: renderAddPlantModal },
    'PLANT_LIBRARY': { buttons: [libraryBtn, desktopLibraryBtn], renderFunc: renderNewPlantSearch },
    'HOME_PAGE': { buttons: [homeBtn, desktopHomeBtn], renderFunc: renderHomePage }
  }

  const section = sectionMap[sectionName];
  const otherButtons = Object.values(sectionMap).flatMap(sec => sec.buttons).filter(btn => !section.buttons.includes(btn));

  if (!section || section.buttons.some(button => button.classList.contains('active'))) {
    return;
  }
  if (section.buttons.some(button => button.classList.contains('dormant'))) {
    prepareDashboard(section.buttons, section.renderFunc, ...otherButtons);
    return;
  }

  prepareDashboard(section.buttons, section.renderFunc, ...otherButtons);
  section.buttons.forEach(button => button.classList.add('dormant'));
}

/**
 * Sets up event listeners for the dashboard. 
 * This includes listeners for searching plants, adding new plants, etc.
 */
export const setUpDashboardEventListeners = () => {
  const { myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn, homeBtn, 
    desktopMyPlantsBtn, desktopQuizBtn, desktopLibraryBtn, desktopHomeBtn } = domElements;

  [myPlantsBtn, desktopMyPlantsBtn].forEach(btn => {
    localEventManager.addEventListener(btn, 'click', () => {
      sectionInit('MY_PLANTS');
    }, 'DASHBOARD');
  });

  [quizBtn, desktopQuizBtn].forEach(btn => {
    localEventManager.addEventListener(btn, 'click', () => {
      sectionInit('PLANT_QUIZ');
    }, 'DASHBOARD');
  });

  [libraryBtn, desktopLibraryBtn].forEach(btn => {
    localEventManager.addEventListener(btn, 'click', () => {
      sectionInit('PLANT_LIBRARY');
    }, 'DASHBOARD');
  });

  [homeBtn, desktopHomeBtn].forEach(btn => {
    localEventManager.addEventListener(btn, 'click', () => {
      sectionInit('HOME_PAGE');
    }, 'DASHBOARD');
  });

  localEventManager.addEventListener(addNewPlantBtn, 'click', () => {
    sectionInit('ADD_PLANT');
  }, 'DASHBOARD');
}

/**
 * Initialises the dashboard.
 */
export const dashboardInit = () => {
  sectionInit('HOME_PAGE');
  setUpDashboardEventListeners();
  dashboardNavButtonHighlight();
}

