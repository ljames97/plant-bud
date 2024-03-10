// dashboard.js

import { domElements } from "./domManipulation"


export const dashboardNavButtonHighlight = () => {
  const { myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;
  const dashboardButtons = [myPlantsBtn, plantQuizBtn, discoverBtn];
  dashboardButtons.forEach(button => {
    if (button.classList.contains('active')) {
      button.style.backgroundColor = '#cd7647';
    } else {
      button.style.backgroundColor = '#8F4721'
    }
  });
}