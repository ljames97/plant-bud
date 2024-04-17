// plantDiscoveryMain.js
/**
 * Main file for the Plant Discovery module, centralising the module's functionality.
 * To search for plants in the plant directory and render results on screen.
 */

import { domElements, createElement, clearSection, resetSection } from "../utils/globalDomManipulation"
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren } from "../utils/gobalUtility";
import { createSearchInput } from "./plantDiscoveryDomManipulation";

import { copyToMyPlants, renderPlantDetails } from "../plant-page/plantPageMain";
import { plantDirectory } from "../utils/data";
import { plantLog } from "../plant-log/plantLogMain";

/**
 * Render plant search input on screen. Gets search elements from createSearchInput and appends them to the DOM.
 */
export const renderNewPlantSearch = () => {
  const { sectionHeader, plantDiscoveryTitle, plantDiscoveryDescription, searchContainer, searchInput, plantsFoundCounter, searchResultsContainer } = createSearchInput();
  const { plantDiscovery } = domElements;

  appendChildren(sectionHeader, plantDiscoveryTitle, /** plantDiscoveryDescription */ );
  appendChildren(searchContainer, searchInput, plantsFoundCounter, searchResultsContainer);
  appendChildren(plantDiscovery, sectionHeader, searchContainer);

  updateSearchResults(plantDiscovery, searchInput.value, searchResultsContainer, null, '← back to search', '.plant-discovery', renderNewPlantSearch);

  localEventManager.addEventListener(searchInput, 'input', () => {
    updateSearchResults(plantDiscovery, searchInput.value, searchResultsContainer, null, '← back to search', '.plant-discovery', renderNewPlantSearch);
  }, 'PLANT_SEARCH');

  localEventManager.addEventListener(document, 'click', handleDocumentClick, 'PLANT_SEARCH');
}

/**
 * Live search results as user types plant name into the search field.
 * @param {HTMLElement} mainSection - eg. plantLogEl, plantQuiz, plantDiscovery.
 * @param {HTMLElement} searchInput
 * @param {HTMLElement} searchResultsContainer
 * @param {Array} searchArray - plantDirectory or userPlantLog.
 * @param {string} backButtonText - '← back to My Plants', '← back to Plant Quiz' etc.
 * @param {string} sectionClass - '.plant-log', '.plant-quiz' etc.
 * @param {function} sectionRender - renderMyPlants, renderPlantQuiz etc.
 */
export const updateSearchResults = (mainSection, searchInput, searchResultsContainer, searchArray, backButtonText, sectionClass, sectionRender) => {
  clearSection(searchResultsContainer);

  // decide on search array based on button tags or user plant log. Match the users search input to the search array
  if (!searchArray) {
    const tagArray = getFilteredPlantsArray();
    searchArray = tagArray;
  }

  const filteredPlants = searchArray.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase()));

  // render matching plant results on screen.
  if (filteredPlants.length > 0) {
    const plantInfoContainer = createElement({tagName: 'div', classEl: 'plant-info'});

    filteredPlants.forEach(plant => {
      const plantElement = createPlantResultElement(plant, sectionClass);
      appendChildren(searchResultsContainer, plantElement);

      localEventManager.addEventListener(plantElement, 'click', () => {
        clearSection(mainSection);
        appendChildren(mainSection, plantInfoContainer);
        renderPlantDetails(plant, plantInfoContainer, backButtonText, sectionClass, sectionRender);
      }, 'PLANT_SEARCH');
    });

    setUpPlantElementListeners();
  }

  updatePlantCounter(filteredPlants);
}

const updatePlantCounter = (filteredPlants) => {
  const plantsFoundCounter = document.querySelector('.plants-found-counter');
  
  if (!plantsFoundCounter) {
    return;
  }

  const plantsFound = filteredPlants.length;
  const text = plantsFound > 1 || plantsFound === 0 ? `${plantsFound} plants found` : `${plantsFound} plant found`;
  plantsFoundCounter.textContent = text;
}

const getFilteredPlantsArray = () => {
  const allTag = document.getElementById('all-tag');
  const beginnerTag = document.getElementById('beginner-tag');
  const mediumTag = document.getElementById('medium-tag');
  const advancedTag = document.getElementById('advanced-tag');
  const skillButtons = [allTag, beginnerTag, mediumTag, advancedTag];

  for (let i = 0; i < skillButtons.length; i++) {
    const button = skillButtons[i];
    if (button.classList.contains('active')) {
      if (button.textContent === 'All') {
        return plantDirectory;
      } else {
        return plantDirectory.filter(plant => plant.skill[0] === button.textContent);
      }
    }
  }
}

