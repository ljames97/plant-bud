// plantQuizDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { createElement } from "../utils/globalDomUtils";
import { appendChildren } from "../utils/gobalUtility";

/**
 * Create result title element.
 * @param {Object} result 
 * @returns {HTMLElement} Result title.
 */
export const createResultElements = (result) => {
  const resultContainer = createElement({tagName: 'div', classEl: ['result-container']});
  const resultTitle = createElement({tagName: 'p', textContent: result.name, classEl: ['result-title']});
  const resultImageContainer = createElement({tagName: 'div', classEl: ['result-image-container']});
  const resultImage = createElement({tagName: 'img'});
  resultImage.src = result.image;

  appendChildren(resultImageContainer, resultImage);
  appendChildren(resultContainer, resultImageContainer, resultTitle);

  return { resultContainer }
}

/**
 * Creates plant quiz elements.
 * @returns {Object} Plant quiz elements.
 */
export const createPlantQuizElements = () => {
  const quizContainer = createElement({tagName: 'div', classEl: ['quiz-container']});
  const quizTitle = createElement({tagName: 'h1', classEl: ['section-title'], textContent: 'Plant Quiz'});
  // const quizBanner = createElement({tagName: 'img', classEl: ['quiz-banner']});
  // const quizBannerContainer = createElement({tagName: 'div', classEl: ['quiz-banner-container']});
  const questionContainer = createElement({tagName: 'div', classEl: ['question-container']});
  const quizSubtitle = createElement({tagName: 'p', textContent: 'Find suitable plants', classEl: ['quiz-subheader']});
  const quizDescription = createElement({tagName: 'p', classEl: ['quiz-description'], textContent: 'Take the plant quiz to find out which plants are best suited for you!'});
  const startQuizBtn = createElement({tagName: 'button', textContent: 'Start Quiz', classEl: ['start-quiz-btn']});
  const restartQuizBtn = createElement({tagName: 'div', classEl: ['back-button']});
  const backButtonImg = createElement({tagName: 'img'});
  backButtonImg.src = '../../public/back-button-light.png';
  // quizBanner.src = '../../public/plant-quiz-banner.png';

  const snakePlantCard = createPlantCard('Snake Plant', 'For beginners', '../../public/snake-plant.png');
  const peaceLilyCard = createPlantCard('Peace Lily', 'Flowering plant', '../../public/peace-lily.png');
  const cardContainer = createElement({tagName: 'div', classEl: ['card-container']});

  appendChildren(cardContainer, snakePlantCard, peaceLilyCard);
  appendChildren(restartQuizBtn, backButtonImg);

  return { quizContainer, quizTitle, questionContainer, quizSubtitle, cardContainer, quizDescription, startQuizBtn, restartQuizBtn };
}

const createPlantCard = (title, subtitle, imageSrc) => {
  const plantCard = createElement({tagName: 'div', classEl: ['plant-card']});
  const cardTitle = createElement({tagName: 'p', textContent: title, classEl: ['card-title']});
  const cardSubtitle = createElement({tagName: 'p', textContent: subtitle, classEl: ['card-subtitle']});
  const cardImageContainer = createElement({tagName: 'div', classEl: ['card-image-container']});
  const cardImage = createElement({tagName: 'img', classEl: ['card-image']});

  cardImage.src = imageSrc;

  appendChildren(cardImageContainer, cardImage);
  appendChildren(plantCard, cardTitle, cardSubtitle, cardImageContainer);

  return plantCard;
}