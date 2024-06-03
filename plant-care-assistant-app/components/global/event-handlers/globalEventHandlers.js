// globalEventHandling.js
/**
 * Global event handler logic and initialisation.
 */

import { globalDomElements } from "../dom-utils";

/**
 * Global initalisation for shared event handling.
 */
export const globalInit = () => {
  setUpGlobalEventListeners();
}

/**
 * Creates an event manager for adding, removing, and managing DOM event listeners.
 * The manager supports categorization of event listeners into registries for organized management,
 * facilitating bulk operations like removing all listeners within a specific category.
 *
 * @returns {Object} An object containing methods for event listener management.
 */
const eventManager = () => {
  // Storage for all event handlers, organized by registry name and then event type.
  let handlers = {};

  return {
    /**
     * Adds an event listener to a specified element and registers it within a named registry.
     * If the registry or event type does not exist, they are created dynamically.
     *
     * @param {HTMLElement} element - The DOM element to attach the event listener to.
     * @param {String} eventType - The type of event to listen for (e.g., 'click').
     * @param {Function} handler - The callback function to execute when the event is triggered.
     * @param {String} [registryName='global'] - (Optional) The name of the registry to group this listener under. Defaults to 'GLOBAL'.
     */
    addEventListener: (element, eventType, handler, registryName = 'GLOBAL') => {
      if (!handlers[registryName]) {
        handlers[registryName] = {};
      }
      if (!handlers[registryName][eventType]) {
        handlers[registryName][eventType] = [];
      }
      element.addEventListener(eventType, handler);
      handlers[registryName][eventType].push({ element, handler });
    },

    getHandlers: () => {
      console.log(handlers);
    },

    /**
     * Removes an event listener from a specified element within a named registry.
     * After removal, it cleans up empty registries and event type collections as needed.
     *
     * @param {HTMLElement} element - The DOM element to remove the event listener from.
     * @param {String} eventType - The type of event the listener was attached to.
     * @param {String} [registryName='global'] - (Optional) The name of the registry the listener belongs to. Defaults to 'GLOBAL'.
     */
    removeEventListener: (element, eventType, registryName = 'GLOBAL') => {
      if (handlers[registryName] && handlers[registryName][eventType]) {
        handlers[registryName][eventType] = handlers[registryName][eventType].filter(({ element: el, handler }) => {
          const shouldRemove = el === element;
          if (shouldRemove) {
            element.removeEventListener(eventType, handler);
          }
          return !shouldRemove;
        });

        if (handlers[registryName][eventType].length === 0) {
          delete handlers[registryName][eventType];
        }

        if (Object.keys(handlers[registryName]).length === 0) {
          delete handlers[registryName];
        }
      }
    },

    /**
     * Removes all event listeners from a specific registry, or from all registries if no registry name is specified.
     * Useful for cleaning up event listeners en masse, e.g., when unmounting a component or clearing a page section.
     *
     * @param {String} [registryName='global'] - (Optional) The name of the registry to clear listeners from. Defaults to 'GLOBAL'.
     */
    removeAllEventListeners: (registryName = 'GLOBAL') => {
      if (handlers[registryName]) {
        Object.keys(handlers[registryName]).forEach(eventType => {
          handlers[registryName][eventType].forEach(({ element, handler }) => {
            element.removeEventListener(eventType, handler);
          });
        });
        delete handlers[registryName]; // Clears the registry
      }
    }
  };
};

export const localEventManager = eventManager();

/**
 * Manages global elements and their event handlers.
 */
const setUpGlobalEventListeners = () => {
  const { mobileMenuBars, mobileNavCloseBtn } = globalDomElements;

  localEventManager.addEventListener(mobileMenuBars, 'click', () => {
    toggleMobileNav(true);
  }, 'MOBILE_NAV');
  localEventManager.addEventListener(mobileNavCloseBtn, 'click', () => {
    toggleMobileNav(false);
  }, 'MOBILE_NAV');
}