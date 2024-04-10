// plantQuizDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { createElement } from "../utils/globalDomManipulation";
import { appendChildren } from "../utils/gobalUtility";

/**
 * Create result title element.
 * @param {Object} result 
 * @returns {HTMLElement} Result title.
 */
export const createResultElements = (result) => {
  const resultTitle = createElement({tagName: 'p', textContent: result.name, classEl: 'result-title'});
  return { resultTitle }
}

/**
 * Creates plant quiz elements.
 * @returns {Object} Plant quiz elements.
 */
export const createPlantQuizElements = () => {
  const quizContainer = createElement({tagName: 'div', classEl: 'quiz-container'});
  const quizTitle = createElement({tagName: 'h1', classEl: 'section-title', textContent: 'Plant Quiz'});
  const quizBanner = createElement({tagName: 'img', classEl: 'quiz-banner'});
  const quizBannerContainer = createElement({tagName: 'div', classEl: 'quiz-banner-container'});
  const questionContainer = createElement({tagName: 'div', classEl: 'question-container'});
  const quizSubtitle = createElement({tagName: 'p', textContent: 'Find suitable plants', classEl: 'quiz-subheader'});
  const quizDescription = createElement({tagName: 'p', classEl: 'quiz-description', textContent: 'Take the plant quiz to find out which plants are best suited for you!'});
  const startQuizBtn = createElement({tagName: 'button', textContent: 'Start Quiz', classEl: 'start-quiz-btn'});
  const moreInfoBtn = createElement({tagName: 'button', textContent: 'More Info', classEl: 'more-info-btn'})
  const restartQuizBtn = createElement({tagName: 'p', textContent: '← restart quiz', classEl: 'restart-quiz-btn'})

  quizBanner.src = '../../public/plant-quiz-banner.png';

  // creating plant card - put into seperate function. Do same for other elements, cchange into factory function
  const snakePlantCard = createPlantCard('Snake Plant', 'For beginners', '../../public/snake-plant.png');
  const peaceLilyCard = createPlantCard('Peace Lily', 'Flowering plant', '../../public/peace-lily.png');
  const cardContainer = createElement({tagName: 'div', classEl: 'card-container'});

  appendChildren(cardContainer, snakePlantCard, peaceLilyCard);

  return { quizContainer, quizTitle, quizBanner, quizBannerContainer, questionContainer, quizSubtitle, cardContainer, quizDescription, startQuizBtn, moreInfoBtn, restartQuizBtn };
}

const createPlantCard = (title, subtitle, imageSrc) => {
  const plantCard = createElement({tagName: 'div', classEl: 'plant-card'});
  const cardTitle = createElement({tagName: 'p', textContent: title, classEl: 'card-title'});
  const cardSubtitle = createElement({tagName: 'p', textContent: subtitle, classEl: 'card-subtitle'});
  const cardImageContainer = createElement({tagName: 'div', classEl: 'card-image-container'});
  const cardImage = createElement({tagName: 'img', classEl: 'card-image'});

  cardImage.src = imageSrc;

  appendChildren(cardImageContainer, cardImage);
  appendChildren(plantCard, cardTitle, cardSubtitle, cardImageContainer);

  return plantCard;
}