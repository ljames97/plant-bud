// backBtnEventHandlers.js

import { renderQuizResults } from "../../plant-quiz";
import { showElements } from "../../global/utils";
import { resetSection } from "../../global/dom-utils";

/**
 * Handles back to dashboard action by checking if the plant info container exists and if it has a quiz result, directing to the appropriate handler.
 */
export const backToDashboardHandler = (sectionClass, sectionRender) => {
  const plantInfoContainer = document.querySelector('.plant-info');
  if (plantInfoContainer && plantInfoContainer.quizResult) {
    backToQuizResultHandler(plantInfoContainer);
    return;
  } else if (plantInfoContainer && !plantInfoContainer.quizResult) {
    console.log(plantInfoContainer);
    plantInfoContainer.remove();
  }
  resetSection(sectionClass, sectionRender, `PLANT_PAGE_${sectionClass}`);
}

/**
 * Handles the back to quiz result action, removing plant info and result containers, and displaying the quiz container with results.
 * @param {HTMLElement} plantInfoContainer 
 */
export const backToQuizResultHandler = (plantInfoContainer) => {
  const quizContainer = document.querySelector('.quiz-container');
  const resultContainers = document.querySelectorAll('.result-container');
  plantInfoContainer.remove();
  resultContainers.forEach(result => result.remove());
  showElements('flex', quizContainer);
  renderQuizResults(quizContainer.plantResults);
}