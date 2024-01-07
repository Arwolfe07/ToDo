import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../../actions/weather";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { updateLocation } from "../../actions/auth";
import ShimmerUI from "../ShimmerUI";

const WeatherInfoSection = () => {
  const user = useSelector((state) => state.currentUserReducer);
  const weatherInfo = useSelector((state) => state.weatherInfoReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user !== null && Object.keys(user?.result?.location).length !== 0) {
      dispatch(
        getWeatherData({
          lat: user?.result.location?.latitude,
          long: user?.result.location?.longitude,
        })
      );
    }
  }, [user]);
  const getLocationHandler = async () => {
    // small api to get location i.e. coordinates and place (might give false results on non-gps devices)
    const { data } = await axios.get("https://ipapi.co/json");

    dispatch(
      updateLocation({
        location: {
          latitude: data.latitude,
          longitude: data.longitude,
          area: `${data.city}, ${data.region}`,
        },
      })
    );

    dispatch({
      type: "SET_MESSAGE",
      payload: "If you see wrong location please turn on GPS",
    });
  };
  return (
    <>
    
        <div className="md:w-1/2 sm:w-1/2 lg:w-1/3 w-2/3 flex items-center flex-col mx-auto">
          {user !== null &&
            Object.keys(user?.result?.location).length === 0 && (
              <div className="mx-2 w-full lg:p-6 p-1 bg-white bg-opacity-50 h-fit hover:cursor-pointer rounded-lg hover:translate-x-1 hover:translate-y-1 duration-150 hover:border-2 h-1/2 flex justify-center items-center flex-col">
                <p className="my-4 font-bold tracking-tight text-lg">
                  Get weather info by using your location
                </p>
                <button
                  type="button"
                  className="flex py-2.5 w-1/2 items-center justify-center rounded-md bg-primary px-3 sm:py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-other focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  onClick={getLocationHandler}
                >
                  <FaLocationCrosshairs className="mr-2" />
                  <span className="hidden sm:block">Get Weather</span>
                </button>
              </div>
            )}
          {user !== null &&
            Object.keys(user?.result?.location).length !== 0 && weatherInfo ? (
              <div className="mx-2 w-full lg:p-6 p-1 bg-white bg-opacity-50 h-fit hover:cursor-pointer rounded-lg hover:translate-x-1 hover:translate-y-1 duration-150 hover:border-2 ">
                <div className="flex justify-between items-center ">
                  <div>
                    <p className="tracking-tight text-2xl font-extrabold">
                      {user?.result?.location?.area}
                    </p>
                    <p className="text-lg font-bold tracking-tight text-primary">
                      {weatherInfo?.weather[0]?.description}
                    </p>
                  </div>
                  <img
                    src={`./src/assets/icons/${weatherInfo?.weather[0]?.icon}.png`}
                    alt="weather-icon"
                  />
                </div>
                <div className="flex justify-between items-center ">
                  <p className="text-4xl font-bold text-primary">
                    {weatherInfo?.main?.temp}°C
                  </p>
                  <div className="w-1/2">
                    <div className="flex justify-between">
                      <span className="text-md tracking-tight text-left">
                        Feels like{" "}
                      </span>
                      <span className="font-bold text-right">
                        {weatherInfo?.main?.feels_like}°C
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-md tracking-tight text-left">
                        Wind{" "}
                      </span>
                      <span className="font-bold text-right">
                        {weatherInfo?.wind?.speed} m/s
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-md tracking-tight text-left">
                        Humidity{" "}
                      </span>
                      <span className="font-bold text-right">
                        {weatherInfo?.main?.humidity} %
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-md tracking-tight text-left">
                        Pressure{" "}
                      </span>
                      <span className="font-bold text-right">
                        {weatherInfo?.main?.pressure} hPa
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ):<ShimmerUI/>}
          
          <h1 className="mt-12 md:block hidden fixed font-extrabold tracking-tighter top-1/2 text-4xl text-center">
            "First step of <span className="text-primary">completing</span> the
            task is to <span className="text-primary">note</span> the task"
          </h1>
        </div>
    </>
  );
};

export default WeatherInfoSection;
