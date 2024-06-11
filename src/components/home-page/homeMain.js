import './homePage.css';
import { createHomePageElements } from "./homePageDomUtils";
import { logoutBtnHandler } from './homePageEventHandlers';

/**
 * Entry point to render the home page elements.
 */
export const renderHomePage = () => {
  createHomePageElements();
  logoutBtnHandler();
}