// plantLogDomManipulation.js
/**
 * For static elements, dynamic elements, or utility functions for DOM manipulation. 
 */

import { removeModal, selectButtonHandler, setSelectButton, setUpModal } from "../plant-page/plantPageDomManipulation";
import { buttonHighlight, clearSection, createElement, createMenuDots, domElements, resetSection } from "../utils/globalDomManipulation"
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren, hideElements, showElements } from "../utils/gobalUtility";
import { plantLog, renderDeletedPlants, renderMyPlants, renderQuickMenu, resetPlantGrid, setPlantInfoBar, updatePlantInfoBar, updateTaskIcon } from "./plantLogMain";

/**
 * Creates and returns dynamic plant log elements.
 * This includes the section header, title, and containers for appending elements to the DOM.
 * 
 * Note: This function does not append the created elements to the DOM. It's the caller's responsibility
 * to place the returned elements appropriately in the application's UI.
 * 
 * @returns {Object} An object containing references for the plant log section.
 */
const dynamicPlantLogElementsManager = () => {
  let _plantLogElementsCache = null;

  return {
    createPlantLogElements: () => {
      const sectionHeader = createElement({tagName: 'div', classEl: ['section-header']});
      const plantLogTitle = createElement({tagName: 'h1', textContent: 'My Plants', classEl: ['section-title']});
      const infoBarContainer = createElement({tagName: 'div', classEl: ['info-bar-container']});
      const plantInfoBar = createElement({tagName: 'div', classEl: ['plant-info-bar']});
      const editButtonContainer = createElement({tagName: 'div', classEl: ['edit-plant-log-container']});
      const editButton = createElement({tagName: 'button', classEl: ['edit-plant-log-button', 'search-tag'], textContent: 'Select'});
      editButton.editMode = false;
      const editDots = createMenuDots();
      const userPlantsContainer = createElement({tagName: 'div', classEl: ['user-plants']});
      const menuButtons = createMenuButtons();
      const taskSelectContainer = createTaskSelect();

      appendChildren(editButtonContainer, editButton, editDots);
      appendChildren(infoBarContainer, plantInfoBar, editButtonContainer);
      hideElements(editDots);

      localEventManager.addEventListener(editButton, 'click', () => {
        editButtonHandler(editDots, editButton);
      }, 'PLANT_EDIT');

      localEventManager.addEventListener(editDots, 'click', (event) => {
        editSelectHandler(event, editDots);
      }, 'PLANT_EDIT');

      return { sectionHeader, menuButtons, plantInfoBar, infoBarContainer, taskSelectContainer, plantLogTitle, userPlantsContainer };
    },

    getPlantLogElements: () => {
      const plantLogTitle = document.querySelector('.section-title');
      const addPlantBtn = document.querySelector('.add-new-plant-btn');
      const userPlantsContainer = document.querySelector('.user-plants');
      const plantInfoBar = document.querySelector('.plant-info-bar');
      const editButtonContainer = document.querySelector('.edit-plant-log-container');
      const editButton = document.querySelector('.edit-plant-log-button');
      const editDots = document.querySelector('.menu-dots-container');

      return { plantLogTitle, addPlantBtn, userPlantsContainer, plantInfoBar, editButtonContainer, editButton, editDots };
    }
  }
}

export const plantLogElements = dynamicPlantLogElementsManager();

const editSelectHandler = (event, menuDots) => {
  renderQuickMenu(event, createSelectMenu, menuDots, null);
}

const createSelectMenu = (menuDots) => {
  const userPlants = plantLog.getUserPlantLog();
  const selectedPlants = userPlants.filter(plant => plant.selected === true);

  const dropMenuContainer = createElement({tagName: 'div', classEl: ['drop-menu-container', 'select-menu']});
  const deleteSelected = createElement({tagName: 'p', textContent: 'Delete selected', classEl: ['drop-menu-item']});

  appendChildren(dropMenuContainer, deleteSelected);
  appendChildren(menuDots, dropMenuContainer);

  localEventManager.addEventListener(deleteSelected, 'click', () => {
    deleteSelectedHandler(selectedPlants);
  })
}

export const deleteSelectedHandler = (selectedPlants) => {
  selectedPlants.forEach(plant => plantLog.deletePlantFromLog(plant));
  resetSection('.plant-log', renderMyPlants, 'PLANT_LOG');
}

