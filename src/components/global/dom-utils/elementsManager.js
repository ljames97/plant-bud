// elementsManager.js

import { onAuthStateChanged } from "firebase/auth";
import { addIconDark, addIconLight, homeIconDark, homeIconLight, plantIconDark, plantIconLight, quizIconDark, quizIconLight, searchIconDark, searchIconLight } from "../../../images";
import { auth } from "../../../config";

/**
 * A manager for retreiving DOM elements.
 * Elements are cached after initial query to improve performance. 
 * @returns {Object} 
 */
export const domElementsManager = () => {
  // Cache objects for storing already queried DOM elements
  let _globalDomElementsCache = null;
  let _dashboardDomElementsCache = null;

  return {
    globalDomElements: () => {
      if (_globalDomElementsCache) {
        return _globalDomElementsCache;
      }
      // Query and cache if not already cached. 
      const mobileNavModal = document.querySelector('.mobile-nav-modal');
      const mobileMenuBars = document.querySelector('.menu-bars');
      const mobileNavCloseBtn = document.querySelector('.mobile-nav-close-btn');

      _globalDomElementsCache = { mobileNavModal, mobileMenuBars, mobileNavCloseBtn };
      return _globalDomElementsCache;
    },
    dashboardDomElements: () => {
      if (_dashboardDomElementsCache) {
        return _dashboardDomElementsCache;
      }

      const dashboard = document.querySelector('.dashboard');
      const plantLogEl = document.getElementById('plant-log');
      const plantQuiz = document.getElementById('plant-quiz');
      const plantLibrary = document.getElementById('plant-library')
      const homePage = document.getElementById('home-page');
      const myPlantsBtn = document.getElementById('my-plants-btn');
      const addNewPlantBtn = document.getElementById('add-new-plant-btn');
      const quizBtn = document.getElementById('quiz-btn');
      const libraryBtn = document.getElementById('library-btn');
      const homeBtn = document.getElementById('home-btn');
      const desktopMyPlantsBtn = document.getElementById('desktop-my-plants-btn');
      const desktopQuizBtn = document.getElementById('desktop-quiz-btn');
      const desktopLibraryBtn = document.getElementById('desktop-library-btn');
      const desktopHomeBtn = document.getElementById('desktop-home-btn');
      const header = document.querySelector('header');
      
      // plant button dark/light icons
      onAuthStateChanged(auth, (user) => {
        if (user) {
          myPlantsBtn.lightIcon = plantIconLight;
          addNewPlantBtn.lightIcon = addIconLight;
          quizBtn.lightIcon = quizIconLight;
          libraryBtn.lightIcon = searchIconLight;
          homeBtn.lightIcon = homeIconLight;
    
          myPlantsBtn.darkIcon = plantIconDark;
          addNewPlantBtn.darkIcon = addIconDark;
          quizBtn.darkIcon = quizIconDark;
          libraryBtn.darkIcon = searchIconDark;
          homeBtn.darkIcon = homeIconDark;
        }
      });

      _dashboardDomElementsCache = { dashboard, plantLogEl, plantQuiz, plantLibrary, homePage, myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn, homeBtn, header,
        desktopMyPlantsBtn, desktopQuizBtn, desktopLibraryBtn, desktopHomeBtn };
      return _dashboardDomElementsCache;
    }
  }
}

const getDomElements = domElementsManager();
export const domElements = getDomElements.dashboardDomElements();