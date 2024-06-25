import { sectionInit, setUpDashboardEventListeners, dashboardInit } from './dashboardEventHandlers.js';
import { localEventManager } from './globalEventHandlers.js';
import { imageChangeHandler } from './imageEventHandlers.js';
import { toggleMobileNav } from './mobileNavEventHandlers.js';
import { setUpModalListeners, handleDocumentClick } from './modalEventHandlers.js';

export { 
  sectionInit, setUpDashboardEventListeners, dashboardInit,
  localEventManager,
  imageChangeHandler,
  toggleMobileNav,
  setUpModalListeners, handleDocumentClick
 }