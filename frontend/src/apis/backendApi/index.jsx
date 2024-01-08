import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://todo-backend-sw8z.onrender.com"
    : "http://localhost:5000";

const API = axios.create({ baseURL: URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const signup = (authData) => API.post("/user/signup", authData);
export const login = (authData) => API.post("/user/login", authData);
export const updateLocation = (locationData) =>
  API.patch("user/location", locationData);

export const fetchTasks = () => API.get("/tasks/all");
export const addNewTask = (taskData) => API.post("/tasks/add", taskData);
export const taskDone = (taskId) => API.patch("/tasks/done", taskId);
export const taskNotDone = (taskId) => API.patch("/tasks/notdone", taskId);
export const deleteTask = (taskId) => API.delete(`/tasks/delete/${taskId}`);
