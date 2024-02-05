import React from "react";

const ShimmerUI = () => {
  return (
    // <div className="container px-5 py-24 mx-auto">
    // <div className="flex flex-wrap -m-4">
      <div className="p-4 w-full">
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="bg-gray-400 animate-pulse h-4 w-full mb-2"></h2>
            <h1 className="w-full mb-4 h-6 animate-pulse bg-gray-500"></h1>
            <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
            <div className="flex items-center flex-wrap ">
              <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-full inline-flex items-center md:mb-2 lg:mb-0">
              </a>
              <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
              </span>
              
            </div>
          </div>
        </div>
      </div>
  );
};

export default ShimmerUI;
