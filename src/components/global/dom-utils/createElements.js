// createElements.js

import { addedPlantIcon, archiveIcon } from "../../../images";
import { appendChildren } from "../utils";

/**
 * Utility function to create a new HTML element.
 * @param {HTMLElement} tagName - Type of element to create (eg. 'div', 'button').
 * @param {string} placeholder - Placeholder text for input elements.
 * @param {string} textContent - Text content for the element.
 * @param {string} classEl - CSS class to assign to the element.
 * @param {string} id - ID to assign to the element.
 * @param {string} value - Value attribute for input elements.
 * @returns {HTMLElement} Newly created HTML element.
 */
export const createElement = ( { tagName = '', placeholder = '', textContent = '', classEl = [], id = '', value = '', type = '', fr = '', dataAttributes = {}, ariaLabel = '', alt = '' }) => {
  const element = document.createElement(tagName);
  if (placeholder) element.placeholder = placeholder;
  if (textContent) element.textContent = textContent;
  if (classEl) classEl.forEach(cl => element.classList.add(cl));
  if (id) element.id = id;
  if (value) element.value = value;
  if (type) element.type = type;
  if (fr) element.htmlFor = fr;
  if (ariaLabel) element.setAttribute('aria-label', ariaLabel);
  if (tagName === 'img' && alt) element.alt = alt;

  Object.keys(dataAttributes).forEach(key => {
    element.setAttribute(`data-${key}`, dataAttributes[key]);
  });

  return element;
}

/**
 * Creates and returns the menu dots container element.
 * @returns Menu dots container element.
 */
export const createMenuDots = () => {
  let menuDot = '';
  const menuDotContainer = createElement({tagName: 'div', classEl: ['menu-dots-container']});
  menuDot = createElement({tagName: 'div', classEl: ['menu-dot']});
  appendChildren(menuDotContainer, menuDot);
  menuDot = createElement({tagName: 'div', classEl: ['menu-dot']});
  appendChildren(menuDotContainer, menuDot);
  menuDot = createElement({tagName: 'div', classEl: ['menu-dot']});
  appendChildren(menuDotContainer, menuDot);

  return menuDotContainer;
}

/**
 * Creates and returns a new "Added" icon.
 * @returns {HTMLElement} New icon.
 */
export const createIcon = (iconType) => {
  const newIcon = createElement({tagName: 'div', classEl: ['added-to-plants-icon', 'back-button']});
  const newIconImg = createElement({tagName: 'img'});
  const icon = iconType === 'ADDED' ? addedPlantIcon : archiveIcon;
  newIconImg.src = icon;
  appendChildren(newIcon, newIconImg);

  return newIcon;
}