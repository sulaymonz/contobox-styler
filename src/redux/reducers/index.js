import { combineReducers } from "redux";
import build from "./buildReducer";
import layout from "./layoutReducer";
import menu from "./menuReducer";
import photoGallery from "./photoGalleryReducer";
import videoGallery from "./videoGalleryReducer";

const rootReducer = combineReducers({
  build,
  layout,
  menu,
  photoGallery,
  videoGallery,
});

export default rootReducer;
