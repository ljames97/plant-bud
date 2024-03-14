//plantQuiz.js

import { questions, quizPlantData } from "../data";
import { createElement, domElements, prepareDashboard } from "../domManipulation"
import { localEventManager } from "../eventHandling";
import { appendChildren, hideElements, removeChildren, showElements } from "../utility";

/**
 * TODO
 * - function documentation
 * - seperate files for plant quiz categories
 * - cut down large functions
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
const renderPlantQuiz = () => {
  const { plantQuiz } = domElements;
  const { quizTitle, quizSubheader, startQuizBtn } = createPlantQuizElements();

  appendChildren(plantQuiz, quizTitle, quizSubheader, startQuizBtn);
  plantQuiz.classList.add('active');
  localEventManager.addEventListener(startQuizBtn, 'click', () => {
    startQuizBtnHandler(quizTitle, quizSubheader, startQuizBtn, plantQuiz);
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

const startQuizBtnHandler = (quizTitle, quizSubheader, startQuizBtn, plantQuiz) => {
  hideElements(quizTitle, quizSubheader, startQuizBtn)

  const restartQuizBtn = createElement({tagName: 'p', textContent: '← restart quiz'})
  localEventManager.addEventListener(restartQuizBtn, 'click', () => {
    restartQuizHandler(plantQuiz);
  })
  appendChildren(plantQuiz, restartQuizBtn);

  renderQuestion(questions[0].question, questions[0].answers, questions[0].category, 1);
}

const restartQuizHandler = (plantQuiz) => {
  userAnswerlog.refreshAnswerLog();
  plantQuiz.innerHTML = '';
  renderPlantQuiz();
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
      choiceBtnClickHandler(category, choice, questionId, plantQuiz, questionTitle, choiceBtnContainer)
    })
  });
}

const choiceBtnClickHandler = (category, choice, questionId, plantQuiz, questionTitle, choiceBtnContainer) => {
    userAnswerlog.addUserAnswer(category, choice, questionId);
    removeChildren(plantQuiz, questionTitle, choiceBtnContainer);

    if (questionId === 8) {
      const quizResults = userAnswerlog.getUserAnswerLog();
      
      getQuizResults(quizResults);
      return;
    }

    const newQuestionId = questionId + 1
    renderQuestion(questions[questionId].question, questions[questionId].answers, questions[questionId].category, newQuestionId);
}

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

const getQuizResults = (userAnswers) => {
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

const renderQuizResults = (results) => {
  const { plantQuiz } = domElements;

  let displayedResults = results;
  if (results.length > 3) {
    displayedResults = randomiseArray(results, 2);
  }

  displayedResults.forEach(result => {
    const { resultTitle } = createResultElements(result);
    appendChildren(plantQuiz, resultTitle);
  })
}

const createResultElements = (result) => {
  const resultTitle = createElement({tagName: 'p', textContent: result.name, classEl: 'result-title'});
  return { resultTitle };
}

const randomiseArray = (arr, size) => {
  let shuffled = arr.slice(0), i = arr.length, temp, index;
  while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}

const userAnswerlog = userAnswerManager();