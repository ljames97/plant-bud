export const domElementsManager = jest.fn(() => ({
  globalDomElements: jest.fn(() => ({
    mobileNavModal: document.querySelector('.mobile-nav-modal'),
    mobileMenuBars: document.querySelector('.menu-bars'),
    mobileNavCloseBtn: document.querySelector('.mobile-nav-close-btn'),
  })),
  dashboardDomElements: jest.fn(() => ({
    dashboard: document.querySelector('.dashboard'),
    plantLogEl: document.querySelector('.plant-log'),
    plantQuiz: document.querySelector('.plant-quiz'),
    plantLibrary: document.querySelector('.plant-library'),
    homePage: document.querySelector('.home-page'),
    myPlantsBtn: document.querySelector('.my-plants-btn'),
    addNewPlantBtn: document.querySelector('.add-new-plant-btn'),
    quizBtn: document.querySelector('.quiz-btn'),
    libraryBtn: document.querySelector('.library-btn'),
    homeBtn: document.querySelector('.home-btn'),
    header: document.querySelector('header'),
  })),
}));