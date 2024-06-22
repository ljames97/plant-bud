import { domElements } from "./elementsManager";
import { dashboardNavButtonHighlight } from "./navigation";
import { clearSection } from "./sectionManipulation";

/**
 * Prepare the dashboard by rendering the active section and removing the inactive section.
 * @param {HTMLElement} activeBtn - button clicked.
 * @param  {...HTMLElement} inactiveBtn - buttons not clicked.
 */
export const prepareDashboard = (activeBtn, renderFunc, ...inactiveBtn) => {
  const { plantLogEl, plantQuiz, plantLibrary, homePage, header } = domElements;
  
  if (activeBtn === domElements.addNewPlantBtn) {
    // Handle the case where addNewPlantBtn is clicked
    renderFunc();
    return;
  }

  activeBtn.classList.add('active');

  inactiveBtn.forEach(button => {
    button.classList.remove('active');
  });

  // Mapping from buttons to their corresponding sections
  const buttonMap = {
    myPlantsBtn: { section: plantLogEl, button: domElements.myPlantsBtn },
    addNewPlantBtn: { button: domElements.addNewPlantBtn },
    quizBtn: { section: plantQuiz, button: domElements.quizBtn },
    libraryBtn: { section: plantLibrary, button: domElements.libraryBtn },
    homeBtn: { section: homePage, button: domElements.homeBtn }
  };

  // Find the active section based on the active button
  const activeSection = Object.values(buttonMap).find(entry => entry.button === activeBtn)?.section;

  [plantLogEl, plantQuiz, plantLibrary, homePage].forEach(section => {
    clearSection(section)
    section.style.height = '0'
  });

  if (activeSection) {
    activeSection.style.height = '100%';
    renderFunc();
  }

  if (activeSection !== homePage) {
    header.classList.remove('flex');
    header.classList.add('hidden');
  }

  dashboardNavButtonHighlight();
}