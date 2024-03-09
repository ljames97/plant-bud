/**
 * Project: Plant Care Assistant App - Draft Portfolio Project (PlantBud)
 *
 * Description:
 * A plant care assistant for discovering suitable plants for the user's home as well as learning about and keeping track of their plants. 
 *
 * Version: 1.0.0
 * Author: Luke James
 * Created on: 09/01/2024
 * 
 */

import { dashboardInit, globalInit, homeInit } from "./components/eventHandling";

document.addEventListener('DOMContentLoaded', () => {
  globalInit();

  if (document.body.classList.contains('dashboard-page')) {
    dashboardInit();
  } else if (document.body.classList.contains('home-page')) {
    homeInit();
  }
});