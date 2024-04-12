// plantDiscoveryMain.js
/**
 * Main file for the Plant Discovery module, centralising the module's functionality.
 * To search for plants in the plant directory and render results on screen.
 */

import { domElements, createElement, clearSection } from "../utils/globalDomManipulation"
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren } from "../utils/gobalUtility";
import { createSearchInput } from "./plantDiscoveryDomManipulation";

import { renderPlantDetails } from "../plant-page/plantPageMain";
import { plantDirectory } from "../utils/data";

/**
 * Render plant search input on screen. Gets search elements from createSearchInput and appends them to the DOM.
 */
export const renderNewPlantSearch = () => {
  const { sectionHeader, plantDiscoveryTitle, plantDiscoveryDescription, searchContainer, searchInput, searchResultsContainer } = createSearchInput();
  const { plantDiscovery } = domElements;

  appendChildren(sectionHeader, plantDiscoveryTitle, /** plantDiscoveryDescription */ );
  appendChildren(searchContainer, searchInput, searchResultsContainer);
  appendChildren(plantDiscovery, sectionHeader, searchContainer);

  updateSearchResults(plantDiscovery, searchInput.value, searchResultsContainer, null, '← back to search', '.plant-discovery', renderNewPlantSearch);

  localEventManager.addEventListener(searchInput, 'input', () => {
    updateSearchResults(plantDiscovery, searchInput.value, searchResultsContainer, null, '← back to search', '.plant-discovery', renderNewPlantSearch);
  }, 'PLANT_DISCOVERY')
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
      const plantElement = createPlantResultElement(plant);
      appendChildren(searchResultsContainer, plantElement);

      localEventManager.addEventListener(plantElement, 'click', () => {
        clearSection(mainSection);
        appendChildren(mainSection, plantInfoContainer);
        renderPlantDetails(plant, plantInfoContainer, backButtonText, sectionClass, sectionRender);
      }, 'PLANT_DISCOVERY');
    });

  } else {
    const noResultsMessage = createElement({tagName: 'div', textContent: 'No plants found', classEl: 'no-results'});
    appendChildren(searchResultsContainer, noResultsMessage);
  }

  if (searchInput.value === '') {
    appendChildren(plantLogEl, userPlantsContainer, addPlantBtn);
    resetSection('plant-log', renderMyPlants, 'PLANT_LOG');
  }
  
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

const createPlantResultElement = (plant) => {
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
  const menuDots = createMenuDots();

  appendChildren(plantTextContainer, plantTitle, plantDescription, plantTag);
  appendChildren(plantImageContainer, plantImage);
  appendChildren(plantResultContainer, plantImageContainer, plantTextContainer, menuDots);
  appendChildren(plantElement, plantResultContainer, lineSeparator);

  return plantElement;
}

const createMenuDots = () => {
  let menuDot = '';
  const menuContainer = createElement({tagName: 'div', classEl: 'menu-container'});
  menuDot = createElement({tagName: 'div', classEl: 'menu-dot'});
  appendChildren(menuContainer, menuDot);
  menuDot = createElement({tagName: 'div', classEl: 'menu-dot'});
  appendChildren(menuContainer, menuDot);
  menuDot = createElement({tagName: 'div', classEl: 'menu-dot'});
  appendChildren(menuContainer, menuDot);

  return menuContainer;
}