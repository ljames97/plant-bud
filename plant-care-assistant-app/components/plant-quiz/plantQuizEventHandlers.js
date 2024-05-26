// plantQuizEventHandling.js
/**
 * Event handler logic.
 */

import { questions } from "../utils/data";
import { clearSection, createElement, domElements } from "../utils/globalDomUtils";
import { localEventManager } from "../utils/globalEventHandlers";
import { appendChildren, hideElements, removeChildren } from "../utils/gobalUtility";
import { getQuizResults, renderPlantQuiz, renderQuestion, userAnswerlog } from "./plantQuizMain";

/**
 * Handle user choice for a given question and add choices to the userAnswerLog.
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
 * Restart quiz by refreshing the answer log, clearing the plant quiz section and re-rendering the section. 
 */
export const restartQuizHandler = () => {
  const { plantQuiz } = domElements;

  userAnswerlog.refreshAnswerLog();
  clearSection(plantQuiz, 'PLANT_QUIZ');
  renderPlantQuiz();
}

/**
 * Start quiz - begin first question.
 * @param {HTMLElement} quizSubheader 
 * @param {HTMLElement} startQuizBtn 
 * @param {HTMLElement} quizContainer 
 */
export const startQuizBtnHandler = (cardContainer, quizSubtitle, quizDescription, startQuizBtn, quizContainer) => {
  hideElements(cardContainer, quizSubtitle, quizDescription, startQuizBtn)

  const restartQuizBtn = document.querySelector('.back-button');
  localEventManager.addEventListener(restartQuizBtn, 'click', () => {
    restartQuizHandler(quizContainer);
  }, 'PLANT_QUIZ');

  renderQuestion(questions[0].question, questions[0].answers, questions[0].category, 1);
}