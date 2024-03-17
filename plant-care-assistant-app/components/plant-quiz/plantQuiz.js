//plantQuiz.js

import { quizPlantData } from "../data";
import { createElement, domElements, prepareDashboard } from "../domManipulation"
import { localEventManager } from "../eventHandling";
import { appendChildren } from "../utility";
import { createPlantQuizElements, createResultElements } from "./domManipulation";
import { choiceBtnClickHandler, startQuizBtnHandler } from "./eventHandling";
import { randomiseArray } from "./utility";

/**
 * TODO
 * - quiz banner image
 * - plant results need to have title, image, description and button to view the unique plant page (takes you to discover)
 * - extra features for the quiz (sliders, progress bar etc...)
 */

/**
 * Initialises the plant quiz by prepareing the dashboard and rendering the quiz on screen.
 */
export const startPlantQuiz = () => {
  const { plantQuiz, myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;
  prepareDashboard(plantQuizBtn, myPlantsBtn, discoverBtn);

  if (plantQuiz.classList.contains('active')) {
    return;
  } else {
    renderPlantQuiz();
  }
}

/**
 * Renders the initial quiz state on screen.
 */
export const renderPlantQuiz = () => {
  const { plantQuiz } = domElements;
  const { quizTitle, quizSubheader, startQuizBtn } = createPlantQuizElements();

  appendChildren(plantQuiz, quizTitle, quizSubheader, startQuizBtn);
  plantQuiz.classList.add('active');
  localEventManager.addEventListener(startQuizBtn, 'click', () => {
    startQuizBtnHandler(quizTitle, quizSubheader, startQuizBtn, plantQuiz);
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
  const { plantQuiz } = domElements;
  const questionTitle = createElement({tagName: 'h1', textContent: questionText, classEl: 'question-title'});
  const choiceBtnContainer = createElement({tagName: 'div', classEl: 'choice-btn-container'});

  appendChildren(plantQuiz, questionTitle, choiceBtnContainer);
  
  choices.forEach(choice => {
    const choiceBtn = createElement({tagName: 'button', textContent: choice, classEl: 'choice-btn'});
    appendChildren(choiceBtnContainer, choiceBtn);
    localEventManager.addEventListener(choiceBtn, 'click', () => {
      choiceBtnClickHandler(category, choice, questionId, plantQuiz, questionTitle, choiceBtnContainer)
    })
  });
}


/**
 * Manages functions related to user answers. Add answer, clear answer log and get answer log.
 * @returns 
 */
const userAnswerManager = () => {
  let userAnswerLog = {};

  return {
    addUserAnswer: (category, answer) => {
      if (!userAnswerLog[category]) {
        userAnswerLog[category] = answer;
      } else {
        userAnswerLog[category].push(answer);
      }
      console.log(userAnswerLog);
    },
    refreshAnswerLog: () => {
      userAnswerLog = {};
      console.log(userAnswerLog);
    },
    getUserAnswerLog: () => {
      return userAnswerLog;
    }
  }
}

/**
 * Get results of the quiz. Match suitable plants to users choices and render results on screen.
 * @param {Object} userAnswers 
 */
export const getQuizResults = (userAnswers) => {
  const plantData = quizPlantData;

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
 * @param {} results 
 */
const renderQuizResults = (results) => {
  const { plantQuiz } = domElements;

  let displayedResults = results;
  if (results.length > 2) {
    displayedResults = randomiseArray(results, 2);
  }

  displayedResults.forEach(result => {
    const { resultTitle } = createResultElements(result);
    appendChildren(plantQuiz, resultTitle);
  })
}


export const userAnswerlog = userAnswerManager();