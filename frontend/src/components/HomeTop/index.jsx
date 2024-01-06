import React from "react";
import { Link } from "react-router-dom";
import homeTopImg from "../../assets/homeTop.png";
import { useSelector } from "react-redux";

const HomeTop = () => {
  const user = useSelector((state) => state.currentUserReducer);
  return (
    <div className="mx-auto flex flex-wrap">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold tracking-tighter text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            To-Do application to manage tasks efficiently
          </h1>
          <p className="py-5 text-xl tracking-tight text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Check out this To-Do application which will help you manage your
            goals efficiently. List down 10 of the most important tasks of the
            day. Write tasks, achieve them.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            {
                user===null ?
            <Link
            to="/auth"
            className="px-8 py-4 text-lg font-medium text-center text-white bg-primary rounded-md "
            >
                
              Get Started
            </Link>:

            <Link
            to="/todo"
            className="px-8 py-4 text-lg font-medium text-center text-white bg-primary rounded-md "
            >
                
              View Tasks
            </Link>
            }
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="">
          <img src={homeTopImg} />
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
