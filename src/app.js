// app.js

import { dashboardInit } from "./components/global/event-handlers";
import { plantLog } from "./components/plant-log";
import { getUserPlantsFromFirebase } from "./config";

export const initApp = async (userId) => {
  dashboardInit();
  plantLog.setUserId(userId);

  const userPlants = await getUserPlantsFromFirebase(userId, 'plants');
  const originalPlants = await getUserPlantsFromFirebase(userId, 'original');
  plantLog.initialisePlantLog(userPlants, originalPlants);
}

// trying to fix safari mobile issue
const setVh = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVh();

window.addEventListener('resize', setVh);