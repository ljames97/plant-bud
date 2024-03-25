// plantQuizDomManipulation.js
/**
 * For stored dom elements, dynamic elements, and utility functions related to the dom. 
 */

import { createElement } from "../utils/globalDomManipulation";

/**
 * Create result title element.
 * @param {Array} result 
 * @returns 
 */
export const createResultElements = (result) => {
  const resultTitle = createElement({tagName: 'p', textContent: result.name, classEl: 'result-title'});
  return { resultTitle };
}

/**
 * Creates plant quiz elements.
 * @returns Plant quiz elements.
 */
export const createPlantQuizElements = () => {
  const quizContainer = createElement({tagName: 'div', classEl: 'quiz-container'});
  const quizTitle = createElement({tagName: 'h1', classEl: 'section-title', textContent: 'Plant Quiz'});
  const quizSubheader = createElement({tagName: 'p', classEl: 'quiz-subheader', textContent: 'Take the plant quiz to find out which plants are best suited for you!'});
  const quizPhoto = '';
  const startQuizBtn = createElement({tagName: 'button', textContent: 'START'});

  return { quizContainer, quizTitle, quizSubheader, startQuizBtn };
}