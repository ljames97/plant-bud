// plant-discovery.js

import { domElements, prepareDashboard } from "../domManipulation"
import { renderNewPlantSearch } from "../plantSearch";


// TODO
// - search for plant logic, search through the directory
// - documentation
// - start the main todo list
// 


export const startPlantDiscovery = () => {
  const { myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;

  if (discoverBtn.classList.contains('active')) {
    console.log('ACTIVE');
    return;
  }

  if (discoverBtn.classList.contains('dormant')) {
    prepareDashboard(discoverBtn, myPlantsBtn, plantQuizBtn);
    return;
  }

  prepareDashboard(discoverBtn, myPlantsBtn, plantQuizBtn);
  renderNewPlantSearch();
  discoverBtn.classList.add('dormant');

}