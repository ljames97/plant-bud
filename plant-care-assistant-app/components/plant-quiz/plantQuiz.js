//plantQuiz.js

import { questions } from "../data";
import { createElement, domElements, prepareDashboard } from "../domManipulation"
import { localEventManager } from "../eventHandling";
import { appendChildren, hideElements } from "../utility";

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
    startQuizBtnHandler(quizTitle, quizSubheader, startQuizBtn);
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

const startQuizBtnHandler = (quizTitle, quizSubheader, startQuizBtn) => {
  hideElements(quizTitle, quizSubheader, startQuizBtn)
  renderQuestion(questions[0].question, questions[0].answers, questions[0].category, 1);
}

const renderQuestion = (questionText, choices, category, questionId) => {
  const { plantQuiz } = domElements;
  const questionTitle = createElement({tagName: 'h1', textContent: questionText, classEl: 'question-title'});
  const choiceBtnContainer = createElement({tagName: 'div', classEl: 'choice-btn-container'});

  appendChildren(plantQuiz, questionTitle, choiceBtnContainer);
  
  choices.forEach(choice => {
    const choiceBtn = createElement({tagName: 'button', textContent: choice, classEl: 'choice-btn'});
    appendChildren(choiceBtnContainer, choiceBtn);
    localEventManager.addEventListener(choiceBtn, 'click', () => {
      choiceBtnClickHandler(category, choice, questionId)
    })
  });
}

const choiceBtnClickHandler = (category, choice, questionId) => {
    userAnswerlog.addUserAnswer(category, choice, questionId);
    const newQuestionId = questionId + 1
    renderQuestion(questions[questionId].question, questions[questionId].answers, questions[questionId].category, newQuestionId);
}

const userAnswerManager = () => {
  const userAnswerLog = {};

  return {
    addUserAnswer: (category, answer) => {
      if (!userAnswerLog[category]) {
        userAnswerLog[category] = [answer];
      } else {
        userAnswerLog[category].push(answer);
      }
      console.log(userAnswerLog);
    },
    userAnswerLog
  }
}

const userAnswerlog = userAnswerManager();
