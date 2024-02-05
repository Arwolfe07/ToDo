import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import TasksSection from "../../components/TasksSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../actions/tasks";
import WeatherInfoSection from "../../components/WeatherInfoSection";

const Main = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUserReducer);
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  // useEffect(() => {
  //   const logout = () => {
  //     dispatch({ type: "LOGOUT" });
  //     navigate("/", { replace: true });
  //     dispatch({
  //       type: "SET_CURRENT_USER",
  //       payload: null,
  //     });
  //   };
  //   const token = user?.token;
  //   if (token) {
  //     const decodedToken = jwtDecode(token);
  //     if (decodedToken.exp * 1000 < new Date().getTime()) {
  //       logout();
  //     }
  //   }
  //   dispatch({
  //     type: "SET_CURRENT_USER",
  //     payload: JSON.parse(localStorage.getItem("Profile")),
  //   });
  // }, [dispatch]);

  return (
    <div className="py-20 h-screen flex flex-col md:flex-row">
      <WeatherInfoSection />
      <TasksSection />
    </div>
  );
};

export default Main;
