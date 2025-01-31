// app.js

import { dashboardInit } from "./components/global/event-handlers";
import { plantLog } from "./components/plant-log";
import { getUserPlantsFromFirebase } from "./config";

export const initApp = async (userId) => {
  dashboardInit();
  plantLog.setUserId(userId);

  if (userId !== 'guest') {
    const userPlants = await getUserPlantsFromFirebase(userId, 'plants');
    const originalPlants = await getUserPlantsFromFirebase(userId, 'original');
    plantLog.initialisePlantLog(userPlants, originalPlants);
  } else {
    const userPlants = sessionStorage.getItem('plants');
    const originalPlants = sessionStorage.getItem('original');;
    plantLog.initialisePlantLog(userPlants, originalPlants);
  }
}