import { combineReducers } from "redux";
import authReducer from "./auth";

const combined = combineReducers({
  auth: authReducer,
});
export default combined;
