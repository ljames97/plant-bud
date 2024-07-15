// plantQuizDomManipulation.js

/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { backButtonLight, peaceLily, snakePlant } from "../../images";
import { createElement, domElements } from "../global/dom-utils";
import { localEventManager } from "../global/event-handlers";
import { appendChildren, randomiseArray, removeChildren } from "../global/utils";
import { choiceBtnClickHandler, resultContainerHandler, startQuizBtnHandler } from "./plantQuizEventHandlers";

/**
 * Creates and returns result title element.
 * @param {Object} result 
 * @returns {HTMLElement} Result title.
 */
export const createResultElements = (result) => {
  const resultContainer = createElement({tagName: 'div', classEl: ['result-container']});
  const resultTitle = createElement({tagName: 'p', textContent: result.name, classEl: ['result-title']});
  const resultImageContainer = createElement({tagName: 'div', classEl: ['result-image-container']});
  const resultImage = createElement({tagName: 'img', alt: 'Plant quiz result'});
  resultImage.src = result.image;

  appendChildren(resultImageContainer, resultImage);
  appendChildren(resultContainer, resultImageContainer, resultTitle);

  return { resultContainer }
}

/**
 * Creates and returns plant quiz elements.
 * @returns {Object} Plant quiz elements.
 */
export const createPlantQuizElements = () => {
  const { plantQuiz } = domElements;
  const quizContainer = createElement({tagName: 'div', classEl: ['quiz-container', 'flex']});
  const quizTitle = createElement({tagName: 'h1', classEl: ['section-title'], textContent: 'Plant Quiz'});
  const questionContainer = createElement({tagName: 'div', classEl: ['question-container']});
  const quizSubtitle = createElement({tagName: 'p', textContent: 'Find suitable plants', classEl: ['quiz-subheader']});
  const quizDescription = createElement({tagName: 'p', classEl: ['quiz-description'], textContent: 'Take the plant quiz to find out which plants are best suited for you!'});
  const startQuizBtn = createElement({tagName: 'button', textContent: 'Start Quiz', classEl: ['start-quiz-btn']});
  const restartQuizBtn = createElement({tagName: 'div', classEl: ['back-button', 'restart-quiz-button'], ariaLabel: 'Restart quiz'});
  const backButtonImg = createElement({tagName: 'img', alt: 'Back button'});
  backButtonImg.src = backButtonLight;
  restartQuizBtn.classList.add('hidden');

  const snakePlantCard = createPlantCard('Snake Plant', 'For beginners', snakePlant);
  const peaceLilyCard = createPlantCard('Peace Lily', 'Flowering plant', peaceLily);
  const cardContainer = createElement({tagName: 'div', classEl: ['card-container', 'flex']});

  appendChildren(cardContainer, snakePlantCard, peaceLilyCard);
  appendChildren(restartQuizBtn, backButtonImg);
  appendChildren(questionContainer, quizSubtitle, quizDescription, cardContainer, startQuizBtn);
  appendChildren(quizContainer, restartQuizBtn, quizTitle, questionContainer);
  appendChildren(plantQuiz, quizContainer);

  localEventManager.addEventListener(startQuizBtn, 'click', () => {
    startQuizBtnHandler(cardContainer, quizSubtitle, quizDescription, startQuizBtn, quizContainer, quizTitle, restartQuizBtn);
  }, 'PLANT_QUIZ');

  return { quizContainer, quizTitle, questionContainer, quizSubtitle, cardContainer, quizDescription, startQuizBtn, restartQuizBtn };
}

/**
 * Creates and returns plant card.
 * @param {String} title 
 * @param {String} subtitle 
 * @param {String} imageSrc 
 */
