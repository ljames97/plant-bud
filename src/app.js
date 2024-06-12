import { dashboardInit } from "./components/global";
import { plantLog } from "./components/plant-log";
import { getUserPlantsFromFirebase } from "./config";

export const initApp = async (userId) => {
  dashboardInit();
  plantLog.setUserId(userId);

  const userPlants = await getUserPlantsFromFirebase(userId);
  if (userPlants.length === 0) {
    return;
  }
  plantLog.initialisePlantLog(userPlants);
  console.log(userPlants);

  console.log(plantLog.getUserPlantLog());
}