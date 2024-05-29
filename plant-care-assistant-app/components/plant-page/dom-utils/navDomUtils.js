import { buttonHighlight, createElement } from "../../global";
import { localEventManager } from "../../global";
import { appendChildren } from "../../global";
import { renderPlantSection } from "./plantPageHelpers";

/**
 * Creates and returns navigation buttons for switching between different sections of the plant page.
 * @param {HTMLElement} aboutSection 
 * @param {HTMLElement} requirementsSection
 * @param {HTMLElement} tasksSection
 * @param {String} sectionClass
 * @returns {HTMLElement} Nav button container with appended buttons.
 */
export const createNavButtons = (aboutSection, requirementsSection, tasksSection, sectionClass) => {
  const navContainer = createElement({tagName: 'div', classEl: ['plant-page-nav-container']});
  const aboutBtn = createElement({tagName: 'button', textContent: 'About', classEl: ['plant-page-nav-button'], id: 'about-nav'});
  const requirementsBtn = createElement({tagName: 'button', textContent: 'Requirements', classEl: ['plant-page-nav-button'], id: 'requirement-nav'});
  const userTasksBtn = createElement({tagName: 'button', textContent: 'Tasks', classEl: ['plant-page-nav-button'], id: 'task-nav'});
  aboutBtn.classList.add('active');

  setUpNavButtonData(aboutBtn, requirementsBtn, userTasksBtn, requirementsSection, aboutSection, tasksSection);

  buttonHighlight(aboutBtn, '#334521', '#dcd5cd', 'white', 'black', ...aboutBtn.inactiveBtns);

  const navButtons = [aboutBtn, requirementsBtn, userTasksBtn];
  navButtons.forEach(btn => {
    localEventManager.addEventListener(btn, 'click', () => {
      buttonHighlight(btn, '#334521', '#dcd5cd', 'white', 'black', ...btn.inactiveBtns);
      if (btn.classList.contains('active')) {
        renderPlantSection(btn.activeSection, btn.editBtn, ...btn.inactiveSections);
      }
    }, `PLANT_PAGE_${sectionClass}`);
  });

  appendChildren(navContainer, aboutBtn, requirementsBtn, userTasksBtn);

  return navContainer;
}

/**
 * Sets up data for nav buttons. Assigning inactive/active button and section data to each.
 * @param {HTMLElement} aboutBtn 
 * @param {HTMLElement} requirementsBtn 
 * @param {HTMLElement} userTasksBtn 
 * @param {HTMLElement} requirementsSection 
 * @param {HTMLElement} aboutSection 
 * @param {HTMLElement} tasksSection 
 */
const setUpNavButtonData = (aboutBtn, requirementsBtn, userTasksBtn, requirementsSection, aboutSection, tasksSection) => {
  aboutBtn.inactiveBtns = [requirementsBtn, userTasksBtn];
  requirementsBtn.inactiveBtns = [aboutBtn, userTasksBtn];
  userTasksBtn.inactiveBtns = [aboutBtn, requirementsBtn];

  aboutBtn.inactiveSections = [requirementsSection, tasksSection];
  requirementsBtn.inactiveSections = [aboutSection, tasksSection];
  userTasksBtn.inactiveSections = [aboutSection, requirementsSection];

  aboutBtn.activeSection = aboutSection;
  requirementsBtn.activeSection = requirementsSection;
  userTasksBtn.activeSection = tasksSection;

  aboutBtn.editBtn = true;
  requirementsBtn.editBtn = false;
  userTasksBtn.editBtn = false;
}