// sectionManipulation.rewire.test.js
/**
 * Unit test for sectionManipulation functions.
*/

import { localEventManager } from '../../../../components/global/event-handlers/globalEventHandlers';
import { resetSection, clearSection, __RewireAPI__ as sectionRewireAPI } from '../../../../components/global/dom-utils/sectionManipulation.js';

jest.mock('../../../../components/global/event-handlers/globalEventHandlers');

describe('sectionManipulation', () => {
  describe('clearSection', () => {
    beforeEach(() => {
      document.body.innerHTML = `
      <div class="elements">
        <div class="child"></div>
        <div class="child"></div>
        <div class="child"></div>
      </div>
      `;
    });
  
    afterEach(() => {
      document.body.innerHTML = '';
      jest.clearAllMocks();
    });
  
    test('should remove all children from element, if element can be found', () => {
      const element = document.querySelector('.elements');
  
      clearSection(element, 'PLANT_LOG');
  
      expect(element.firstChild).toBe(null);
    });
  
    test('should return if no element', () => {
      const element = undefined;
  
      clearSection(element, 'PLANT_LOG');
  
      expect(localEventManager.removeAllEventListeners).not.toHaveBeenCalled();
    });
  });
  
  describe('resetSection', () => {
    let mockClearSection;

    beforeEach(() => {
      mockClearSection = jest.fn();
      sectionRewireAPI.__Rewire__('clearSection', mockClearSection);
      document.body.innerHTML = `
        <div class="section"></div>
      `;
    });
  
    afterEach(() => {
      sectionRewireAPI.__ResetDependency__('clearSection');
      document.body.innerHTML = '';
      jest.clearAllMocks();
    });
  
    test('should call clear section with correct arguments and renderSection', () => {
      const renderSection = jest.fn();
  
      resetSection('.section', renderSection, 'PLANT_LOG');
  
      const section = document.querySelector('.section');
      expect(mockClearSection).toHaveBeenCalledWith(section, 'PLANT_LOG');
      expect(renderSection).toHaveBeenCalled();
    });
  });  
});