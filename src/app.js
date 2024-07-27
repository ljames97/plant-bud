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