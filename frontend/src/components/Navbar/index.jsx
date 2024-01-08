import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Gi3DGlasses } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { updateLocation } from "../../actions/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.currentUserReducer);
  const loginPageHandler = () => {
    navigate("/auth");
  };

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
    dispatch({
      type: "SET_CURRENT_USER",
      payload: null,
    });
  };
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
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logoutHandler();
      }
    }
    dispatch({
      type: "SET_CURRENT_USER",
      payload: JSON.parse(localStorage.getItem("Profile")),
    });
  }, [dispatch]);

  return (
    <nav className="bg-white bg-opacity-50 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="https://flowbite.com/"
          className="flex items-center space-x-3"
        >
          <Gi3DGlasses className="text-4xl" />
          <span className="self-center text-2xl font-extrabold whitespace-nowrap">
            <span className="text-primary">Chad</span>
            Monkey
          </span>
        </Link>
        <div className="flex md:order-2   space-x-1 md:space-x-3">
          {user !== null &&
           (
              <button
                type="button"
                className="flex py-2.5 w-1/2 items-center justify-center rounded-md bg-primary px-3 sm:py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-other focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                onClick={getLocationHandler}
              >
                <FaLocationCrosshairs />
                
              </button>
            )}
          {user === null && (
            <button
              type="button"
              className="text-white bg-primary hover:bg-other focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              onClick={loginPageHandler}
            >
              Login
            </button>
          )}
          {user !== null && (
            <button
              type="button"
              className="text-white bg-primary hover:bg-other focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              onClick={logoutHandler}
            >
              Logout
            </button>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white md:bg-opacity-0">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname === "/") {
                    window.scrollTo({
                      top: document.querySelector("#about").offsetTop,
                      behavior: "smooth",
                    });
                  } else {
                    navigate("/");
                  }
                }}
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
              >
                Services
              </Link>
            </li> */}
            <li>
              <Link
                to="/todo"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
              >
                Tasks
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
