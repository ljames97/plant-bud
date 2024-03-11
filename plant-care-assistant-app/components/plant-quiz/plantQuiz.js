//plantQuiz.js

import { createElement, domElements, prepareDashboard } from "../domManipulation"
import { appendChildren } from "../utility";

export const startPlantQuiz = () => {
  const { plantQuiz, myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;
  prepareDashboard(plantQuizBtn, myPlantsBtn, discoverBtn);

  if (plantQuiz.classList.contains('active')) {
    return;
  } else {
    renderPlantQuiz();
  }
}

const renderPlantQuiz = () => {
  const { plantQuiz } = domElements;
  const { quizTitle, quizSubheader, startQuizBtn } = createPlantQuizElements();

  appendChildren(plantQuiz, quizTitle, quizSubheader, startQuizBtn);
  plantQuiz.classList.add('active');


}

const createPlantQuizElements = () => {
  const quizTitle = createElement({tagName: 'h1', classEl: 'section-title', textContent: 'Plant Quiz'});
  const quizSubheader = createElement({tagName: 'p', classEl: 'quiz-subheader', textContent: 'Take the plant quiz to find out which plants are best suited for you!'});
  const quizPhoto = '';
  const startQuizBtn = createElement({tagName: 'button', textContent: 'START'});

  return { quizTitle, quizSubheader, startQuizBtn };
}
