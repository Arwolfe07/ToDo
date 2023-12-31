import React from "react";
import { Gi3DGlasses } from "react-icons/gi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { getWeatherData } from "../../apis/openweather";

const Signup = ({ onChangeLogin }) => {
  const getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { data } = getWeatherData({
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      });
      console.log(data)
    });
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
        <form className="space-y-2" action="#" method="POST">
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
                type="email"
                autoComplete="email"
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
            >
              Sign up
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
