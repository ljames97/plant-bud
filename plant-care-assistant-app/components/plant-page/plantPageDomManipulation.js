// plantPageDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { buttonHighlight } from "../plant-discovery/plantDiscoveryDomManipulation";
import { plantLogElements } from "../plant-log/plantLogDomManipulation";
import { addPlantToGrid, plantLog } from "../plant-log/plantLogMain";
import { clearSection, createElement } from "../utils/globalDomManipulation";
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren, hideElements, removeChildren, showElements } from "../utils/gobalUtility";
import { renderPlantSection } from "./plantPageMain";

/**
 * Create dynamic elements for the plant page.
 * @returns dynamic plant elements.
 */
export const createDynamicPlantElements = (plant, sectionBtn, sectionClass) => {
  const { mainSection, aboutSection, requirementsSection, tasksSection } = createMainSection(plant, sectionClass);
  const headerContainer = createElement({tagName: 'div', classEl: 'header-container'});
  const plantTitle = createElement({tagName: 'h1', classEl: 'plant-title'});
  const navContainer = createNavButtons(aboutSection, requirementsSection, tasksSection, sectionBtn, sectionClass);
  const plantImageContainer = createElement({tagName: 'div', classEl: 'plant-page-image-container'});
  const plantImage = createElement({tagName: 'img', classEl: 'plant-page-image'});
  const plantDate = createElement({tagName: 'p', classEl: 'plant-date'});
  const { plantDescriptionContainer, plantDescription } = createDescriptionElement();

  return { headerContainer, plantTitle, navContainer, mainSection, aboutSection, plantImageContainer, plantImage, plantDate, plantDescriptionContainer, plantDescription };
}

const createMainSection = (plant, sectionClass) => {
  const plantPageModal = createElement({tagName: 'div', classEl: 'requirement-modal'});
  const aboutSection = createElement({tagName: 'div', classEl: 'about-section'});
  const requirementsSection = createRequirements(plantPageModal, plant, sectionClass);
  const tasksSection = createUserTasks(plantPageModal, sectionClass);
  const mainSection = createElement({tagName: 'div', classEl: 'main-plant-section'});

  appendChildren(mainSection, aboutSection, requirementsSection, tasksSection);

  return { mainSection, aboutSection, requirementsSection, tasksSection };
}

export const createRequirements = (plantPageModal, plant, sectionClass) => {
  const requirementsSection = createElement({tagName: 'div', classEl: 'requirements-section'});
  const requirements = createElement({tagName: 'div', classEl: 'requirements'})
  const waterScheduleMain = createElement({tagName: 'div', classEl: 'requirement-container'});
  const waterScheduleIconContainer = createElement({tagName: 'div', classEl: 'requirement-icon-container'});
  const waterScheduleIcon = createElement({tagName: 'img', classEl: 'water-scheduele-icon'});
  const tempLightMain = createElement({tagName: 'div', classEl: 'requirement-container'});
  const tempLightIconContainer = createElement({tagName: 'div', classEl: 'requirement-icon-container'});
  const tempLightIcon = createElement({tagName: 'img', classEl: 'temp-light-icon'});
  const waterSchedule = createElement({tagName: 'p', textContent: plant.waterSchedule, classEl: 'requirement'});
  const tempLight = createElement({tagName: 'p', textContent: plant.tempLight, classEl: 'requirement'});
  plantPageModal.classList.add('plant-page-modal');
  requirementsSection.style.display = 'none';
  waterScheduleIcon.src = '../../public/water-icon.png';
  tempLightIcon.src = '../../public/sun-icon.png';

  // allow user to upload their own requirements
  const addRequirementBtn = createElement({tagName: 'button', classEl: 'add-requirement-btn'});
  const addBtnImageContainer = createElement({tagName: 'div', classEl: 'add-btn-image-container'});
  const addBtnImage = createElement({tagName: 'img', classEl: 'add-btn-image'});
  addBtnImage.src = '../../public/add-icon-1.png';

  appendChildren(addBtnImageContainer, addBtnImage)
  appendChildren(addRequirementBtn, addBtnImageContainer);

  appendChildren(waterScheduleIconContainer, waterScheduleIcon);
  appendChildren(tempLightIconContainer, tempLightIcon);
  appendChildren(waterScheduleMain, waterScheduleIconContainer, waterSchedule);
  appendChildren(tempLightMain, tempLightIconContainer, tempLight);
  appendChildren(requirements, waterScheduleMain, tempLightMain)
  appendChildren(requirementsSection, requirements, plantPageModal, addRequirementBtn);

  localEventManager.addEventListener(addRequirementBtn, 'click', () => {
    addNewRequirementHandler(plantPageModal, requirements, sectionClass);
  }, `PLANT_PAGE_${sectionClass}`)

  return requirementsSection;
}