const createPlantResultElement = (plant, sectionClass) => {
  const plantElement = createElement({tagName: 'div', classEl: 'plant-element'});
  const plantResultContainer = createElement({tagName: 'div', classEl: 'plant-result-container'});
  const plantTextContainer = createElement({tagName: 'div', classEl: 'plant-text-container'});
  const plantTitle = createElement({tagName: 'p', textContent: plant.name, classEl: 'plant-result-title'});
  const plantDescription = createElement({tagName: 'p', textContent: plant.shortDescription ? plant.shortDescription : 'Add short description', classEl: 'plant-result-description'});
  const plantTag = createElement({tagName: 'p', textContent: plant.skill ? plant.skill[0] : 'Add skill', classEl: 'plant-result-tag'});
  const plantImage = createElement({tagName: 'img', classEl: 'plant-result-image'});
  const plantImageContainer = createElement({tagName: 'div', classEl: 'plant-result-image-container'});
  const lineSeparator = createElement({tagName: 'div', classEl: 'line-separator'});
  plantImage.src = plant.image;
  const menuDotContainer = createMenuDots();
  const searchDropMenu = createElement({tagName: 'div', classEl: 'search-drop-menu'});
  plantElement.plantObject = plant;

  appendChildren(plantTextContainer, plantTitle, plantDescription, plantTag);
  appendChildren(plantImageContainer, plantImage);
  appendChildren(searchDropMenu, menuDotContainer)
  appendChildren(plantResultContainer, plantImageContainer, plantTextContainer, searchDropMenu);
  appendChildren(plantElement, plantResultContainer, lineSeparator);

  setUpPlantElementListeners();

  return plantElement;
}

const createMenuDots = () => {
  let menuDot = '';
  const menuDotContainer = createElement({tagName: 'div', classEl: 'menu-dots-container'});
  menuDot = createElement({tagName: 'div', classEl: 'menu-dot'});
  appendChildren(menuDotContainer, menuDot);
  menuDot = createElement({tagName: 'div', classEl: 'menu-dot'});
  appendChildren(menuDotContainer, menuDot);
  menuDot = createElement({tagName: 'div', classEl: 'menu-dot'});
  appendChildren(menuDotContainer, menuDot);

  return menuDotContainer;
}

const renderQuickAdd = (menuDots, plant) => {
  const existingMenu = document.querySelector('.drop-menu-container');
  if (existingMenu) {
      existingMenu.remove();
  }

  const dropMenuContainer = createElement({tagName: 'div', classEl: 'drop-menu-container'});
  const quickAdd = createElement({tagName: 'p', textContent: !plant.isAdded ? 'Add to My Plants' : 'Added', classEl: 'drop-menu-item'});

  appendChildren(dropMenuContainer, quickAdd);
  appendChildren(menuDots, dropMenuContainer);

  localEventManager.addEventListener(quickAdd, 'click', () => {
    quickAddHandler(quickAdd, plant);
  }, 'PLANT_SEARCH');
}

const quickAddHandler = (quickAdd, plant) => {
  copyToMyPlants(plant);
  plant.isAdded = true;
  replaceElement(quickAdd);
}

const replaceElement = (element) => {
  const newText = createElement({tagName: 'p', textContent: 'Added', classEl: 'drop-menu-item'});
  element.parentNode.replaceChild(newText, element);
}

const handleDocumentClick = (event) => {
  const dropMenuContainer = document.querySelector('.drop-menu-container');
  if (dropMenuContainer && !dropMenuContainer.contains(event.target)) {
    dropMenuContainer.remove();
  }
}

const setUpPlantElementListeners = () => {
  const plantElements = document.querySelectorAll('.plant-element');
  plantElements.forEach(plantElement => {
      const searchDropMenu = plantElement.querySelector('.search-drop-menu');
      
      localEventManager.addEventListener(searchDropMenu, 'click', (event) => {
        event.stopPropagation();
        renderQuickAdd(searchDropMenu, plantElement.plantObject);
      }, 'PLANT_SEARCH')
  });
}