//plantQuiz.js

import { questions } from "../data";
import { createElement, domElements, prepareDashboard } from "../domManipulation"
import { localEventManager } from "../eventHandling";
import { appendChildren } from "../utility";

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
const renderPlantQuiz = () => {
  const { plantQuiz } = domElements;
  const { quizTitle, quizSubheader, startQuizBtn } = createPlantQuizElements();

  appendChildren(plantQuiz, quizTitle, quizSubheader, startQuizBtn);
  plantQuiz.classList.add('active');
  localEventManager.addEventListener(startQuizBtn, 'click', () => {

  
  });
}

/**
 * Creates plant quiz elements.
 * @returns Plant quiz elements.
 */
const createPlantQuizElements = () => {
  const quizTitle = createElement({tagName: 'h1', classEl: 'section-title', textContent: 'Plant Quiz'});
  const quizSubheader = createElement({tagName: 'p', classEl: 'quiz-subheader', textContent: 'Take the plant quiz to find out which plants are best suited for you!'});
  const quizPhoto = '';
  const startQuizBtn = createElement({tagName: 'button', textContent: 'START'});

  return { quizTitle, quizSubheader, startQuizBtn };
}

const startQuizBtnHandler = () => {
  renderQuestion(questions[0].question, questions[0].answers, );
}

const renderQuestion = (questionText, choices) => {
  
  

}

const userAnswerLog = () => {
  const userAnswerLog = [];

  return {
    
  }
}

const generatePlantQuizQuestions = () => {
  

  return questions;
}
