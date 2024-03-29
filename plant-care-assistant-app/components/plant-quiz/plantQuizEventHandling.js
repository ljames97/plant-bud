// plantQuizEventHandling.js
/**
 * Event handler logic.
 */

import { questions } from "../utils/data";
import { clearSection, createElement, domElements } from "../utils/globalDomManipulation";
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren, hideElements, removeChildren } from "../utils/gobalUtility";
import { getQuizResults, renderPlantQuiz, renderQuestion, userAnswerlog } from "./plantQuizMain";

/**
 * Handle user choice for a given question, add choices to the userAnswerLog.
 * @param {*} category 
 * @param {*} choice 
 * @param {*} questionId 
 * @param {*} plantQuiz 
 * @param {*} questionTitle 
 * @param {*} choiceBtnContainer 
 * @returns 
 */
export const choiceBtnClickHandler = (category, choice, questionId, quizContainer, questionTitle, choiceBtnContainer) => {
  userAnswerlog.addUserAnswer(category, choice, questionId);
  removeChildren(quizContainer, questionTitle, choiceBtnContainer);

  if (questionId === 8) {
    const quizResults = userAnswerlog.getUserAnswerLog();
    
    getQuizResults(quizResults);
    return;
  }

  const newQuestionId = questionId + 1
  renderQuestion(questions[questionId].question, questions[questionId].answers, questions[questionId].category, newQuestionId);
}

/**
 * Restart quiz.
 */
export const restartQuizHandler = () => {
  const { plantQuiz } = domElements;

  userAnswerlog.refreshAnswerLog();
  clearSection(plantQuiz, 'PLANT_QUIZ');
  renderPlantQuiz();
}

/**
 * Start quiz - begin first question.
 * @param {HTMLElement} quizTitle 
 * @param {HTMLElement} quizSubheader 
 * @param {HTMLElement} startQuizBtn 
 * @param {HTMLElement} plantQuiz 
 */
export const startQuizBtnHandler = (quizTitle, quizSubheader, startQuizBtn, quizContainer) => {
  hideElements(quizTitle, quizSubheader, startQuizBtn)

  const restartQuizBtn = createElement({tagName: 'p', textContent: '← restart quiz'})
  localEventManager.addEventListener(restartQuizBtn, 'click', () => {
    restartQuizHandler(quizContainer);
  }, 'PLANT_QUIZ')
  appendChildren(quizContainer, restartQuizBtn);

  renderQuestion(questions[0].question, questions[0].answers, questions[0].category, 1);
}