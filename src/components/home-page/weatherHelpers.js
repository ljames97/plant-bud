// weatherHelpers.js

import { getUserLocation, roundToNearestWhole } from "../global/utils";

/**
 * Fetches the current weather data from the OpenWeatherMap API using user location.
 * @returns {Object} weather data including description and temperature.
 */
export const getWeatherData = async () => {
  const apiKey = `${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`;
  console.log(apiKey);
  const { latitude, longitude } = await getUserLocation();
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error with network response');
    }
    const data = await response.json();
    const weatherData = createAndStoreWeatherData(data);
    return weatherData;
  } catch (error) {
    console.log('There was an error in fetching weather data', error);
  }
}

/**
 * Creates weather data object and caches the weather data in local storage with a timestamp.
 * @param {Object} data 
 * @returns {Object} weather data including description and temperature.
 */
export const createAndStoreWeatherData = (data) => {
  const weatherData = {
    description: data.weather[0].main,
    temperature: roundToNearestWhole(data.main.temp),
    timestamp: new Date().getTime()
  }

  localStorage.setItem('weatherData', JSON.stringify(weatherData));

  return weatherData;
}

/**
 * Loads weather data either from local storage (if the cached data is still valid) or by fetching fresh data using the OpenWeatherMap API.
 * @returns {Object} An object containing the weather data, including description, temperature, and timestamp.
 */
export const loadWeatherData = async () => {
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