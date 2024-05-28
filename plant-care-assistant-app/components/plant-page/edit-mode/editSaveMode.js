import { createElement } from "../../utils/globalDomUtils";
import { appendChildren, removeChildren } from "../../utils/gobalUtility";
import { removeImageInput } from "../dom-utils";
import { setUpDeleteResetBtns, setUpImageInput } from "../event-handlers";
import { toggleEditFields } from "./toggleEditMode";

/**
 * To edit plant details including title, image, date and description.
 * @param {Object} plant 
 * @param {HTMLElement} editBtn 
 * @param {Object} elements 
 * @param {string} sectionClass 
 * @param {Function} sectionRender 
 */
export const editMode = (plant, editBtn, elements, sectionClass, sectionRender) => {
  editBtn.textContent = 'Save';
  toggleEditFields(plant, elements);

  const imageInput = createElement({tagName: 'input', classEl: ['file-input'], id: 'file-upload', type: 'file'});
  const label = createElement({tagName: 'label', classEl: ['file-upload-label'], fr: 'file-upload'});
  const imageInputImg = createElement({tagName: 'img', classEl: ['image-input-img']});
  const imageContainer = document.querySelector('.plant-page-image-container');
  imageInputImg.src = '../../public/footer-nav-icons/add.png';

  appendChildren(label, imageInputImg, imageInput);
  appendChildren(imageContainer, label);
  setUpImageInput(imageInput, elements, sectionClass, plant);

  const buttonContainer = createElement({tagName: 'div', classEl: ['edit-button-container']});
  const deletePlantBtn = createElement({tagName: 'button', textContent: 'Delete Plant', classEl: ['delete-plant-btn']});
  const resetPlantDetailsBtn = createElement({tagName: 'button', textContent: 'Reset plant details', classEl: ['reset-plant-btn']});
  const aboutSection = document.querySelector('.about-section')
  appendChildren(buttonContainer, resetPlantDetailsBtn, deletePlantBtn)
  appendChildren(aboutSection, buttonContainer);

  setUpDeleteResetBtns(plant, elements, sectionClass, sectionRender, deletePlantBtn, resetPlantDetailsBtn);
}

/**
* To save edited plant details to the userPlantLog and render the changes on screen.
* @param {Object} plant 
* @param {HTMLElement} editBtn 
* @param {Object} elements 
*/
export const saveMode = (plant, editBtn, elements) => {
 editBtn.textContent = 'Edit';

 let updatedName = document.querySelector('.edit-plant-title').value;
 let updatedDescription = document.querySelector('.edit-plant-notes').value;

 if (updatedName !== '') {
   plant.name = updatedName;
 } else {
   updatedName = plant.name;
 }

 if (updatedDescription !== '') {
   plant.description = updatedDescription;
 } else {
   updatedDescription = plant.description
 }

 const buttonContainer = document.querySelector('.edit-button-container');
 const aboutSection = document.querySelector('.about-section')
 removeChildren(aboutSection, buttonContainer);

 plantLog.updatePlantInfo(plant);

 elements.plantTitle.textContent = updatedName;
 elements.plantDescription.textContent = updatedDescription;

 removeImageInput();
}