const editButtonHandler = (editDots, editButton) => {
  const selectButton = document.querySelectorAll('.plant-select-button');
  const menu = document.querySelectorAll('.plant-menu');
  if (editButton.editMode) {
    hideElements(editDots);
    editButton.textContent = 'Select';
    editButton.editMode = false;

    selectButton.forEach(btn => btn.style.display = 'none');
    menu.forEach(menu => menu.style.display = 'flex');

    resetSection('.plant-log', renderMyPlants, 'PLANT_LOG');

  } else {
    showElements('flex', editDots);
    editButton.textContent = 'Cancel';

    selectButton.forEach(btn => btn.style.display = 'block');
    menu.forEach(menu => menu.style.display = 'none');

    editButton.editMode = true;
    setUpPlantEventListener();
  }
}

// merge with setUpPlantGridEventListener
const setUpPlantEventListener = () => {
  const userPlantsContainer = document.querySelector('.user-plants');

  localEventManager.removeAllEventListeners('PLANT_CONTAINER');

  localEventManager.addEventListener(userPlantsContainer, 'click', (event) => {
    let target = event.target;
    while (target && target !== userPlantsContainer) {
      if (target.classList.contains('plant-image')) {
        const plantId = target.getAttribute('data-id');
        const plant = plantLog.getPlantById(plantId, plantLog.getUserPlantLog());
        const userPlantContainer = target.closest('.user-plant');
        const selectButton = userPlantContainer.querySelector('.plant-select-button');
        if (plant) {
          toggleSelectButton(selectButton, plant);
          togglePlantSelect(plant);
        }
        return;
      }
      target = target.parentNode;
    }

  }, 'PLANT_CONTAINER');

  const toggleSelectButton = (selectButton) => {
    if (!selectButton.isSelected) {
      selectButton.style.backgroundColor = 'white';
      selectButton.isSelected = true;
    } else {
      selectButton.style.backgroundColor = 'transparent';
      selectButton.isSelected = false;
    }
  }

  const togglePlantSelect = (plant) => {
    if (!plant.selected) {
      plant.selected = true
    } else {
      plant.selected = false;
    }
  }
}

const resetEditButton = () => {
  const { editButton, editDots } = plantLogElements.getPlantLogElements();
  if (editButton.editMode) {
    hideElements(editDots);
    editButton.textContent = 'Edit';
    editButton.editMode = false;
  }
}

const createMenuButtons = () => {
  const {plantLogEl} = domElements
  const menuButtons = createElement({tagName: 'div', classEl: ['search-tags']});
  const all = createElement({tagName: 'button', classEl: ['search-tag', 'log-menu-btn'], id: 'log-all', textContent: 'All'});
  const tasks = createElement({tagName: 'button', classEl: ['search-tag', 'log-menu-btn'], id: 'log-tasks', textContent: 'Tasks'});
  const taskCountIcon = createElement({tagName: 'div', classEl: ['task-count-icon']});
  const archive = createElement({tagName: 'button', classEl: ['search-tag', 'log-menu-btn'], id: 'log-archive', textContent: 'Archive'});
  const searchTaskContainer = createElement({tagName: 'div', classEl: ['task-results']});
  appendChildren(plantLogEl, searchTaskContainer);
  appendChildren(tasks, taskCountIcon);

  const { numberOfTasks } = setPlantInfoBar(plantLog.getUserPlantLog());
  taskCountIcon.textContent = numberOfTasks;
  taskCountIcon.style.display = numberOfTasks > 0 ? 'block' : 'none';

  all.inactiveBtns = [tasks, archive]
  tasks.inactiveBtns = [all, archive]
  archive.inactiveBtns = [all, tasks]
  const menuButtonsArray = [all, tasks, archive];

  menuButtonsArray.forEach(button => {
    localEventManager.addEventListener(button, 'click', () => {
      buttonHighlight(button, 'white', 'rgba(255, 255, 255, 0.224', 'black', 'white', ...button.inactiveBtns);
      }
    )
  }, 'PLANT_NAV');

  localEventManager.addEventListener(archive, 'click', () => {
    archiveBtnClickHandler();
  }, 'PLANT_NAV');

  localEventManager.addEventListener(tasks, 'click', () => {
    taskBtnHandler();
  }, 'PLANT_NAV');

  localEventManager.addEventListener(all, 'click', () => {
    allBtnClickHandler();
  }, 'PLANT_NAV')

  appendChildren(menuButtons, all, tasks, archive);

  return menuButtons;
}

