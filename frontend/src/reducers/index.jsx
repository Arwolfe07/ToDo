import { combineReducers } from "redux";
import authReducer from "./authReducer";
import currentUserReducer from "./currentUserReducer";
import notificationReducer from "./notificationReducer";
import weatherInfoReducer from "./weatherInfoReducer";
import todoReducer from "./todoReducer";

export default combineReducers({ authReducer,currentUserReducer,notificationReducer,weatherInfoReducer,todoReducer });
