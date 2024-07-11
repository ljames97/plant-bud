// navigation.js

import { domElements } from "./elementsManager";

/**
 * Highlight the active dashboard button. Eg. My Plants, Plant Quiz or Discover.
 */
export const dashboardNavButtonHighlight = () => {
  const { myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn, homeBtn } = domElements;
  const dashboardButtons = [myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn, homeBtn];

  dashboardButtons.forEach(button => {
    if (button.classList.contains('active')) {
      button.classList.add('button-active');
      button.classList.remove('button-inactive');
      const iconContainer = button.querySelector('.icon-container');
      iconContainer.style.backgroundImage = `url(${button.darkIcon})`;
    } else {
      button.classList.add('button-inactive');
      button.classList.remove('button-active');
      const iconContainer = button.querySelector('.icon-container');
      iconContainer.style.backgroundImage = `url(${button.lightIcon})`;
    }
  });
}

/**
 * Highlights the active button and adds/removes 'active' class from the button class list.
 * Best used for highlighting navigation buttons.
 * @param {HTMLElement} activeBtn 
 * @param {String} activeBtnColor 
 * @param {String} inactiveBtnColor 
 * @param {String} activeTextColor 
 * @param {String} inactiveTextColor 
 * @param  {...HTMLElement} inactiveBtns 
 */
export const buttonHighlight = (activeBtn, activeBtnColor, inactiveBtnColor, activeTextColor, inactiveTextColor, ...inactiveBtns) => {
  activeBtn.classList.add('active');
  activeBtn.style.backgroundColor = activeBtnColor;
  activeBtn.style.color = activeTextColor;

  inactiveBtns.forEach(button => {
    button.style.backgroundColor = inactiveBtnColor;
    button.style.color = inactiveTextColor;
    button.classList.remove('active');
  });
}