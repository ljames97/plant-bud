import { renderQuizResults } from "../../plant-quiz/plantQuizDomUtils";
import { resetSection } from "../../utils/globalDomUtils";
import { showElements } from "../../utils/gobalUtility";

/**
 * Handles back to dashboard action by checking if the plant info container exists and if it has a quiz result, directing to the appropriate handler.
 */
export const backToDashboardHandler = (sectionClass, sectionRender) => {
  const plantInfoContainer = document.querySelector('.plant-info');
  if (plantInfoContainer && plantInfoContainer.quizResult) {
    backToQuizResultHandler(plantInfoContainer);
    return;
  } else if (plantInfoContainer && !plantInfoContainer.quizResult) {
    plantInfoContainer.remove();
  }
  resetSection(sectionClass, sectionRender, `PLANT_PAGE_${sectionClass}`);
}

/**
 * Handles the back to quiz result action, removing plant info and result containers, and displaying the quiz container with results.
 * @param {HTMLElement} plantInfoContainer 
 */
const backToQuizResultHandler = (plantInfoContainer) => {
  const quizContainer = document.querySelector('.quiz-container');
  const resultContainers = document.querySelectorAll('.result-container');
  plantInfoContainer.remove();
  resultContainers.forEach(result => result.remove());
  showElements('flex', quizContainer);
  renderQuizResults(quizContainer.plantResults);
}