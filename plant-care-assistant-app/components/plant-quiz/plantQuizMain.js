//plantQuizMain.js
/**
 * Main file for the Plant Quiz module, centralising the module's functionality.
 * For rendering the plant quiz, questions and resuls and for storing data in the userAnswerLog.
 */

import { domElements } from "../utils/globalDomUtils"
import { localEventManager } from "../utils/globalEventHandlers";
import { appendChildren } from "../utils/gobalUtility";
import { createPlantQuizElements } from "./plantQuizDomUtils";
import { startQuizBtnHandler } from "./plantQuizEventHandlers";

/**
 * Renders the initial quiz state on screen.
 * @param {HTMLElement} plantQuiz 
 */
export const renderPlantQuiz = () => {
  const { plantQuiz } = domElements;
  const { quizContainer, quizTitle, questionContainer, cardContainer, quizSubtitle, quizDescription, startQuizBtn, restartQuizBtn } = createPlantQuizElements();

  appendChildren(questionContainer, quizSubtitle, quizDescription, cardContainer, startQuizBtn);
  appendChildren(quizContainer, restartQuizBtn, quizTitle, questionContainer);
  appendChildren(plantQuiz, quizContainer);

  restartQuizBtn.style.display = 'none';

  localEventManager.addEventListener(startQuizBtn, 'click', () => {
    startQuizBtnHandler(cardContainer, quizSubtitle, quizDescription, startQuizBtn, quizContainer, quizTitle, restartQuizBtn);
  }, 'PLANT_QUIZ');
}

/**
 * Manages functions related to user answers. Add answer, clear answer log and get answer log.
 * @returns {Object} Methods for adding, refreshing and getting the userAnswers.
 */
const userAnswerManager = () => {
  let userAnswers = {};

  return {
    addUserAnswer: (category, answer) => {
      userAnswers[category] = answer;
    },
    refreshAnswerLog: () => {
      userAnswers = {};
    },
    getUserAnswerLog: () => {
      return userAnswers;
    }
  }
}

export const userAnswerlog = userAnswerManager();