import React, { useState } from "react";
import { Gi3DGlasses } from "react-icons/gi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { getWeatherData } from "../../apis/openweather";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../actions/auth";

const Signup = ({ onChangeLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({});
  const load = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getLocationHandler = async () => {
    // small api to get location i.e. coordinates and place (might give false results on non-gps devices)
    const { data } = await axios.get("https://ipapi.co/json");
    setLocation(`${data.city}, ${data.region}`);
    setCoordinates({
      latitude: data.latitude,
      longitude: data.longitude,
      area: `${data.city}, ${data.region}`,
    });
    dispatch({
      type: "SET_MESSAGE",
      payload: "If you see wrong location please turn on GPS",
    });
  };

  const signupSubmitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      return dispatch({
        type: "SET_MESSAGE",
        payload: "One or more fields are empty",
      });
    }
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
      dispatch({ type: "SET_MESSAGE", payload: "Invalid email" });
      return;
    }

    if (password.length < 8) {
      return dispatch({
        type: "SET_MESSAGE",
        payload: "Password should be atleast 8 characters long",
      });
    }
    if (password !== confirmPassword) {
      return dispatch({
        type: "SET_MESSAGE",
        payload: "Passwords do not match",
      });
    }
    dispatch({ type: "START_LOAD" });
    dispatch(
      signup({ name, email, password, location: coordinates }, navigate)
    );
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 pt-24 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Gi3DGlasses className="text-4xl mx-auto" />
        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          <span className="text-primary">Create</span> a new account
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2" onSubmit={signupSubmitHandler}>
          <div>
            <label
              htmlFor="usernam"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="usernam"
                name="username"
                type="text"
                autoComplete="text"
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="conf-password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="conf-password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Location (Optional)
            </label>
            <div className="mt-2 flex items-center">
              <input
                id="location"
                name="location"
                type="text"
                autoComplete="text"
                value={location}
                className="cursor-no-drop block w-full rounded-l-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                disabled
              />
              <button
                type="button"
                className="flex py-2.5 w-1/2 items-center justify-center rounded-r-md bg-primary px-3 sm:py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-other focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                onClick={getLocationHandler}
              >
                <FaLocationCrosshairs className="mr-2" />
                <span className="hidden sm:block">Get Location</span>
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full mt-4 justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-other focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              disabled = {load?true:false}
            >
              {load ? (
                <svg
                  className="animate-spin mx-auto h-6 w-6 text-white-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-50"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <span>Sign up</span>
              )}
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already a member?{" "}
          <span
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:cursor-pointer"
            onClick={() => onChangeLogin()}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
