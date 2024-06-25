// plantQuizEventHandling.js
/**
 * Event handler logic.
 */

import { renderPlantDetails } from "../plant-page";
import { questions } from "../global/data";
import { clearSection, domElements } from "../global/dom-utils";
import { localEventManager } from "../global/event-handlers";
import { hideElements, removeChildren, showElements } from "../global/utils";
import { renderQuestion } from "./plantQuizDomUtils";
import { getQuizResults } from "./plantQuizHelpers";
import { renderPlantQuiz, userAnswerlog } from "./plantQuizMain";

/**
 * Handles user choice for a given question and add choices to the userAnswerLog.
 * @param {String} category 
 * @param {String} choice 
 * @param {Number} questionId 
 * @param {HTMLElement} plantQuiz 
 * @param {String} questionTitle 
 * @param {HTMLElement} choiceBtnContainer 
 */
export const choiceBtnClickHandler = (category, choice, questionId, questionContainer, questionTitle, choiceBtnContainer) => {
  userAnswerlog.addUserAnswer(category, choice, questionId);
  removeChildren(questionContainer, questionTitle, choiceBtnContainer);

  if (questionId === 8) {
    const quizResults = userAnswerlog.getUserAnswerLog();
    
    getQuizResults(quizResults);
    return;
  }

  const newQuestionId = questionId + 1
  renderQuestion(questions[questionId].question, questions[questionId].answers, questions[questionId].category, newQuestionId);
}

/**
 * Restarts quiz by refreshing the answer log, clearing the plant quiz section and re-rendering the section. 
 */
export const restartQuizHandler = () => {
  const { plantQuiz } = domElements;

  userAnswerlog.refreshAnswerLog();
  clearSection(plantQuiz, 'PLANT_QUIZ');
  renderPlantQuiz();
}

/**
 * Starts quiz - begin first question.
 * @param {HTMLElement} quizSubheader 
 * @param {HTMLElement} startQuizBtn 
 * @param {HTMLElement} quizContainer 
 */
export const startQuizBtnHandler = (cardContainer, quizSubtitle, quizDescription, startQuizBtn, quizContainer, quizTitle, restartQuizBtn) => {
  hideElements(cardContainer, quizSubtitle, quizDescription, startQuizBtn)
  restartQuizBtn.style.display = 'block';
  quizTitle.style.display = 'none';

  localEventManager.addEventListener(restartQuizBtn, 'click', () => {
    restartQuizHandler(quizContainer);
  }, 'PLANT_QUIZ');

  renderQuestion(questions[0].question, questions[0].answers, questions[0].category, 1);
}

/**
 * Handles result container click. Hides quiz container, displays plant information page and renders plant details.
 * @param {HTMLElement} quizContainer 
 * @param {HTMLElement} plantInfoContainer 
 * @param {Object} result 
 */
export const resultContainerHandler = (quizContainer, plantInfoContainer, result) => {
  hideElements(quizContainer);
  showElements('block', plantInfoContainer);
  renderPlantDetails(result, plantInfoContainer, '← back to results', '.plant-quiz', renderPlantQuiz);
}