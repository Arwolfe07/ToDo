import React from "react";
import { FaChartLine } from "react-icons/fa6";
import { MdEditNote } from "react-icons/md";
import { GiLuchador } from "react-icons/gi";
import benefit from "../../assets/benefit.png";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:mt-24" id="about">
      <div className="text-sm font-bold tracking-wider text-primary uppercase mx-auto">
        ChadMonkey Benefits
      </div>
      <h2 className="mx-auto text-center max-w-2xl mt-3 text-3xl font-bold tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
        Why should you use 
        <span className="text-primary tracking-tighter"> ChadMonkey</span>
      </h2>
      <p className="mx-auto max-w-2xl py-4 text-lg text-center leading-normal text-gray-500 lg:text-xl xl:text-xl">
        ChadMonkey is a time optimising platform. It is a To-Do app but it
        offers many benefits such as tracking the daily goals and how efficient
        you were for last couple of days (Coming soon).
      </p>
      <div className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <img src={benefit} alt="img" />
        </div>

        <div>
          <div className="`flex flex-wrap items-center w-full ">
            <div className="flex flex-col w-full mt-4">
              <h3 className="text-center md:text-left w-full max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Benefits
              </h3>

              <p className="text-center md:text-left max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Some of the key benefits of using ChadMonkey has been
                highlighted below. Do try this app out to increase you
                efficiency.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-primary rounded-md w-11 h-11 ">
                <MdEditNote className="h-10 w-10 text-orange-50" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">
                  Understand the tasks
                </h4>
                <p className="mt-1 text-gray-500">
                  To complete a task, its more important to identify the task.
                </p>
              </div>
            </div>
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-primary rounded-md w-11 h-11 ">
                <FaChartLine className="h-8 w-8 text-orange-50" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">
                  Improve Efficiency
                </h4>
                <p className="mt-1 text-gray-500">
                  It's proved that after writing a task, we are more likely to
                  complete it.
                </p>
              </div>
            </div>
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-primary rounded-md w-11 h-11 ">
                <GiLuchador className="h-10 w-10 text-orange-50" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">
                  Become a Chad
                </h4>
                <p className="mt-1 text-gray-500">
                  Become unstoppable, don't procrastinate anymore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
