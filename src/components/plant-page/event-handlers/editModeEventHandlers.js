import { plantLog, renderMyPlants } from "../../plant-log";
import { clearSection, resetSection } from "../../global";
import { imageChangeHandler, localEventManager } from "../../global";
import { renderPlantDetails } from "../plantPageMain";
import { deleteImageFromFirebase, updatePlantInFirebase, uploadImageToFirebase } from "../../../config";


/**
 * Delete the plant from userPlantLog and reset the My Plants section.
 * @param {Object} plant 
 */
export const deletePlantBtnHandler = (plant) => {
  plantLog.deletePlantFromLog(plant);
  resetSection('.plant-log', renderMyPlants, 'ADD_PLANT');
}

/**
 * Reset plant details to their initial state before any user edits. 
 * @param {Object} plant 
 * @param {Object} elements 
 * @param {String} sectionClass 
 * @param {Function} sectionRender 
 */
export const resetPlantDetailsBtnHandler = async (plant, elements, sectionClass, sectionRender) => {
  const originalPlant = plantLog.getOriginalPlant(plant);

  plant.name = originalPlant.name;
  plant.dateAdded = originalPlant.dateAdded;
  plant.description = originalPlant.description;
  await deleteImageFromFirebase(plant.image, 'plants');
  plant.image = originalPlant.image;
  await updatePlantInFirebase(plant.firestoreId, plant, 'plants');

  clearSection(elements.sectionContainer, 'PLANT_PAGE');
  renderPlantDetails(plant, elements.sectionContainer, '← back to My Plants', sectionClass, sectionRender);
}

/**
 * Sets up the delete plant and reset plant details buttons. 
 * @param {Object} plant 
 * @param {Object} elements 
 * @param {String} sectionClass 
 * @param {Function} sectionRender 
 * @param {HTMLElement} deletePlantBtn 
 * @param {HTMLElement} resetPlantDetailsBtn 
 */
export const setUpDeleteResetBtns = (plant, elements, sectionClass, sectionRender, deletePlantBtn, resetPlantDetailsBtn) => {
  localEventManager.addEventListener(deletePlantBtn, 'click', () => {
    deletePlantBtnHandler(plant);
  }, 'PLANT_PAGE');
  localEventManager.addEventListener(resetPlantDetailsBtn, 'click', () => {
    resetPlantDetailsBtnHandler(plant, elements, sectionClass, sectionRender);
  });
}

/**
 * Set up user image input. User can choose a file from their device to uplaod. 
 * @param {HTMLElement} imageInput 
 * @param {Object} elements 
 * @param {String} sectionClass 
 * @param {Object} plant 
 */
export const setUpImageInput = (imageInput, elements, sectionClass, plant) => {
  imageInput.type = 'file';
  imageInput.classList.add('edit-plant-image');
  imageInput.accept = 'image/*';
  elements.plantImageContainer.insertBefore(imageInput, elements.plantImageContainer.firstChild);

  localEventManager.addEventListener(imageInput, 'change', async (event) => {
    imageChangeHandler(event, async (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        elements.plantImage.src = e.target.result;
      }
      reader.readAsDataURL(file);

      try {
        await deleteImageFromFirebase(plant.image);
        const imageUrl = await uploadImageToFirebase(file, 'plants');
        plant.image = imageUrl;
      } catch (error) {
        console.error("Error uploading image:", error);
      }

      await updatePlantInFirebase(plant.firestoreId, plant, 'plants');
    });
  }, `PLANT_PAGE_${sectionClass}`);
}