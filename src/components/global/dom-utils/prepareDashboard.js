// prepareDashboard.js

import { domElements } from "./elementsManager";
import { dashboardNavButtonHighlight } from "./navigation";
import { clearSection } from "./sectionManipulation";

/**
 * Prepare the dashboard by rendering the active section and removing the inactive section.
 * @param {HTMLElement} activeBtn - button clicked.
 * @param  {...HTMLElement} inactiveBtn - buttons not clicked.
 */
export const prepareDashboard = (activeBtns, renderFunc, ...inactiveBtns) => {
  const { plantLogEl, plantQuiz, plantLibrary, homePage, header } = domElements;
  
  if (activeBtns.includes(domElements.addNewPlantBtn)) {
    // Handle the case where addNewPlantBtn is clicked
    renderFunc();
    return;
  }

  activeBtns.forEach(btn => {
    btn.classList.add('active');
  });

  inactiveBtns.forEach(button => {
    button.classList.remove('active');
  });

   // Mapping from buttons to their corresponding sections
   const buttonMap = {
    myPlantsBtn: { section: plantLogEl, buttons: [domElements.myPlantsBtn, domElements.desktopMyPlantsBtn] },
    addNewPlantBtn: { buttons: [domElements.addNewPlantBtn, domElements.desktopAddNewPlantBtn] },
    quizBtn: { section: plantQuiz, buttons: [domElements.quizBtn, domElements.desktopQuizBtn] },
    libraryBtn: { section: plantLibrary, buttons: [domElements.libraryBtn, domElements.desktopLibraryBtn] },
    homeBtn: { section: homePage, buttons: [domElements.homeBtn, domElements.desktopHomeBtn] }
  };

  // Find the active section based on the active buttons
  const activeSection = Object.values(buttonMap).find(entry => 
    entry.buttons.some(button => activeBtns.includes(button))
  )?.section;

  [plantLogEl, plantQuiz, plantLibrary, homePage].forEach(section => {
    clearSection(section);
    section.style.height = '0';
  });

  if (activeSection) {
    activeSection.style.height = '100%';
    renderFunc();
  }

  if (activeSection !== homePage) {
    header.classList.add('hidden-nav');
  } else {
    header.classList.remove('hidden-nav');
  }

  dashboardNavButtonHighlight();
}
