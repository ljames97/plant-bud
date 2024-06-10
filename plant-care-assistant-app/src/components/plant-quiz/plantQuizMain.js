//plantQuizMain.js
/**
 * Main file for the Plant Quiz module, centralising the module's functionality.
 * For rendering the plant quiz, questions and resuls and for storing data in the userAnswerLog.
 */

import './plantQuiz.css';
import { createPlantQuizElements } from "./plantQuizDomUtils";

/**
 * Renders the initial quiz state on screen.
 * @param {HTMLElement} plantQuiz 
 */
export const renderPlantQuiz = () => {
  createPlantQuizElements();
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