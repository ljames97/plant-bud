//plantQuizMain.js

import { plantDirectory } from "../utils/data";
import { createElement, domElements, prepareDashboard } from "../utils/globalDomManipulation"
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren, hideElements, randomiseArray } from "../utils/gobalUtility";
import { createPlantQuizElements, createResultElements } from "./plantQuizDomManipulation";
import { choiceBtnClickHandler, startQuizBtnHandler } from "./plantQuizEventHandling";

import { renderPlantDetails } from "../plant-page/plantPageMain";


/**
 * Initialises the plant quiz by prepareing the dashboard and rendering the quiz on screen.
 */
export const startPlantQuiz = () => {
  const { myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;

  if (plantQuizBtn.classList.contains('active')) {
    console.log('ACTIVE');
    return;
  }

  if (plantQuizBtn.classList.contains('dormant')) {
    prepareDashboard(plantQuizBtn, myPlantsBtn, discoverBtn);
    return;
  }

  prepareDashboard(plantQuizBtn, myPlantsBtn, discoverBtn);
  renderPlantQuiz();
  plantQuizBtn.classList.add('dormant');
}

/**
 * Renders the initial quiz state on screen.
 */
export const renderPlantQuiz = () => {
  const { plantQuiz } = domElements;
  const { quizContainer, quizTitle, quizSubheader, startQuizBtn } = createPlantQuizElements();

  appendChildren(quizContainer, quizTitle, quizSubheader, startQuizBtn);
  appendChildren(plantQuiz, quizContainer);

  plantQuiz.classList.add('active');

  localEventManager.addEventListener(startQuizBtn, 'click', () => {
    startQuizBtnHandler(quizTitle, quizSubheader, startQuizBtn, quizContainer);
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
  const quizContainer = document.querySelector('.quiz-container');

  const questionTitle = createElement({tagName: 'h1', textContent: questionText, classEl: 'question-title'});
  const choiceBtnContainer = createElement({tagName: 'div', classEl: 'choice-btn-container'});

  appendChildren(quizContainer, questionTitle, choiceBtnContainer);
  
  choices.forEach(choice => {
    const choiceBtn = createElement({tagName: 'button', textContent: choice, classEl: 'choice-btn'});
    appendChildren(choiceBtnContainer, choiceBtn);
    localEventManager.addEventListener(choiceBtn, 'click', () => {
      choiceBtnClickHandler(category, choice, questionId, quizContainer, questionTitle, choiceBtnContainer)
    }, 'PLANT_QUIZ')
  });
}


/**
 * Manages functions related to user answers. Add answer, clear answer log and get answer log.
 * @returns 
 */
const userAnswerManager = () => {
  let userAnswers = {};

  return {
    addUserAnswer: (category, answer) => {
      if (!userAnswers[category]) {
        userAnswers[category] = answer;
      } else {
        userAnswers[category].push(answer);
      }
      console.log(userAnswers);
    },
    refreshAnswerLog: () => {
      userAnswers = {};
      console.log(userAnswers);
    },
    getUserAnswerLog: () => {
      return userAnswers;
    }
  }
}

/**
 * Get results of the quiz. Match suitable plants to users choices and render results on screen.
 * @param {Object} userAnswers 
 */
export const getQuizResults = (userAnswers) => {
  const plantData = plantDirectory;

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

  if (suitablePlants.length === 0) {
    renderQuizResults(closestPlants);
  } else {
    renderQuizResults(suitablePlants);
  }
}

/**
 * Render quiz results on screen.
 * @param {Array} results 
 */
const renderQuizResults = (results) => {
  const { plantQuiz } = domElements;

  const quizContainer = document.querySelector('.quiz-container');
  const plantInfoContainer = createElement({tagName: 'div', classEl: 'plant-info'});
  appendChildren(plantQuiz, plantInfoContainer);

  let displayedResults = results;
  if (results.length > 2) {
    displayedResults = randomiseArray(results, 2);
  }

  displayedResults.forEach(result => {
    const { resultTitle } = createResultElements(result);
    appendChildren(quizContainer, resultTitle);

    localEventManager.addEventListener(resultTitle, 'click', () => {
      console.log(result);
      hideElements(quizContainer);
      renderPlantDetails(result, plantInfoContainer, quizContainer, 'flex', '← back to results', '.plant-quiz', renderPlantQuiz, 'PLANT_QUIZ');
    }, 'PLANT_QUIZ')
  })
}

export const userAnswerlog = userAnswerManager();