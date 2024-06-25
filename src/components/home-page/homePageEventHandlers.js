import { logout } from "../../config";
import { localEventManager } from "../global/event-handlers";

export const logoutBtnHandler = () => {
  const logoutBtn = document.querySelector('.profile-icon-container');
  localEventManager.addEventListener(logoutBtn, 'click', async () => {
    try {
      await logout();
      window.location.href = '/login.html'; // Redirect to login page after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  })
}