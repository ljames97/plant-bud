// prepareDashboard.test.js
/**
 * Unit test for prepareDashboard function.
 */

import { dashboardNavButtonHighlight } from "../../../../components/global/dom-utils/navigation.js";
import { domElements } from "../../../../components/global/dom-utils/elementsManager";
import { clearSection, prepareDashboard } from "../../../../components/global/index.js";

jest.mock('../../../../components/global/dom-utils/navigation.js');
jest.mock('../../../../components/global/dom-utils/sectionManipulation');
jest.mock('../../../../components/global/dom-utils/elementsManager');

describe('prepareDashboard', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div class="plant-log"></div>
    <div class="plant-quiz"></div>
    <div class="plant-library"></div>
    <div class="home-page"></div>
    <header></header>
    <button class="my-plants-btn"></button>
    <button class="add-new-plant-btn"></button>
    <button class="quiz-btn"></button>
    <button class="library-btn"></button>
    <button class="home-btn"></button>
    `;
  
    domElements.plantLogEl = document.querySelector('.plant-log');
    domElements.plantQuiz = document.querySelector('.plant-quiz');
    domElements.plantLibrary = document.querySelector('.plant-library');
    domElements.homePage = document.querySelector('.home-page');
    domElements.header = document.querySelector('header');
    domElements.myPlantsBtn = document.querySelector('.my-plants-btn');
    domElements.addNewPlantBtn = document.querySelector('.add-new-plant-btn');
    domElements.quizBtn = document.querySelector('.quiz-btn');
    domElements.libraryBtn = document.querySelector('.library-btn');
    domElements.homeBtn = document.querySelector('.home-btn');
  });
  
  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  test('should call renderFunc and return when addNewPlantButton is clicked', () => {
    const renderFunc = jest.fn();
    const activeBtn = domElements.addNewPlantBtn;
  
    prepareDashboard(activeBtn, renderFunc, domElements.quizBtn, domElements.libraryBtn, domElements.homeBtn);
  
    expect(renderFunc).toHaveBeenCalled();
    expect(clearSection).not.toHaveBeenCalled();
    expect(dashboardNavButtonHighlight).not.toHaveBeenCalled();
  });

  test('should add active class to activeBtn, remove class from inactiveBtn', () => {
    const renderFunc = jest.fn();
    const activeBtn = domElements.myPlantsBtn;
    const inactiveBtns = [domElements.quizBtn, domElements.libraryBtn, domElements.homeBtn];
  
    prepareDashboard(activeBtn, renderFunc, ...inactiveBtns);

    expect(domElements.myPlantsBtn.classList.contains('active')).toBe(true);
    inactiveBtns.forEach(button => {
      expect(button.classList.contains('active')).toBe(false);
    });
  });

  test('should find active section based on active button', () => {
    const renderFunc = jest.fn();
    const activeBtn = domElements.myPlantsBtn;
    const plantLogEl = domElements.plantLogEl;
    const inactiveBtns = [domElements.quizBtn, domElements.libraryBtn, domElements.homeBtn];
    let activeSection;

    prepareDashboard(activeBtn, renderFunc, ...inactiveBtns);

    expect(activeSection = plantLogEl);
  });

  test('should clear sections, set height of active section and hide header', () => {
    const renderFunc = jest.fn();
    const activeBtn = domElements.myPlantsBtn;
    const inactiveBtns = [domElements.quizBtn, domElements.libraryBtn, domElements.homeBtn];
    const plantLogEl = domElements.plantLogEl;
    const plantQuiz = domElements.plantQuiz;
    const plantLibrary = domElements.plantLibrary;
    const homePage = domElements.homePage;
    const header = domElements.header;
    const sections = [plantQuiz, plantLibrary, homePage];

    prepareDashboard(activeBtn, renderFunc, ...inactiveBtns);

    sections.forEach(section => {
      expect(clearSection).toHaveBeenCalledWith(section);
      expect(section.style.height).toBe('0px');
    });

    expect(plantLogEl.style.height).toBe('100%');
    expect(renderFunc).toHaveBeenCalled();
    expect(header.classList.contains('hidden')).toBe(true);
    expect(dashboardNavButtonHighlight).toHaveBeenCalled();
  });

  test('should not add hidden class if activeBtn is homePage', () => {
    const renderFunc = jest.fn();
    const activeBtn = domElements.homeBtn;
    const inactiveBtns = [domElements.quizBtn, domElements.libraryBtn, domElements.myPlantsBtn];
    const header = domElements.header;

    prepareDashboard(activeBtn, renderFunc, ...inactiveBtns);

    expect(header.classList.contains('hidden')).toBe(false);
  });
});