import { appendChildren, createElement, domElements } from "../global";

export const renderHomePage = () => {
  createHomePageElements();
}

const createHomePageElements = async () => {
  const { homePage } = domElements;
  const header = document.querySelector('header');
  const logoContainer = createElement({tagName: 'div', classEl: ['logo-container']});
  const logo = createElement({tagName: 'img', classEl: ['logo-img']});
  logo.src = '../../public/home-page-logo.png';
  header.style.display = 'flex';

  appendChildren(logoContainer, logo);
  appendChildren(homePage, logoContainer)

  try {
    const weatherConatiner = await createWeatherContainer();
    appendChildren(homePage, weatherConatiner);
  } catch (error) {
    console.error('Error creating weather container:', error);
  }
}

const createWeatherContainer = async () => {
  const weatherData = await loadWeatherData();

  const weatherContainer = createElement({tagName: 'div', classEl: ['weather-container']});
  const weatherIconContainer = createElement({tagName: 'div', classEl: ['weather-icon-container']});
  const weatherIcon = createElement({tagName: 'div', classEl: ['weather-icon']});
  const tempIconContainer = createElement({tagName: 'div', classEl: ['temperature-icon-container']});
  const tempIcon = createElement({tagName: 'div', classEl: ['temp-icon']});
  const temperature = createElement({tagName: 'p', classEl: ['temperature']});

  weatherIcon.textContent = weatherData.description;
  temperature.textContent = weatherData.temperature;

  appendChildren(weatherIconContainer, weatherIcon);
  appendChildren(tempIconContainer, tempIcon);
  appendChildren(weatherContainer, weatherIconContainer, tempIconContainer, temperature);

  return weatherContainer;
}

const getWeatherData = async () => {
  const apiKey = '7d937292bb8b1f3909c1d557d907ffbc';
  const { latitude, longitude } = await getUserLocation();
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error with network response');
    }
    const data = await response.json();

    const weatherData = {
      description: data.weather[0].main,
      temperature: data.main.temp,
      timestamp: new Date().getTime()
    }

    localStorage.setItem('weatherData', JSON.stringify(weatherData));
    return weatherData;
  } catch (error) {
    console.log('There was an error in fetching weather data', error);
  }
}

const getUserLocation = async () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude })
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  })
}

const loadWeatherData = async () => {
  const cachedData = localStorage.getItem('weatherData');
  const cacheDuration = 10 * 60 * 1000;

  if (cachedData) {
    const weatherData = JSON.parse(cachedData);
    const currentTime = new Date().getTime();

    if (currentTime - weatherData.timestamp < cacheDuration) {
      return weatherData;
    }
  }

  return await getWeatherData();
}