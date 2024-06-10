import { renderAddPlantModal } from "../../add-plant";
import { renderHomePage } from "../../home-page/homeMain";
import { renderNewPlantSearch } from "../../plant-library";
import { renderMyPlants } from "../../plant-log";
import { renderPlantQuiz } from "../../plant-quiz";
import { dashboardNavButtonHighlight, domElements, prepareDashboard } from "../dom-utils";
import { localEventManager } from "./globalEventHandlers";

/**
 * Initialises the given section and prepares dashboard.
 * @param {String} sectionName 
 */
const sectionInit = (sectionName) => {
  const { myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn, homeBtn } = domElements;

  const sectionMap = {
    'MY_PLANTS': { button: myPlantsBtn, renderFunc: renderMyPlants },
    'PLANT_QUIZ': { button: quizBtn, renderFunc: renderPlantQuiz },
    'ADD_PLANT': { button: addNewPlantBtn, renderFunc: renderAddPlantModal },
    'PLANT_LIBRARY': { button: libraryBtn, renderFunc: renderNewPlantSearch },
    'HOME_PAGE': { button: homeBtn, renderFunc: renderHomePage }
  }

  const section = sectionMap[sectionName];
  const otherButtons = Object.values(sectionMap).map(sec => sec.button).filter(btn => btn !== section.button);

  if (!section || section.button.classList.contains('active')) {
    return;
  } if (section.button.classList.contains('dormant')) {
    prepareDashboard(section.button, section.renderFunc, ...otherButtons);
    return;
  }

  prepareDashboard(section.button, section.renderFunc, ...otherButtons);
  section.button.classList.add('dormant');
}

/**
 * Sets up event listeners for the dashboard. 
 * This includes listeners for searching plants, adding new plants, etc.
 */
export const setUpDashboardEventListeners = () => {
  const { myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn, homeBtn } = domElements;

  localEventManager.addEventListener(myPlantsBtn, 'click', () => {
    sectionInit('MY_PLANTS');
  }, 'DASHBOARD');
  localEventManager.addEventListener(addNewPlantBtn, 'click', () => {
    sectionInit('ADD_PLANT');
  }, 'DASHBOARD');
  localEventManager.addEventListener(quizBtn, 'click', () => {
    sectionInit('PLANT_QUIZ');
  }, 'DASHBOARD');
  localEventManager.addEventListener(libraryBtn, 'click', () => {
    sectionInit('PLANT_LIBRARY');
  }, 'DASHBOARD');
  localEventManager.addEventListener(homeBtn, 'click', () => {
    sectionInit('HOME_PAGE');
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

