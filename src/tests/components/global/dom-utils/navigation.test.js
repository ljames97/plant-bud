// navigation.test.js
/**
 * Unit test for the global navigation related functions.
 */

import { domElements } from "../../../../components/global/dom-utils/elementsManager";
import { buttonHighlight, dashboardNavButtonHighlight } from "../../../../components/global/dom-utils/navigation";

jest.mock('../../../../components/global/dom-utils/elementsManager');

describe('dashboardNavButtonHighlight', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <button class="my-plants-btn active">
          <div class="icon-container"></div>
        </button>
        <button class="add-new-plant-btn">
          <div class="icon-container"></div>
        </button>
        <button class="quiz-btn">
          <div class="icon-container"></div>
        </button>
        <button class="library-btn">
          <div class="icon-container"></div>
        </button>
        <button class="home-btn">
          <div class="icon-container"></div>
        </button>
      `;
  
      domElements.myPlantsBtn = document.querySelector('.my-plants-btn');
      domElements.addNewPlantBtn = document.querySelector('.add-new-plant-btn');
      domElements.quizBtn = document.querySelector('.quiz-btn');
      domElements.libraryBtn = document.querySelector('.library-btn');
      domElements.homeBtn = document.querySelector('.home-btn');
    });

  afterEach(() => {
    document.body.innerHTML = '';
  })

  test('should add active class and dark icon when button is active', () => {
    dashboardNavButtonHighlight();

    const myPlantsBtn = domElements.myPlantsBtn;
    expect(myPlantsBtn.classList.contains('button-active')).toBe(true);
    expect(myPlantsBtn.classList.contains('button-inactive')).toBe(false);
  });

  test('should add inactive class and light icon when button is inactive', () => {
    dashboardNavButtonHighlight();

    const quizBtn = domElements.quizBtn;
    expect(quizBtn.classList.contains('button-inactive')).toBe(true);
    expect(quizBtn.classList.contains('button-active')).toBe(false);
  });
});

describe('buttonHighlight', () => {
  let activeBtn, inactiveBtns
  beforeEach(() => {
    document.body.innerHTML = `
    <button id="active-button"><button>
    <button id="inactive-button-1"><button>
    <button id="inactive-button-2"><button>
    <button id="inactive-button-3"><button>
    `

    activeBtn = document.getElementById('active-button');
    const inactiveBtn1 = document.getElementById('inactive-button-1');
    const inactiveBtn2 = document.getElementById('inactive-button-2');
    const inactiveBtn3 = document.getElementById('inactive-button-3');

    inactiveBtns = [inactiveBtn1, inactiveBtn2, inactiveBtn3];
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should add/remove active class to buttons and set background color/style', () => {
    buttonHighlight(activeBtn, 'green', 'red', 'white', 'black', ...inactiveBtns);
    
    expect(activeBtn.classList.contains('active')).toBe(true);
    expect(activeBtn.style.backgroundColor).toBe('green');
    expect(activeBtn.style.color).toBe('white');

    inactiveBtns.forEach(button => {
      expect(button.classList.contains('active')).toBe(false);
      expect(button.style.backgroundColor).toBe('red');
      expect(button.style.color).toBe('black');
    });
  });
});