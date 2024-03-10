//plantQuiz.js

import { domElements, prepareDashboard } from "../domManipulation"

export const startPlantQuiz = () => {
  const { myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;
  prepareDashboard(plantQuizBtn, myPlantsBtn, discoverBtn);
  renderPlantQuiz();
}

const renderPlantQuiz = () => {

}