const addNewRequirementHandler = (plantPageModal, requirements, sectionClass) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const addRequirementInput = createElement({tagName: 'input', placeHolder: 'New requirement', classEl: 'plant-page-input'});
  const submitBtn = createElement({tagName: 'button', textContent: 'Add requirement', classEl: 'submit-requirement-btn'});
  const cancelBtn = createElement({tagName: 'button', textContent: 'X', classEl: 'cancel-btn'});
  setUpModal(modalOverlay, plantPageModal);

  appendChildren(plantPageModal, cancelBtn, addRequirementInput, submitBtn);
  appendChildren(modalOverlay, plantPageModal);

  setUpModalEventListeners(submitBtn, cancelBtn, plantPageModal, requirements, addRequirementInput, sectionClass, submitRequirementHandler);
}

const setUpModalEventListeners = (submitBtn, cancelBtn, modal, sectionElement, userInput, sectionClass, submitHandler) => {
  const modalOverlay = document.querySelector('.modal-overlay');

  localEventManager.addEventListener(submitBtn, 'click', () => {
    removeModal(modal);
    submitHandler(sectionElement, userInput, sectionClass);
  }, `PLANT_PAGE_${sectionClass}`);

  localEventManager.addEventListener(cancelBtn, 'click', () => {
    removeModal(modal);
  }, `PLANT_PAGE_${sectionClass}`);

  localEventManager.addEventListener(modalOverlay, 'click', () => {
    removeModal(modal);
  }, `PLANT_PAGE_${sectionClass}`)

  localEventManager.addEventListener(modal, 'click', (event) => {
    event.stopPropagation();
  }, `PLANT_PAGE_${sectionClass}`)
}

const submitRequirementHandler = (requirements, addRequirementInput) => {
  if (addRequirementInput.value === '') {
    return;
  }
  const newUserRequirmentContainer = createElement({tagName: 'div', classEl: 'requirement-container'});
  const newUserRequirementIconContainer = createElement({tagName: 'div', classEl: 'requirement-icon-container'})
  const newUserRequirementIcon = createElement({tagName: 'img', classEl: 'requirement-icon'});
  const newUserRequirement = createElement({tagName: 'p', textContent: addRequirementInput.value, classEl: 'requirement'})
  newUserRequirementIcon.src = '../../public/plant-pot-icon.png';

  appendChildren(newUserRequirementIconContainer, newUserRequirementIcon);
  appendChildren(newUserRequirmentContainer, newUserRequirementIconContainer, newUserRequirement);
  appendChildren(requirements, newUserRequirmentContainer);
}

const removeModal = (modal) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  clearSection(modal);
  removeChildren(modalOverlay, modal);
  modalOverlay.style.display = 'none';
}

const createUserTasks = (plantPageModal, sectionClass) => {
  const userTaskSection = createElement({tagName: 'div', classEl: 'tasks-section'});
  const tasks = createElement({tagName: 'div', classEl: 'tasks'});
  const newTaskBtn = createElement({tagName: 'button', classEl: 'add-task-btn'});
  const newTaskImgContainer = createElement({tagName: 'div', classEl: 'new-task-image-container'});
  const newTaskImg = createElement({tagName: 'img', classEl: 'new-task-image'});
  userTaskSection.style.display = 'none';
  newTaskImg.src = '../../public/add-icon-1.png';

  appendChildren(newTaskImgContainer, newTaskImg);
  appendChildren(newTaskBtn, newTaskImgContainer);
  appendChildren(userTaskSection, tasks, newTaskBtn);

  localEventManager.addEventListener(newTaskBtn, 'click', () => {
    addNewTaskHandler(plantPageModal, tasks, sectionClass);
  }, `PLANT_PAGE_${sectionClass}`)

  return userTaskSection;
}

const addNewTaskHandler = (plantPageModal, tasks, sectionClass) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const newTaskInput = createElement({tagName: 'input', placeHolder: 'New task', classEl: 'plant-page-input'});
  const newTaskAddBtn = createElement({tagName: 'button', textContent: 'Add task', classEl: 'submit-requirement-btn'});
  const cancelTaskBtn = createElement({tagName: 'button', textContent: 'X', classEl: 'cancel-btn'});

  setUpModal(modalOverlay, plantPageModal);

  appendChildren(plantPageModal, cancelTaskBtn, newTaskInput, newTaskAddBtn);
  appendChildren(modalOverlay, plantPageModal);

  setUpModalEventListeners(newTaskAddBtn, cancelTaskBtn, plantPageModal, tasks, newTaskInput, sectionClass, submitTaskHandler);
}

