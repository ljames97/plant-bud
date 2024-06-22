// modal.test.js
/**
 * Unit test for the modal related functions.
 */

import { removeModal, setUpModal } from "../../../../components/global/dom-utils/modal.js";
import { setUpModalListeners } from "../../../../components/global/event-handlers/modalEventHandlers.js";
import { clearSection } from "../../../../components/global/dom-utils/sectionManipulation.js";
import { removeChildren } from "../../../../components/global/utils/gobalUtility.js";

jest.mock('../../../../components/global/event-handlers/modalEventHandlers.js');
jest.mock('../../../../components/global/dom-utils/sectionManipulation.js');
jest.mock('../../../../components/global/utils/gobalUtility.js');

describe('modal tests', () => {
  let modal, menuContainer, modalOverlay;

  beforeEach(() => {
    document.body.innerHTML = `
    <div class="modal-overlay">
      <div class="modal"></div>
    </div>
    <div class="menu-container"><div>
    `;

    modal = document.querySelector('.modal');
    menuContainer = document.querySelector('.menu-container');
    modalOverlay = document.querySelector('.modal-overlay');
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  })

  describe('setUpModal', () => {
    test('should add flex class to modal and modal overlay', () => {
      setUpModal(modal, menuContainer, 'PLANT_LOG');
  
      expect(modalOverlay.classList.contains('flex')).toBe(true);
      expect(modal.classList.contains('flex')).toBe(true);
    });
  
    test('should call setUpModalListeners with correct arguments', () => {
      setUpModal(modal, menuContainer, 'PLANT_LOG');
  
      expect(setUpModalListeners).toHaveBeenCalledWith(modalOverlay, modal, 'PLANT_LOG');
    });
  });

  describe('removeModal', () => {
    test('should call clearSection and removeChildren with correct arguments', () => {
      removeModal(modal, 'PLANT_LOG');

      expect(clearSection).toHaveBeenCalledWith(modal, 'PLANT_LOG');
      expect(clearSection).toHaveBeenCalledWith(modalOverlay, 'PLANT_LOG')
      expect(removeChildren).toHaveBeenCalledWith(modalOverlay, modal);
    });

    test('should remove flex class to modalOverlay', () => {
      removeModal(modal, 'PLANT_LOG')

      expect(modalOverlay.classList.contains('flex')).toBe(false);
    });
  });
});