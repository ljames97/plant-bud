import { questions } from "../data";
import { createElement } from "../domManipulation";
import { localEventManager } from "../eventHandling";
import { appendChildren, hideElements, removeChildren } from "../utility";
import { getQuizResults, renderPlantQuiz, renderQuestion, userAnswerlog } from "./plantQuiz";

/**
 * Handle user choice for a given question, add choices to the userAnswerLog.
 * @param {*} category 
 * @param {*} choice 
 * @param {*} questionId 
 * @param {*} plantQuiz 
 * @param {*} questionTitle 
 * @param {*} choiceBtnContainer 
 * @returns 
 */
export const choiceBtnClickHandler = (category, choice, questionId, plantQuiz, questionTitle, choiceBtnContainer) => {
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

/**
 * Restart quiz.
 * @param {HTMLElement} plantQuiz 
 */
export const restartQuizHandler = (plantQuiz) => {
  userAnswerlog.refreshAnswerLog();
  plantQuiz.innerHTML = '';
  renderPlantQuiz();
}

/**
 * Start quiz - begin first question.
 * @param {HTMLElement} quizTitle 
 * @param {HTMLElement} quizSubheader 
 * @param {HTMLElement} startQuizBtn 
 * @param {HTMLElement} plantQuiz 
 */
export const startQuizBtnHandler = (quizTitle, quizSubheader, startQuizBtn, plantQuiz) => {
  hideElements(quizTitle, quizSubheader, startQuizBtn)

  const restartQuizBtn = createElement({tagName: 'p', textContent: '← restart quiz'})
  localEventManager.addEventListener(restartQuizBtn, 'click', () => {
    restartQuizHandler(plantQuiz);
  })
  appendChildren(plantQuiz, restartQuizBtn);

  renderQuestion(questions[0].question, questions[0].answers, questions[0].category, 1);
}