const setUpModal = (modalOverlay, modal) => {
  modalOverlay.style.display = 'flex';
  modal.style.display = 'flex';
}

const submitTaskHandler = (tasks, newTaskInput, sectionClass) => {
  if (newTaskInput.value === '') {
    return;
  }

  const newTask = createElement({tagName: 'div', classEl: 'new-task'});
  const taskSelectBtn = createElement({tagName: 'button', classEl: 'select-btn'});
  const newUserTask = createElement({tagName: 'p', textContent: newTaskInput.value, classEl: 'new-user-task'});
  taskSelectBtn.selected = false;

  appendChildren(newTask, taskSelectBtn, newUserTask);
  appendChildren(tasks, newTask);

  localEventManager.addEventListener(taskSelectBtn, 'click', () => {
    selectButtonHandler(taskSelectBtn)
  }, `PLANT_PAGE_${sectionClass}`);
}

const selectButtonHandler = (taskSelectBtn) => {
  if (taskSelectBtn.selected === false) {
    taskSelectBtn.style.backgroundColor = 'green';
    taskSelectBtn.style.border = 'none';
    taskSelectBtn.selected = true;
  } else {
    taskSelectBtn.style.backgroundColor = 'transparent';
    taskSelectBtn.style.border = '0.5px black solid';
    taskSelectBtn.selected = false;
  }

}

const createDescriptionElement = () => {
  const plantDescription = createElement({tagName: 'p', classEl: 'plant-description'});
  const plantDescriptionHeader = createElement({tagName: 'p', textContent: 'Overview', classEl: 'plant-description-header'});
  const plantDescriptionContainer = createElement({tagName: 'div', classEl: 'plant-description-container'});
  appendChildren(plantDescriptionContainer, plantDescriptionHeader, plantDescription);

  return { plantDescriptionContainer, plantDescription }
}

const createNavButtons = (aboutSection, requirementsSection, tasksSection, sectionBtn, sectionClass) => {
  const navContainer = createElement({tagName: 'div', classEl: 'plant-page-nav-container'});
  const aboutBtn = createElement({tagName: 'button', textContent: 'About', classEl: 'plant-page-nav-button', id: 'about-nav'});
  const requirementsBtn = createElement({tagName: 'button', textContent: 'Requirements', classEl: 'plant-page-nav-button', id: 'requirement-nav'});
  const userTasksBtn = createElement({tagName: 'button', textContent: 'Tasks', classEl: 'plant-page-nav-button', id: 'task-nav'});
  const editBtn = document.querySelector('.edit-btn');
  aboutBtn.classList.add('active');

  // nav btn data
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
  const navButtons = [aboutBtn, requirementsBtn, userTasksBtn];

  buttonHighlight(aboutBtn, '#334521', '#dcd5cd', 'white', 'black', ...aboutBtn.inactiveBtns);

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

export const createTagButton = (tagName) => {
  const tagButton = createElement({tagName: 'button', textContent: tagName, classEl: 'tag-button'});
  return tagButton;
}

/**
 * Refresh plant grid by removing existing inner html and updating the userPlantLog.
 */
export const refreshPlantGrid = () => {
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();

  clearSection(userPlantsContainer, 'PLANT_LOG')

  const userPlantLog = plantLog.getUserPlantLog();
  userPlantLog.forEach(plant => {
    addPlantToGrid(plant);
  })
}

/**
 * Remove image input where users can upload imafe from their device.
 */
export const removeImageInput = () => {
  const imageInput = document.querySelector('.edit-plant-image');
  const label = document.querySelector('.file-upload-label');
  const imageContainer = document.querySelector('.plant-page-image-container');
  if (imageInput) {
    removeChildren(imageContainer, imageInput, label);
  }
}

/**
 * Create button for either edit or adding plant to My Plants.
 * @param {String} backButtonText 
 * @param {HTMLElement} sectionBtn 
 * @param {Object} plant 
 * @returns {HTMLElement} sectionBtn. 
 */
export const createSectionBtn = (backButtonText, sectionBtn, plant) => {
  if (backButtonText === '← back to My Plants') {
    return sectionBtn = createElement({tagName: 'button', textContent: 'Edit', classEl: 'edit-btn'});
  } if (backButtonText === '← back to results' && !plant.isAdded || backButtonText === '← back to search' && !plant.isAdded) {
    return sectionBtn = createElement({tagName: 'button', textContent: 'Add to My Plants', classEl: 'add-to-plants-btn'});
  } if (backButtonText === '← back to Plant Archive') {
    return sectionBtn = createElement({tagName: 'button', textContent: 'Unarchive', classEl: 'add-to-plants-btn'});
  } else {
    return sectionBtn = createElement({tagName: 'p', textContent: 'Added to My Plants'})
  }
}