import { combineReducers } from "redux";
import build from "./buildReducer";
import layout from "./layoutReducer";
import photoGallery from "./photoGalleryReducer";
import videoGallery from "./videoGalleryReducer";

const rootReducer = combineReducers({
  build,
  layout,
  photoGallery,
  videoGallery,
});

export default rootReducer;
