import rockets from "./rockets";
import { combineReducers } from "redux";
import rocket from "./rocket";

const rootReducer = combineReducers({
  rockets: rockets,
  rocket: rocket,
});

export default rootReducer;
