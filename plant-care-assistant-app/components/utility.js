// utility.js
/**
 * A module for utility functions.
 */

/**
 * Utility function to remove item from array.
 * @param {any} array 
 * @param {number} itemId 
 * @returns Updated array with removed item.
 */
export const removeItemFromArray = (array, itemId) => {
  const updatedArray = array.filter(arrayItem => arrayItem.id !==itemId);
  return updatedArray;
}

/**
 * Utility function to find item in array.
 * @param {any} array 
 * @param {number} itemId 
 * @returns Found item in array.
 */
export const findItemInArray = (array, itemId) => {
  const foundItem = array.find(arrayItem => arrayItem.id === itemId);
  return foundItem;
}

/**
 * Utility function to remove child element(s) from parent.
 * @param {HTMLElement} parent 
 * @param  {...HTMLElement} children 
 */
export const removeChildren = (parent, ...children) => {
  children.forEach(child => {
    if (parent.contains(child)) {
      parent.removeChild(child);
    }
  });
}

/**
 * Utility function to append child element(s) to parent element.
 * @param {HTMLElement} parent 
 * @param  {...HTMLElement} children 
 */
export const appendChildren = (parent, ...children) => {
  children.forEach(child => parent.appendChild(child));
}

/**
 * Utility function to hide an element from the DOM.
 * @param  {...HTMLElement} elements - Element(s) to hide from the DOM.
 */
export const hideElements = (...elements) => {
  elements.forEach(element => {
    element.style.display = 'none';
  });
}

/**
 * Utility function to show hidden elements on screen.
 * @param {string} displayType - CSS display type eg. 'grid', 'flex', 'block'.
 * @param {...HTMLElement} elements - Element(s) to show
 */
export const showElements = (displayType, ...elements) => {
  elements.forEach(element => {
    element.style.display = `${displayType}`;
  })
}