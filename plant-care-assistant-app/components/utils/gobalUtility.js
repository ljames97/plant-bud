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

/**
 * Utility function to create new array with two random items from original array.
 * @param {Array} arr 
 * @param {number} size 
 * @returns 
 */
export const randomiseArray = (arr, size) => {
  let shuffled = arr.slice(0), i = arr.length, temp, index;
  while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}

/**
 * Utility function to return formatted date.
 * @returns date in the format dd/mm/yyyy
 */
export const getDate = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // January is 0!
  const year = now.getFullYear();

  const formattedDate = day + '/' + month + '/' + year;

  return formattedDate;
}