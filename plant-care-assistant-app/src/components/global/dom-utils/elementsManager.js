/**
 * A manager for retreiving DOM elements.
 * Elements are cached after initial query to improve performance. 
 * @returns {Object} 
 */
const domElementsManager = () => {
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
      const plantLogEl = document.querySelector('.plant-log');
      const plantQuiz = document.querySelector('.plant-quiz');
      const plantLibrary = document.querySelector('.plant-library')
      const homePage = document.querySelector('.home-page');
      const myPlantsBtn = document.querySelector('.my-plants-btn');
      const addNewPlantBtn = document.querySelector('.add-new-plant-btn');
      const quizBtn = document.querySelector('.quiz-btn');
      const libraryBtn = document.querySelector('.library-btn');
      const homeBtn = document.querySelector('.home-btn');
      const header = document.querySelector('header');
      
      // plant button dark/light icons
      myPlantsBtn.lightIcon = '../../public/plant-icon-light.png';
      addNewPlantBtn.lightIcon = '../../public/footer-nav-icons/add.png';
      quizBtn.lightIcon = '../../public/quiz-icon-light.png';
      libraryBtn.lightIcon = '../../public/footer-nav-icons/search.png';
      homeBtn.lightIcon = '../../public/home-icon-light.png';

      myPlantsBtn.darkIcon = '../../public/plant-icon-dark.png';
      addNewPlantBtn.darkIcon = '../../public/footer-nav-icons-dark/add.png';
      quizBtn.darkIcon = '../../public/quiz-icon-dark.png';
      libraryBtn.darkIcon = '../../public/footer-nav-icons-dark/search.png';
      homeBtn.darkIcon = '../../public/home-icon-dark.png';

      _dashboardDomElementsCache = { dashboard, plantLogEl, plantQuiz, plantLibrary, homePage, myPlantsBtn, addNewPlantBtn, quizBtn, libraryBtn, homeBtn, header };
      return _dashboardDomElementsCache;
    }
  }
}

const getDomElements = domElementsManager();
export const domElements = getDomElements.dashboardDomElements();
export const globalDomElements = getDomElements.globalDomElements();