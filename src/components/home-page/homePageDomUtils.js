// homePageDomUtils.js

import { clear, clouds, drizzle, homePageLogo, rain, snow, thunderstorm } from "../../images";
import { createElement, domElements } from "../global/dom-utils";
import { appendChildren } from "../global/utils";
import { plantLog, setPlantInfoBar } from "../plant-log";
import { loadWeatherData } from "./weatherHelpers";

/**
 * Creates and appends the necessary elements for the home page, including the logo and weather container.
 */
export const createHomePageElements = async () => {
  const { homePage } = domElements;
  const header = document.querySelector('header');
  const logoContainer = createElement({tagName: 'div', classEl: ['logo-container']});
  const logo = createElement({tagName: 'img', classEl: ['logo-img'], alt: 'Logo'});

  logo.src = homePageLogo;
  header.classList.add('hidden-nav');

  appendChildren(logoContainer, logo);
  appendChildren(homePage, logoContainer);
  await appendWeatherContainer(homePage);
}

/**
 * Handles any errors that occur during the creation of the weather container and appends container to home page.
 */
export const appendWeatherContainer = async () => {
  try {
    const container = document.getElementById('weather-container');
    if (container) {
      return;
    }

    const weatherContainer = await createWeatherContainer();
    const header = document.querySelector('header');

    appendChildren(header, weatherContainer);
  } catch (error) {
    console.error('Error creating weather container:', error);
  }
}

/**
 * Sets the weather icon based on the weather description.
 * @param {String} weatherDescription 
 * @param {HTMLElement} weatherIcon 
 */
export const setWeatherIcon = (weatherDescription, weatherIcon) => {
  const weatherIcons = {
    clear: clear,
    clouds: clouds,
    rain: rain,
    drizzle: drizzle,
    thunderstorm: thunderstorm,
    snow: snow
  }

  const iconPath = weatherIcons[weatherDescription.toLowerCase()] || clouds;
  weatherIcon.src = iconPath;
}

/**
 * Asynchronously loads weather data and plant task information.
 * Creates and returns the weather container.
 * Displays the number of tasks for the day.
 */
export const createWeatherContainer = async () => {
  const weatherData = await loadWeatherData();
  const { numberOfTasks } = setPlantInfoBar(plantLog.getUserPlantLog());

  const weatherContainer = createElement({tagName: 'div', id: 'weather-container'});
  const weatherIconContainer = createElement({tagName: 'div', classEl: ['weather-icon-container']});
  const weatherIcon = createElement({tagName: 'img', classEl: ['weather-icon']});
  const temperature = createElement({tagName: 'p', classEl: ['temperature']});
  const dailyTasks = createElement({tagName: 'div', classEl: ['daily-tasks']})
  const taskText = createElement({tagName: 'p', textContent: `Today's tasks:`, classEl: ['daily-task-text']});
  const taskCount = createElement({tagName: 'p', textContent: `${numberOfTasks}`, classEl: ['daily-task-count']});

  temperature.textContent = `${weatherData.temperature}°C`;

  setWeatherIcon(weatherData.description, weatherIcon);
  appendChildren(weatherIconContainer, weatherIcon);
  appendChildren(weatherContainer, weatherIconContainer, temperature);

  return weatherContainer;
}