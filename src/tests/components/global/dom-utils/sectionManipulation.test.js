// prepareDashboard.test.js
/**
 * Unit tests for section manipulation functions.
 */

import { clearSection } from "../../../../components/global";
import { localEventManager } from "../../../../components/global/event-handlers/globalEventHandlers.js";

jest.mock('../../../../components/global/event-handlers/globalEventHandlers.js');

describe('clearSection', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div class="element">
      <div class="child-1"></div>
      <div class="child-2"></div>
      <div class="child-3"></div>
    </div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  test('should remove all children from element, if element can be found', () => {
    const element = document.querySelector('.element');

    clearSection(element, 'PLANT_LOG');

    expect(element.firstChild).toBe(null);
  });

  test('should return if no element', () => {
    const element = undefined;

    clearSection(element, 'PLANT_LOG');

    expect(localEventManager.removeAllEventListeners).not.toHaveBeenCalled();
  })
});