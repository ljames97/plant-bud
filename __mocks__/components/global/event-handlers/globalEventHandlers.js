// __mocks__/globalEventHandlers.js
export const localEventManager = {
  handlers: {},

  addEventListener: jest.fn((element, eventType, handler, registryName = 'GLOBAL') => {
    if (!localEventManager.handlers[registryName]) {
      localEventManager.handlers[registryName] = {};
    }
    if (!localEventManager.handlers[registryName][eventType]) {
      localEventManager.handlers[registryName][eventType] = [];
    }
    localEventManager.handlers[registryName][eventType].push({ element, handler });
    element.addEventListener(eventType, handler);
  }),

  getHandlers: jest.fn(() => {
    return localEventManager.handlers;
  }),

  removeEventListener: jest.fn((element, eventType, registryName = 'GLOBAL') => {
    if (localEventManager.handlers[registryName] && localEventManager.handlers[registryName][eventType]) {
      localEventManager.handlers[registryName][eventType] = localEventManager.handlers[registryName][eventType].filter(({ element: el, handler }) => {
        const shouldRemove = el === element;
        if (shouldRemove) {
          element.removeEventListener(eventType, handler);
        }
        return !shouldRemove;
      });

      if (localEventManager.handlers[registryName][eventType].length === 0) {
        delete localEventManager.handlers[registryName][eventType];
      }

      if (Object.keys(localEventManager.handlers[registryName]).length === 0) {
        delete localEventManager.handlers[registryName];
      }
    }
  }),

  removeAllEventListeners: jest.fn((registryName = 'GLOBAL') => {
    if (localEventManager.handlers[registryName]) {
      Object.keys(localEventManager.handlers[registryName]).forEach(eventType => {
        localEventManager.handlers[registryName][eventType].forEach(({ element, handler }) => {
          element.removeEventListener(eventType, handler);
        });
      });
      delete localEventManager.handlers[registryName]; // Clears the registry
    }
  })
};
