import { renderNewPlantSearch } from "../plant-discovery/plantDiscoveryMain";
import { renderPlantQuiz } from "../plant-quiz/plantQuizMain";
import { clearSection, createElement, domElements } from "../utils/globalDomManipulation"
import { localEventManager } from "../utils/globalEventHandling";
import { appendChildren, removeChildren } from "../utils/gobalUtility";


export const renderDiscoveryPage = () => {
  const { plantDiscovery } = domElements;
  const { plantQuizButton, plantLibraryButton } = createDiscoveryPageElements(plantDiscovery);

  appendChildren(plantDiscovery, plantQuizButton, plantLibraryButton);
}

const createDiscoveryPageElements = (plantDiscovery) => {
  const plantQuizButton = createElement({tagName: 'button', classEl: ['plant-quiz-start', 'discovery-button']});
  const plantQuizButtonIcon = createElement({tagName: 'img', classEl: ['plant-quiz-icon']});
  const plantQuizTitle = createElement({tagName: 'p', textContent: 'Plant Quiz'});
  const plantLibraryButton = createElement({tagName: 'button', classEl: ['plant-library-start', 'discovery-button']});
  const plantLibraryButtonIcon = createElement({tagName: 'img', classEl: ['plant-library-icon']});
  const plantLibraryTitle = createElement({tagName: 'p', textContent: 'Plant Library'});

  appendChildren(plantQuizButton, plantQuizButtonIcon, plantQuizTitle);
  appendChildren(plantLibraryButton, plantLibraryButtonIcon, plantLibraryTitle);

  localEventManager.addEventListener(plantQuizButton, 'click', () => {
    clearSection(plantDiscovery, 'plant-discovery');
    renderPlantQuiz();
  }, 'DISCOVERY_PAGE');

  localEventManager.addEventListener(plantLibraryButton, 'click', () => {
    clearSection(plantDiscovery, 'plant-discovery');
    renderNewPlantSearch();
  }, 'DISCOVERY_PAGE')

  return { plantQuizButton, plantLibraryButton };
}