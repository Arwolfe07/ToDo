import { combineReducers } from "redux";
import authReducer from "./authReducer";
import currentUserReducer from "./currentUserReducer";
import notificationReducer from "./notificationReducer"

export default combineReducers({ authReducer,currentUserReducer,notificationReducer });
