// modalEventHandlers.test.js

import { removeModal } from "../../../../components/global/dom-utils/modal.js";
import { handleDocumentClick, localEventManager, setUpModalListeners } from "../../../../components/global/event-handlers";

jest.mock('../../../../components/global/dom-utils/modal.js');
jest.mock('../../../../components/global/event-handlers/globalEventHandlers.js')

describe('modalEventHandlers', () => {
  describe('setUpModalListeners', () => {
    beforeEach(() => {
      document.body.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal"</div>
      `;
    });

    afterEach(() => {
      document.body.innerHTML = '';
      jest.clearAllMocks();
    });

    test('should add event listener with correct arguements', () => {
      const modalOverlay = document.querySelector('modal-overlay');
      const modal = document.querySelector('modal');
      const eventRegistry = 'MY_PLANTS';

      setUpModalListeners(modalOverlay, modal, eventRegistry);

      expect(localEventManager.addEventListener).toHaveBeenCalledWith(
        modalOverlay,
        'click',
        expect.any(Function),
        eventRegistry
      );

      expect(localEventManager.addEventListener).toHaveBeenCalledWith(
        modal,
        'click',
        expect.any(Function),
        eventRegistry
      );
      
      const clickHandler = localEventManager.addEventListener.mock.calls[0][2];
      clickHandler();
      
      expect(removeModal).toHaveBeenCalledWith(modal, eventRegistry);
    })
  });

  describe('handleDocumentClick', () => {
    let dropMenuContainer, mockDiv
    beforeEach(() => {
      document.body.innerHTML = `
      <div class="drop-menu-container"></div>
      <div class="mock-div"></div>
      `;
      dropMenuContainer = document.querySelector('.drop-menu-container');
      mockDiv = document.querySelector('.mock-div');
    });

    afterEach(() => {
      document.body.innerHTML = '';
      jest.clearAllMocks();
    });

    test('should remove dropMenuContainer if click event target is outside', () => {
      const event = {
        target: mockDiv
      };

      handleDocumentClick(event);

      dropMenuContainer = document.querySelector('.drop-menu-container');
      expect(dropMenuContainer).toBe(null);
    });
  });
});