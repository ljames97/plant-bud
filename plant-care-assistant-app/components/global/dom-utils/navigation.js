/**
 * Highlight the active dashboard button. Eg. My Plants, Plant Quiz or Discover.
 */
export const dashboardNavButtonHighlight = () => {
  const { myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn } = domElements;
  const dashboardButtons = [myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn];

  dashboardButtons.forEach(button => {
    if (button.classList.contains('active')) {
      button.style.backgroundColor = '#fcfaf7';
      const iconContainer = button.querySelector('.icon-container');
      iconContainer.style.backgroundImage = `url(${button.darkIcon})`;
    } else {
      button.style.backgroundColor = 'rgba(172, 172, 172, 0.3)'
      const iconContainer = button.querySelector('.icon-container');
      iconContainer.style.backgroundImage = `url(${button.lightIcon})`;
    }
  });
}

/**
 * Highlights the active button and adds/removes 'active' class from the button class list.
 * Best used for highlighting navigation buttons.
 * @param {*} activeBtn 
 * @param {*} activeBtnColor 
 * @param {*} inactiveBtnColor 
 * @param {*} activeTextColor 
 * @param {*} inactiveTextColor 
 * @param  {...any} inactiveBtns 
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