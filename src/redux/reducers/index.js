import { combineReducers } from "redux";
import build from "./buildReducer";
import layout from "./layoutReducer";
import photoGallery from "./photoGalleryReducer";

const rootReducer = combineReducers({
  build,
  layout,
  photoGallery,
});

export default rootReducer;
