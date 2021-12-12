import { combineReducers } from "redux";
import build from "./buildReducer";
import layout from "./layoutReducer";

const rootReducer = combineReducers({
  build,
  layout,
});

export default rootReducer;
