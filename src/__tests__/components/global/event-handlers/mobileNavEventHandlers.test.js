// mobileENavEventHandlers.test.js

import { toggleMobileNav } from "../../../../components/global/event-handlers";

describe('toggleMobileNav', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div class="mobile-nav-modal"><div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
  });

  test('should add show class if isOpen = true', () => {
    const mobileNavModal = document.querySelector('.mobile-nav-modal');
    const isOpen = true;
    toggleMobileNav(isOpen);

    expect(mobileNavModal.classList.contains('show')).toBe(true);
  });

  test('should remove show class if isOpen = false', () => {
    const mobileNavModal = document.querySelector('.mobile-nav-modal');
    const isOpen = false;
    toggleMobileNav(isOpen);

    expect(mobileNavModal.classList.contains('show')).toBe(false);
  });
});