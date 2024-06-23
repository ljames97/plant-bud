// // dashboardEventHandlers.rewire.test.js
// /**
//  * Unit test for dashboardEventHandler functions.
// */

import { prepareDashboard } from "../../../../components/global/dom-utils/prepareDashboard.js";
import { domElements } from "../../../../components/global/dom-utils/elementsManager.js";
import { localEventManager } from "../../../../components/global/event-handlers/globalEventHandlers.js";
import { setUpDashboardEventListeners, sectionInit, __RewireAPI__ as dashboardEventHandlersRewireAPI } from "../../../../components/global/event-handlers/dashboardEventHandlers.js";

jest.mock('../../../../components/global/dom-utils/prepareDashboard.js');
jest.mock('../../../../components/global/event-handlers/globalEventHandlers.js');
jest.mock('../../../../components/global/dom-utils/elementsManager.js');

describe('dashboardEventHandlers', () => {
  describe('sectionInit', () => {
    beforeEach(() => {
      document.body.innerHTML = `
      <button id="my-plants-btn" class="dormant"><button>
      <button id="add-plant-btn"><button>
      <button id="quiz-btn"><button>
      <button id="library-btn"><button>
      <button id="home-btn"><button>
      `;

      domElements.myPlantsBtn = document.querySelector('#my-plants-btn');
      domElements.addNewPlantBtn = document.querySelector('#add-plant-btn');
      domElements.quizBtn = document.querySelector('#quiz-btn');
      domElements.libraryBtn = document.querySelector('#library-btn');
      domElements.homeBtn = document.querySelector('#home-btn');
    });

    afterEach(() => {
      document.body.innerHTML = '';
      jest.clearAllMocks();
    });
  
    test('should find correseponding section and otherButtons', () => {
      const sectionName = 'MY_PLANTS';

      sectionInit(sectionName);

      expect(prepareDashboard).toHaveBeenCalledWith(
        domElements.myPlantsBtn,
        expect.any(Function),
        domElements.quizBtn,
        domElements.addNewPlantBtn,
        domElements.libraryBtn,
        domElements.homeBtn
      );
      expect(domElements.myPlantsBtn.classList.contains('dormant')).toBe(true);
    });

    test('should call prepareDashboard for button without active/dormant class', () => {
      const sectionName = 'MY_PLANTS';
      domElements.myPlantsBtn.classList.remove('dormant');

      sectionInit(sectionName);

      expect(prepareDashboard).toHaveBeenCalledWith(
        domElements.myPlantsBtn,
        expect.any(Function),
        domElements.quizBtn,
        domElements.addNewPlantBtn,
        domElements.libraryBtn,
        domElements.homeBtn
      );
      expect(domElements.myPlantsBtn.classList.contains('dormant')).toBe(true);
    });
  });

  describe('setUpDashboardEventListeners', () => {
    let mockSectionInit;

    beforeEach(() => {
      mockSectionInit = jest.fn();
      dashboardEventHandlersRewireAPI.__Rewire__('sectionInit', mockSectionInit);
      document.body.innerHTML = `
      <button id="my-plants-btn" class="dormant"><button>
      <button id="add-plant-btn"><button>
      <button id="quiz-btn"><button>
      <button id="library-btn"><button>
      <button id="home-btn"><button>
      `;

      domElements.myPlantsBtn = document.querySelector('#my-plants-btn');
      domElements.addNewPlantBtn = document.querySelector('#add-plant-btn');
      domElements.quizBtn = document.querySelector('#quiz-btn');
      domElements.libraryBtn = document.querySelector('#library-btn');
      domElements.homeBtn = document.querySelector('#home-btn');
    });

    afterEach(() => {
      dashboardEventHandlersRewireAPI.__ResetDependency__('sectionInit');
      document.body.innerHTML = '';
      jest.clearAllMocks();
    });

    test('should add event listeners and call sectionInit for each section', () => {
      setUpDashboardEventListeners();

      const sectionNames = [
        'MY_PLANTS',
        'ADD_PLANT',
        'PLANT_QUIZ',
        'PLANT_LIBRARY',
        'HOME_PAGE'
      ];

      sectionNames.forEach(name => {
        expect(localEventManager.addEventListener).toHaveBeenCalledWith(
          domElements.myPlantsBtn,
          'click',
          name
        );
      });
    });
  });
});