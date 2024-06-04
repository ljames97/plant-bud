import { appendChildren, createElement, domElements } from "../global";

export const renderHomePage = () => {
  createHomePageElements();
}

const createHomePageElements = () => {
  const { homePage } = domElements;
  const header = document.querySelector('header');
  const logoContainer = createElement({tagName: 'div', classEl: ['logo-container']});
  const logo = createElement({tagName: 'img', classEl: ['logo-img']});
  logo.src = '../../public/home-page-logo.png';
  header.style.display = 'flex';

  appendChildren(logoContainer, logo);
  appendChildren(homePage, logoContainer)
}
