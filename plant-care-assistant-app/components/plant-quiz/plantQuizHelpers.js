import { plantDirectory } from "../utils/data";
import { renderQuizResults } from "./plantQuizDomUtils";

/**
 * Get results of the quiz. Match suitable plants to the users choices and render results on screen.
 * @param {Object} userAnswers - eg. 'skill': 'beginner', 
 */
export const getQuizResults = (userAnswers) => {
  const plantData = plantDirectory;
  const { suitablePlants, closestPlants } = findSuitablePlants(userAnswers, plantData);

  // if there are no suitable plants, the next closest suitable plants will be displayed instead.
  if (suitablePlants.length === 0) {
    renderQuizResults(closestPlants);
  } else {
    renderQuizResults(suitablePlants);
  }
}

/**
 * Find plants with criteria that match the user answers.
 * @param {*} userAnswers 
 * @param {*} plantData 
 * @returns 
 */
const findSuitablePlants = (userAnswers, plantData) => {
  const suitablePlants = plantData.filter(plant => {
    return plant.skill.includes(userAnswers.skill)
    && plant.location.includes(userAnswers.location)
    && plant.flowering.includes(userAnswers.flowering)
    && plant.size.includes(userAnswers.size)
    && plant.transferToOutdoors.includes(userAnswers.transferToOutdoors)
    && plant.time.includes(userAnswers.time)
    && plant.interest.includes(userAnswers.interest)
    && plant.lowEffort.includes(userAnswers.lowEffort)
  });

  const closestPlants = plantData.filter(plant => {
    return plant.skill.includes(userAnswers.skill)
    && plant.size.includes(userAnswers.size)
    && plant.transferToOutdoors.includes(userAnswers.transferToOutdoors)
  });

  return { suitablePlants, closestPlants };
}