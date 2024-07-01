import { localEventManager } from "../../../../components/global/event-handlers/globalEventHandlers";

describe('eventManager', () => {
  let addEventListenerSpy;
  let removeEventListenerSpy;
  let element;
  let eventType;
  let handler;
  let registryName;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="element"></div>
    `;

    element = document.querySelector('.element');
    eventType = 'click';
    handler = jest.fn();
    registryName = 'MY_PLANTS';

    addEventListenerSpy = jest.spyOn(HTMLElement.prototype, 'addEventListener');
    removeEventListenerSpy = jest.spyOn(HTMLElement.prototype, 'removeEventListener');
    localEventManager.removeAllEventListeners();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  describe('addEventListener', () => {
    test('should add new registry and event type', () => {
      localEventManager.addEventListener(element, eventType, handler, registryName);

      expect(addEventListenerSpy).toHaveBeenCalledWith(eventType, handler);

      const handlers = localEventManager.getHandlers();
      expect(handlers).toHaveProperty([registryName, eventType]);
      expect(handlers[registryName][eventType]).toContainEqual({ element, handler });
    });

    test('should set default registryName to GLOBAL if no registryName set', () => {
      localEventManager.addEventListener(element, eventType, handler);
      const handlers = localEventManager.getHandlers();

      expect(handlers).toHaveProperty('GLOBAL');
      expect(handlers['GLOBAL']).toHaveProperty(eventType);
      expect(handlers['GLOBAL'][eventType]).toContainEqual({ element, handler });
    });
  });

  describe('getHandlers', () => {
    test('should return handlers object', () => {
      localEventManager.addEventListener(element, eventType, handler, registryName);
      const handlers = localEventManager.getHandlers();
      expect(handlers).toHaveProperty([registryName, eventType]);
    });
  });

  describe('removeEventListener', () => {
    test('should remove an event listener and update handlers', () => {
      localEventManager.addEventListener(element, eventType, handler, registryName);
      console.log('Before removal:', localEventManager.getHandlers());
      localEventManager.removeEventListener(element, eventType, registryName);
      console.log('After removal:', localEventManager.getHandlers());

      expect(removeEventListenerSpy).toHaveBeenCalledWith(eventType, handler);

      const handlers = localEventManager.getHandlers();
      if (handlers[registryName] && handlers[registryName][eventType]) {
        expect(handlers[registryName][eventType]).not.toContainEqual({ element, handler });
        if (handlers[registryName][eventType].length === 0) {
          expect(handlers[registryName]).not.toHaveProperty(eventType);
        }
      }
    });

    test('should remove registry if it becomes empty', () => {
      localEventManager.addEventListener(element, eventType, handler, registryName);
      localEventManager.removeEventListener(element, eventType, registryName);

      const handlers = localEventManager.getHandlers();
      if (handlers[registryName] && Object.keys(handlers[registryName]).length === 0) {
        expect(handlers).not.toHaveProperty(registryName);
      }
    });
  });

  describe('removeAllEventListeners', () => {
    test('should remove all event listeners from a specific registry', () => {
      localEventManager.addEventListener(element, eventType, handler, registryName);
      localEventManager.removeAllEventListeners(registryName);

      expect(removeEventListenerSpy).toHaveBeenCalledWith(eventType, handler);

      const handlers = localEventManager.getHandlers();
      expect(handlers).not.toHaveProperty(registryName);
    });
  });
});