//plantQuizMain.js
/**
 * Main file for the Plant Quiz module, centralising the module's functionality.
 * For rendering the plant quiz, questions and resuls and for storing data in the userAnswerLog.
 */

import { plantDirectory } from "../utils/data";
import { createElement, domElements } from "../utils/globalDomManipulation"
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren, hideElements, randomiseArray, removeChildren, showElements } from "../utils/gobalUtility";
import { createPlantQuizElements, createResultElements } from "./plantQuizDomManipulation";
import { choiceBtnClickHandler, startQuizBtnHandler } from "./plantQuizEventHandling";
import { renderPlantDetails } from "../plant-page/plantPageMain";

/**
 * Renders the initial quiz state on screen.
 * @param {HTMLElement} plantQuiz 
 */
export const renderPlantQuiz = () => {
  const { plantQuiz } = domElements;
  const { quizContainer, quizTitle, questionContainer, cardContainer, quizSubtitle, quizDescription, startQuizBtn, moreInfoBtn, restartQuizBtn } = createPlantQuizElements();

  appendChildren(questionContainer, quizSubtitle, quizDescription, cardContainer, startQuizBtn, moreInfoBtn);
  appendChildren(quizContainer, restartQuizBtn, quizTitle, questionContainer);
  appendChildren(plantQuiz, quizContainer);

  // plantQuiz.classList.add('active');
  restartQuizBtn.style.display = 'none';

  localEventManager.addEventListener(startQuizBtn, 'click', () => {
    startQuizBtnHandler(cardContainer, quizSubtitle, quizDescription, startQuizBtn, moreInfoBtn, quizContainer);
    restartQuizBtn.style.display = 'block';
    quizTitle.style.display = 'none';
  }, 'PLANT_QUIZ');
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

/**
 * Create choice buttons and assign event listeners to each button.
 * @param {Array} choices 
 * @param {String} category 
 * @param {Number} questionId 
 * @param {HTMLElement} questionContainer 
 * @param {String} questionTitle 
 * @param {HTMLElement} choiceBtnContainer 
 */
const createChoiceButtons = (choices, category, questionId, questionContainer, questionTitle, choiceBtnContainer) => {
  choices.forEach(choice => {
    const choiceBtn = createElement({tagName: 'button', textContent: choice, classEl: ['choice-btn']});
    appendChildren(choiceBtnContainer, choiceBtn);
    localEventManager.addEventListener(choiceBtn, 'click', () => {
      choiceBtnClickHandler(category, choice, questionId, questionContainer, questionTitle, choiceBtnContainer)
    }, 'PLANT_QUIZ')
  });
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

/**
 * Get results of the quiz. Match suitable plants to the users choices and render results on screen.
 * @param {Object} userAnswers - eg. 'skill': 'beginner', 
 */
export const getQuizResults = (userAnswers) => {
  const plantData = plantDirectory;
  const { suitablePlants, closestPlants } = findSuitablePlants(userAnswers, plantData);

  // if there are no suitable plants, the next closest suitable plants will be displayed instead.
  if (suitablePlants.length === 0) {
    renderQuizResults(closestPlants);
  } else {
    renderQuizResults(suitablePlants);
  }
}

/**
 * Find plants with criteria that match the user answers.
 * @param {*} userAnswers 
 * @param {*} plantData 
 * @returns 
 */
const findSuitablePlants = (userAnswers, plantData) => {
  const suitablePlants = plantData.filter(plant => {
    return plant.skill.includes(userAnswers.skill)
    && plant.location.includes(userAnswers.location)
    && plant.flowering.includes(userAnswers.flowering)
    && plant.size.includes(userAnswers.size)
    && plant.transferToOutdoors.includes(userAnswers.transferToOutdoors)
    && plant.time.includes(userAnswers.time)
    && plant.interest.includes(userAnswers.interest)
    && plant.lowEffort.includes(userAnswers.lowEffort)
  });

  const closestPlants = plantData.filter(plant => {
    return plant.skill.includes(userAnswers.skill)
    && plant.size.includes(userAnswers.size)
    && plant.transferToOutdoors.includes(userAnswers.transferToOutdoors)
  });

  return { suitablePlants, closestPlants };
}

/**
 * Render quiz results on screen.
 * @param {Array} results 
 */
export const renderQuizResults = (results) => {
  const { plantQuiz } = domElements;

  const quizContainer = document.querySelector('.quiz-container');
  const questionContainer = document.querySelector('.question-container');
  const plantInfoContainer = createElement({tagName: 'div', classEl: ['plant-info']});
  plantInfoContainer.style.display = 'none'
  appendChildren(plantQuiz, plantInfoContainer);
  removeChildren(quizContainer, questionContainer)

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
      hideElements(quizContainer);
      showElements('block', plantInfoContainer);
      renderPlantDetails(result, plantInfoContainer, '← back to results', '.plant-quiz', renderPlantQuiz);
    }, 'PLANT_QUIZ')
  })
}

export const userAnswerlog = userAnswerManager();