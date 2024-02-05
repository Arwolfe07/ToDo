import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Gi3DGlasses } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.currentUserReducer);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };
  const loginPageHandler = () => {
    navigate("/auth");
  };

  const logoutHandler = (e) => {
    closeDropdown();
    e?.preventDefault();
    window.location.reload();
    dispatch({ type: "LOGOUT" });
    dispatch({
      type: "SET_CURRENT_USER",
      payload: null,
    });
  };
  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
  useEffect(() => {
    if (windowWidth < 768) {
      closeDropdown();
    }
  }, [windowWidth]);

  return (
    <nav className="bg-white bg-opacity-50 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <Gi3DGlasses className="text-4xl" />
          <span className="self-center text-2xl font-extrabold whitespace-nowrap">
            <span className="text-primary">Chad</span>
            Monkey
          </span>
        </Link>
        <div className="flex md:order-2   space-x-1 md:space-x-3">
          {user !== null && (
            <>
              <div
                type="button"
                data-dropdown-placement="bottom-start"
                data-dropdown-toggle="userDropdown"
                className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer hidden md:block"
                onClick={toggleDropdown}
              >
                <img
                  id="avatarButton"
                  // className="text-gray-400"
                  className="w-12 h-12 rounded-full cursor-pointer"
                  src={user?.result?.profilePic}
                  alt="User dropdown"
                />
              </div>
              <div
                id="userDropdown"
                className={`z-10 ${
                  dropdown ? "" : "hidden"
                } fixed top-16 right-0  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>{user?.result?.name}</div>
                  <div className="font-medium truncate">{user?.result?.email}</div>
                </div>
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="avatarButton"
                >
                  <li>
                    <Link
                      to="/edit"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={closeDropdown}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => {
                        alert("Working on it");
                        closeDropdown();
                      }}
                    >
                      Dashboard
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <Link
                    to={"/"}
                    onClick={(e) => logoutHandler(e)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </>
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
            {user !== null && (
              <li className="md:hidden flex justify-center flex-col items-center">
                {/* <Link
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                aria-current="page"
                >
                Home
              </Link> */}
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer">
                  <img
                    id="avatarButton"
                    // className="text-gray-400"
                    className="w-12 h-12 rounded-full cursor-pointer"
                    src={user?.result?.profilePic}
                    alt="User dropdown"
                  />
                </div>

                <div className="my-4 flex justify-around text-sm w-full">
                  <div onClick={() => navigate("/edit")}>Edit Profile</div>
                  <div onClick={() => alert("Working on it")}>Dashboard</div>
                  {/* <div>Verify Email</div> */}
                </div>
                <hr className="w-full"></hr>
              </li>
            )}
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-center text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 px-3 text-gray-900 text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
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
                className="block py-2 px-3 text-gray-900 text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
              >
                Tasks
              </Link>
            </li>
            {user !== null && (
              <li className="md:hidden">
                <Link
                  to={"/"}
                  onClick={(e) => logoutHandler(e)}
                  className="block py-2 px-3 text-gray-900 text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0"
                >
                  Sign Out
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
