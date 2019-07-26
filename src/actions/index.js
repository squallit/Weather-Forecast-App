import axios from 'axios';
import {OPEN_WEATHER_API} from '../config';

const API_KEY = OPEN_WEATHER_API; //Insert your Open Weather API here
const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  //`` & $ - Template literals is for string interpolation & multiple line string in javaScript
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