export const createPlantCard = (title, subtitle, imageSrc) => {
  const plantCard = createElement({tagName: 'div', classEl: ['plant-card']});
  const cardTitle = createElement({tagName: 'p', textContent: title, classEl: ['card-title']});
  const cardSubtitle = createElement({tagName: 'p', textContent: subtitle, classEl: ['card-subtitle']});
  const cardImageContainer = createElement({tagName: 'div', classEl: ['card-image-container']});
  const cardImage = createElement({tagName: 'img', classEl: ['card-image'], alt: 'Image of plant'});

  cardImage.src = imageSrc;

  appendChildren(cardImageContainer, cardImage);
  appendChildren(plantCard, cardTitle, cardSubtitle, cardImageContainer);

  return plantCard;
}

/**
 * Displays quiz resuls on screen.
 * @param {Array} results 
 * @param {HTMLElement} quizContainer 
 * @param {HTMLElement} plantInfoContainer 
 */
export const displayQuizResults = (results, quizContainer, plantInfoContainer) => {
  let displayedResults = results;
  if (results.length > 2) {
    displayedResults = randomiseArray(results, 2);
  }
  quizContainer.plantResults = displayedResults;
  plantInfoContainer.quizResult = true;

  displayedResults.forEach(result => {
    const { resultContainer } = createResultElements(result);
    appendChildren(quizContainer, resultContainer);

    localEventManager.addEventListener(resultContainer, 'click', () => {
      resultContainerHandler(quizContainer, plantInfoContainer, result);
    }, 'PLANT_QUIZ');
  });
}

/**
 * Creates and returns quiz containers and appends them to the main plant quiz element.
 * @param {HTMLElement} plantQuiz 
 */
export const initializeQuizContainers = (plantQuiz) => {
  const quizContainer = document.querySelector('.quiz-container');
  const questionContainer = document.querySelector('.question-container');
  const plantInfoContainer = createElement({tagName: 'div', classEl: ['plant-quiz-result-page', 'plant-page-container'], id: 'secondary-plant-page'});
  plantInfoContainer.classList.add('hidden');
  appendChildren(plantQuiz, plantInfoContainer);
  removeChildren(quizContainer, questionContainer);
  return { quizContainer, plantInfoContainer };
}

/**
 * Render quiz results on screen.
 * @param {Array} results 
 */
export const renderQuizResults = (results) => {
  const { plantQuiz } = domElements;
  const { quizContainer, plantInfoContainer } = initializeQuizContainers(plantQuiz);

  displayQuizResults(results, quizContainer, plantInfoContainer);
}

/**
 * Create choice buttons and assign event listeners to each button.
 * @param {Array} choices 
 * @param {String} category 
 * @param {Number} questionId 
 * @param {HTMLElement} questionContainer 
 * @param {String} questionTitle 
 * @param {HTMLElement} choiceBtnContainer 
 */
export const createChoiceButtons = (choices, category, questionId, questionContainer, questionTitle, choiceBtnContainer) => {
  choices.forEach(choice => {
    const choiceBtn = createElement({tagName: 'button', textContent: choice, classEl: ['choice-btn']});
    appendChildren(choiceBtnContainer, choiceBtn);

    localEventManager.addEventListener(choiceBtn, 'click', () => {
      choiceBtnClickHandler(category, choice, questionId, questionContainer, questionTitle, choiceBtnContainer)
    }, 'PLANT_QUIZ')
  });
}

/**
 * Render question on screen based on specific question ID.
 * @param {string} questionText 
 * @param {string} choices 
 * @param {string} category 
 * @param {number} questionId 
 */
export const renderQuestion = (questionText, choices, category, questionId) => {
  const questionContainer = document.querySelector('.question-container');

  const questionTitle = createElement({tagName: 'h1', textContent: questionText, classEl: ['question-title']});
  const choiceBtnContainer = createElement({tagName: 'div', classEl: ['choice-btn-container']});

  appendChildren(questionContainer, questionTitle, choiceBtnContainer);
  createChoiceButtons(choices, category, questionId, questionContainer, questionTitle, choiceBtnContainer);
}