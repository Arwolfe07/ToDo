import * as api from "../apis/openweather";

export const getWeatherData = (geoData) => async (dispatch) => {
  try {
    const { data } = await api.getWeatherData(geoData);
    dispatch({type: 'FETCH_WEATHER', payload: data});
  } catch (error) {
    console.log(error);
  }
};
