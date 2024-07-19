// homepgaeEventHandlers.js

import { logout, deleteAccount } from "../../config";
import { createElement } from "../global/dom-utils";
import { handleDocumentClick, localEventManager, sectionInit } from "../global/event-handlers";
import { appendChildren } from "../global/utils";
import { renderQuickMenu } from "../plant-log/dom-utils";

export const logoutBtnHandler = () => {
  const profileIcon = document.querySelector('.profile-icon-container');
  localEventManager.addEventListener(profileIcon, 'click', (event) => {
    renderQuickMenu(event, createProfileMenu, profileIcon);
  }, 'HOME_PAGE');
  localEventManager.addEventListener(document, 'click', handleDocumentClick, 'PLANT_LOG');
}

const createProfileMenu = (profileIcon) => {
  const dropMenuContainer = createElement({tagName: 'div', classEl: ['drop-menu-container', 'profile-icon-menu']});
  const logout = createElement({tagName: 'p', textContent: 'Logout', classEl: ['drop-menu-item']});
  const deleteAccount = createElement({tagName: 'p', textContent: 'Delete account', classEl: ['drop-menu-item']});

  appendChildren(dropMenuContainer, logout, deleteAccount);
  appendChildren(profileIcon, dropMenuContainer);

  setUpLogoutMenuListeners(logout, deleteAccount);
}

const setUpLogoutMenuListeners = (logoutBtn, deleteUserAccount) => {
  localEventManager.addEventListener(logoutBtn, 'click', async () => {
    try {
      await logout();
      window.location.href = '/login.html'; // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }, 'HOME_PAGE');

  localEventManager.addEventListener(deleteUserAccount, 'click', async () => {
    console.log('clicked');
    await deleteAccount();
  }, 'HOME_PAGE');
}

export const setUpHomePageEventListeners = (desktopLogo, actionButton) => {
  localEventManager.addEventListener(desktopLogo, 'click', () => {
    sectionInit('HOME_PAGE');
  }, 'HOME_PAGE');

  localEventManager.addEventListener(actionButton, 'click', () => {
    sectionInit('MY_PLANTS');
  }, 'HOME_PAGE');
}