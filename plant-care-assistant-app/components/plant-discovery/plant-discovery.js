// plant-discovery.js

import { domElements, prepareDashboard } from "../domManipulation"

export const startPlantDiscovery = () => {
  const { myPlantsBtn, plantQuizBtn, discoverBtn } = domElements;
  prepareDashboard(discoverBtn, myPlantsBtn, plantQuizBtn);
  renderPlantDiscovery();
}

const renderPlantDiscovery = () => {

}