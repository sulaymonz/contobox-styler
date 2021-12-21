import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import * as presets from "../../components/build/Presets";

export default function layoutReducer(
  state = initialState.photoGallery,
  action
) {
  switch (action.type) {
    case types.COMPONENT_STYLE_PRESET_SELECTED:
      return action.data.componentType === "Photo Gallery"
        ? {
            ...state,
            [action.data.componentID]: {
              id: action.data.componentID,
              preset: action.data.preset,
              styles: {
                ...presets.photoGallery.presets.find(
                  (p) => p.name === action.data.preset
                ).styles,
              },
            },
          }
        : { ...state };
    case types.UPDATE_PHOTOGALLERY_STYLE:
      return {
        ...state,
        [action.style.componentID]: {
          ...state[action.style.componentID],
          styles: {
            ...state[action.style.componentID].styles,
            [action.style.target]: {
              ...state[action.style.componentID].styles[action.style.target],
              [action.style.name]: {
                value: action.style.value,
                unit: action.style.unit,
              },
            },
          },
        },
      };
    default:
      return state;
  }
}
