// homepgaeEventHandlers.js

import { logout } from "../../config";
import { localEventManager, sectionInit } from "../global/event-handlers";

export const logoutBtnHandler = () => {
  const logoutBtn = document.querySelector('.profile-icon-container');
  localEventManager.addEventListener(logoutBtn, 'click', async () => {
    try {
      await logout();
      window.location.href = '/login.html'; // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }, 'HOME_PAGE')
}

export const setUpHomePageEventListeners = (desktopLogo, actionButton) => {
  localEventManager.addEventListener(desktopLogo, 'click', () => {
    sectionInit('HOME_PAGE');
  }, 'HOME_PAGE');

  localEventManager.addEventListener(actionButton, 'click', () => {
    sectionInit('MY_PLANTS');
  }, 'HOME_PAGE');
}