const allBtnClickHandler = () => {
  const { editButtonContainer} = plantLogElements.getPlantLogElements();
  const searchTaskContainer = document.querySelector('.task-results');
  const taskSelectContainer = document.querySelector('.task-select-container');
  clearSection(searchTaskContainer, 'PLANT_LOG');
  hideElements(taskSelectContainer);
  resetEditButton();
  showElements('flex', editButtonContainer);
  resetPlantGrid(plantLog.getUserPlantLog());
  updatePlantInfoBar();
}

const taskBtnHandler = () => {
  const { editButtonContainer } = plantLogElements.getPlantLogElements();
  const searchTaskContainer = document.querySelector('.task-results');
  clearSection(searchTaskContainer, 'PLANT_LOG');
  hideElements(editButtonContainer);
  renderTasksList(false);
  renderTaskSelect();
  updateTaskBar();
}

const createTaskSelect = () => {
  const searchTaskContainer = document.querySelector('.task-results');
  const taskSelectContainer = createElement({tagName: 'div', classEl: ['task-select-container']});
  const separator = createElement({tagName: 'p', textContent: '|', classEl: ['task-select']});
  const todo = createElement({tagName: 'p', textContent: 'Task list', classEl: ['task-select', 'to-do-select']});
  const completed = createElement({tagName: 'p', textContent: 'Completed', classEl: ['task-select', 'completed-select']});

  appendChildren(taskSelectContainer, todo, separator, completed);

  localEventManager.addEventListener(completed, 'click', () => {
    taskSelectHandler(completed, todo, true, searchTaskContainer);
    completed.active = true;
  });

  localEventManager.addEventListener(todo, 'click', () => {
    taskSelectHandler(todo, completed, false, searchTaskContainer);
    completed.active = false;
  })

  return taskSelectContainer;
}

const taskSelectHandler = (activeBtn, inactiveBtn, completedTaskState, searchTaskContainer) => {
  clearSection(searchTaskContainer, 'PLANT_LOG');
  renderTasksList(completedTaskState);
  activeBtn.style.fontWeight = 600;
  inactiveBtn.style.fontWeight = 100;
}

const renderTaskSelect = () => {
  const taskSelectContainer = document.querySelector('.task-select-container');
  taskSelectContainer.style.display = 'flex';
}

const archiveBtnClickHandler = () => {
  const { editButtonContainer } = plantLogElements.getPlantLogElements();
  const searchTaskContainer = document.querySelector('.task-results');
  const taskSelectContainer = document.querySelector('.task-select-container');
  clearSection(searchTaskContainer, 'PLANT_LOG');
  resetEditButton();
  hideElements(editButtonContainer, taskSelectContainer);
  renderDeletedPlants();
}

export const updateTaskBar = () => {
  const { plantInfoBar,  } = plantLogElements.getPlantLogElements();
  const { numberOfTasks } = setPlantInfoBar(plantLog.getUserPlantLog());
  plantInfoBar.textContent = `${numberOfTasks} tasks`;
}

const renderTasksList = (completedState) => {
  const { plantLogEl } = domElements
  const { userPlantsContainer } = plantLogElements.getPlantLogElements();
  const searchTaskContainer = document.querySelector('.task-results');
  appendChildren(plantLogEl, searchTaskContainer);
  clearSection(userPlantsContainer, 'PLANT_LOG');

  const userPlants = plantLog.getUserPlantLog();
  userPlants.forEach(plant => {
    if (plant.tasks && plant.tasks.length > 0) {
      plant.tasks.forEach(task => {
        if (task.selected === completedState) {
          const taskElement = createTaskElement(plant, task);
          appendChildren(searchTaskContainer, taskElement);
        }
      });
    }
  });
}

