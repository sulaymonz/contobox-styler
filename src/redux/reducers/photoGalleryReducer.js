import { produce } from "immer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import photoGalleryPresets from "../../components/build/Presets/photoGalleryPresets";

export default function layoutReducer(
  state = initialState.photoGallery,
  action
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.COMPONENT_STYLE_PRESET_SELECTED:
        if (action.data.componentType === "Photo Gallery") {
          draft[action.data.componentID] = {
            id: action.data.componentID,
            preset: action.data.preset,
            styles: {
              ...photoGalleryPresets.find((p) => p.name === action.data.preset)
                .styles,
            },
          };
        }
        break;
      case types.UPDATE_PHOTO_GALLERY_STYLE:
        draft[action.style.componentID].styles[action.style.target][
          action.style.name
        ] = {
          value: action.style.value,
          unit: action.style.unit,
        };
        break;
      default:
        break;
    }
  });
}
