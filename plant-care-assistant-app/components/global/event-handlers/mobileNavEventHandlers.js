/**
 * Open/close the mobile navigation.
 * @param {boolean} isOpen 
 */
export const toggleMobileNav = (isOpen) => {
  const mobileNavModal = document.querySelector('.mobile-nav-modal');
  if (isOpen) {
    mobileNavModal.classList.add('show');
  } else {
    mobileNavModal.classList.remove('show');
  }
}