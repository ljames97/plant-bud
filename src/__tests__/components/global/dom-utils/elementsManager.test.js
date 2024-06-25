// elementsManager.test.js
/**
 * Unit test for the elements manager function.
 */

// elementsManager.test.js
import { onAuthStateChanged } from "firebase/auth";
import { domElementsManager } from "../../../../components/global/dom-utils";
import { addIconDark, addIconLight, homeIconDark, homeIconLight, plantIconDark, plantIconLight, quizIconDark, quizIconLight, searchIconDark, searchIconLight } from "../../../../images";

jest.mock('firebase/auth');

describe('domElementsManager', () => {
  beforeAll(() => {
    const mockUser = { uid: 'testUserId' };
    onAuthStateChanged.mockImplementation((auth, callback) => {
      callback(mockUser);
    });
  });

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="mobile-nav-modal"></div>
      <div class="menu-bars"></div>
      <button class="mobile-nav-close-btn"></button>
      <div class="dashboard"></div>
      <div class="plant-log"></div>
      <div class="plant-quiz"></div>
      <div class="plant-library"></div>
      <div class="home-page"></div>
      <button class="my-plants-btn"></button>
      <button class="add-new-plant-btn"></button>
      <button class="quiz-btn"></button>
      <button class="library-btn"></button>
      <button class="home-btn"></button>
      <header></header>
    `;
  });

  describe('globalDomElements', () => {
    test('should query and cache global DOM elements', () => {
      const domManager = domElementsManager();
      const globalElements = domManager.globalDomElements();
      expect(globalElements.mobileNavModal).toBe(document.querySelector('.mobile-nav-modal'));
      expect(globalElements.mobileMenuBars).toBe(document.querySelector('.menu-bars'));
      expect(globalElements.mobileNavCloseBtn).toBe(document.querySelector('.mobile-nav-close-btn'));

      // Check if cached
      const cachedElements = domManager.globalDomElements();
      expect(cachedElements).toBe(globalElements);
    });
  });

  describe('dashboardDomElements', () => {
    test('should query and cache dashboard DOM elements', () => {
      const domManager = domElementsManager();
      const dashboardElements = domManager.dashboardDomElements();
      expect(dashboardElements.dashboard).toBe(document.querySelector('.dashboard'));
      expect(dashboardElements.plantLogEl).toBe(document.querySelector('.plant-log'));
      expect(dashboardElements.plantQuiz).toBe(document.querySelector('.plant-quiz'));
      expect(dashboardElements.plantLibrary).toBe(document.querySelector('.plant-library'));
      expect(dashboardElements.homePage).toBe(document.querySelector('.home-page'));
      expect(dashboardElements.myPlantsBtn).toBe(document.querySelector('.my-plants-btn'));
      expect(dashboardElements.addNewPlantBtn).toBe(document.querySelector('.add-new-plant-btn'));
      expect(dashboardElements.quizBtn).toBe(document.querySelector('.quiz-btn'));
      expect(dashboardElements.libraryBtn).toBe(document.querySelector('.library-btn'));
      expect(dashboardElements.homeBtn).toBe(document.querySelector('.home-btn'));
      expect(dashboardElements.header).toBe(document.querySelector('header'));

      // Check if cached
      const cachedElements = domManager.dashboardDomElements();
      expect(cachedElements).toBe(dashboardElements);
    });

    test('should set icons on authentication state change', () => {
      const mockUser = { uid: 'testUserId' };
      const myPlantsBtn = document.querySelector('.my-plants-btn');
      const addNewPlantBtn = document.querySelector('.add-new-plant-btn');
      const quizBtn = document.querySelector('.quiz-btn');
      const libraryBtn = document.querySelector('.library-btn');
      const homeBtn = document.querySelector('.home-btn');

      onAuthStateChanged.mockImplementation((auth, callback) => {
        callback(mockUser);
      });

      const domManager = domElementsManager();
      domManager.dashboardDomElements();

      expect(myPlantsBtn.lightIcon).toBe(plantIconLight);
      expect(addNewPlantBtn.lightIcon).toBe(addIconLight);
      expect(quizBtn.lightIcon).toBe(quizIconLight);
      expect(libraryBtn.lightIcon).toBe(searchIconLight);
      expect(homeBtn.lightIcon).toBe(homeIconLight);
      expect(myPlantsBtn.darkIcon).toBe(plantIconDark);
      expect(addNewPlantBtn.darkIcon).toBe(addIconDark);
      expect(quizBtn.darkIcon).toBe(quizIconDark);
      expect(libraryBtn.darkIcon).toBe(searchIconDark);
      expect(homeBtn.darkIcon).toBe(homeIconDark);
    });
  });
});