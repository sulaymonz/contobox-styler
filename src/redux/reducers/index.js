import { combineReducers } from "redux";
import build from "./buildReducer";

const rootReducer = combineReducers({
  build,
});

export default rootReducer;
