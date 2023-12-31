import axios from "axios";

const API = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

const API_KEY = "47f6bb6bf148fa283d607fcd1ab6790d";

export const getWeatherData = (data) =>
  API.get(`/onecall?lat=${data.lat}&long=${data.long}&appid=${API_KEY}`);
