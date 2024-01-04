import React from "react";
import WeatherInfoSection from "../../components/WeatherInfoSection";
import TasksSection from "../../components/TasksSection";

const Main = () => {
  return (
    <div className="py-20 h-screen border-2 flex">
      <WeatherInfoSection />
      <TasksSection />
    </div>
  );
};

export default Main;