const createTaskElement = (plant, task) => {
  const taskElement = createElement({tagName: 'div', classEl: ['task-element']});
  const taskContainer = createElement({tagName: 'div', classEl: ['task-result-container']})
  const taskSelector = createElement({tagName: 'button', classEl: ['task-selector']});
  const plantImageContainer = createElement({tagName: 'div', classEl: ['plant-task-image-container']});
  const plantImage = createElement({tagName: 'img', classEl: ['plant-task-image']});
  const plantTaskTextContainer = createElement({tagName: 'p', classEl: ['plant-task-text']});
  const plantTitle = createElement({tagName: 'p', classEl: ['plant-task-title', 'plant-result-title'], textContent: plant.name});
  let taskDescription = createElement({tagName: 'p', classEl: ['task-description', 'plant-result-description'], textContent: task.description});
  const lineSeparator = createElement({tagName: 'div', classEl: ['line-separator', 'task-line-seperator']});
  const menuDotContainer = createMenuDots();
  const searchDropMenu = createElement({tagName: 'div', classEl: ['search-drop-menu']});
  taskElement.plantObject = task;

  setSelectButton(task, taskSelector, 'rgba(255, 255, 255, 0.95)', 'none', 'rgba(255, 255, 255, 0.224)', 'none');

  plantImage.src = plant.image;

  appendChildren(plantImageContainer, plantImage);
  appendChildren(plantTaskTextContainer, plantTitle, taskDescription);
  appendChildren(searchDropMenu, menuDotContainer);
  appendChildren(taskContainer, taskSelector, plantImageContainer, plantTaskTextContainer, searchDropMenu);
  appendChildren(taskElement, taskContainer, lineSeparator);

  localEventManager.addEventListener(taskSelector, 'click', () => {
    selectButtonHandler(task, taskSelector, 'rgba(255, 255, 255, 0.95)', 'none', 'rgba(255, 255, 255, 0.224)', 'none');
    updateTaskBar();
    updateTaskIcon();
  }, 'PLANT_LOG');

  localEventManager.addEventListener(menuDotContainer, 'click', (event) => {
    renderQuickMenu(event, createTaskMenu, menuDotContainer, task, taskElement);
    localEventManager.addEventListener(document, 'click', handleDocumentClick, 'PLANT_LOG');
  }, 'PLANT_LOG');

  return taskElement;
}

const createTaskMenu = (menuDots, task, taskElement) => {
  const dropMenuContainer = createElement({tagName: 'div', classEl: ['drop-menu-container']});
  const editTask = createElement({tagName: 'p', textContent: 'Edit', classEl: ['drop-menu-item']});
  const deleteTask = createElement({tagName: 'p', textContent: 'Delete', classEl: ['drop-menu-item']});

  appendChildren(dropMenuContainer, editTask, deleteTask);
  appendChildren(menuDots, dropMenuContainer);

  localEventManager.addEventListener(editTask, 'click', () => {
    editTaskHandler(task);
  }, 'PLANT_LOG');

  localEventManager.addEventListener(deleteTask, 'click', () => {
    deleteTaskHandler(task, taskElement);
    updateTaskIcon();
    updateTaskBar();
  }, 'PLANT_LOG');
}

export const editTaskHandler = (task) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const editTaskModal = createElement({tagName: 'div', classEl: ['new-modal']});
  const editTaskInput = createElement({tagName: 'input', placeholder: task.description, classEl: ['new-input']});
  const updateBtn = createElement({tagName: 'button', textContent: 'Update', classEl: ['update-tag-btn', 'submit-btn']});

  setUpModal(editTaskModal, null, 'PLANT_TASK');

  appendChildren(editTaskModal, editTaskInput, updateBtn);
  appendChildren(modalOverlay, editTaskModal);

  localEventManager.addEventListener(updateBtn, 'click', () => {
    updateTaskHandler(task, editTaskInput, editTaskModal);
  })

}

const updateTaskHandler = (task, editTaskInput, editTaskModal) => {
  if (editTaskInput.value === '') {
    return;
  }

  task.description = editTaskInput.value;

  removeModal(editTaskModal, 'PLANT_LOG');
  resetTaskSection();
}

const resetTaskSection = () => {
  const completeBtn = document.querySelector('.completed-select');
  const todoBtn = document.querySelector('.to-do-select');
  const searchTaskContainer = document.querySelector('.task-results');

  if (!completeBtn) {
    return;
  }

  if (completeBtn.active === true) {
    taskSelectHandler(completeBtn, todoBtn, true, searchTaskContainer);
  } else {
    taskSelectHandler(todoBtn, completeBtn, false, searchTaskContainer);
  }

  updateTaskBar();
}

export const deleteTaskHandler = (task, taskElement) => {
  plantLog.deletePlantTask(task.id);

  if (taskElement && taskElement.parentNode) {
    taskElement.parentNode.removeChild(taskElement);
  }
}

