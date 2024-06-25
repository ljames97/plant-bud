import { createElement } from "../../global/dom-utils";
import { appendChildren } from "../../global/utils";

/**
 * Creates and returns a tag button element.
 * @param {String} tagName 
 * @returns {HTMLElement} Tag button element.
 */
export const createTagButton = (tagName) => {
  const tagButton = createElement({tagName: 'button', textContent: tagName, classEl: ['tag-button']});
  return tagButton;
}

/**
 * Creates and returns tag container for the plant tags: skill, flowering, outdoor, effort.
 * @param {Object} plant - plant object.
 * @returns {HTMLElement} Tag container with appended tags.
 */
export const createTags = (plant) => {
  let skillTag, flowerTag, outdoorTag, effortTag

  if (plant.skill) {
    skillTag = createTagButton(plant.skill[0]);
  }
  
  if (plant.florwering && plant.florwering.includes('Yes')) {
    flowerTag = createTagButton('Flowering');
  }

  if (plant.transferToOutdoors && plant.transferToOutdoors.includes('Yes')) {
    outdoorTag = createTagButton('+ Outdoors');
  }

  if (plant.lowEffort && plant.lowEffort.includes('No')) {
    effortTag = createTagButton('Low effort');
  }

  const tagContainer = createElement({tagName: 'div', classEl: ['tag-container']});
  appendChildren(tagContainer, skillTag, flowerTag, outdoorTag, effortTag)

  return tagContainer;
}