import { produce } from "immer";
import * as types from "../actions/actionTypes";
import { desktopPresets } from "../../components/build/Presets/desktopPresets";
import initialState from "./initialState";

const defaultFeatures = [
  "messageBar",
  "messageIcon",
  "sidebar",
  "socialHeader",
  "facebook",
  "twitter",
  "instagram",
  "youtube",
];

export default function layoutReducer(state = initialState.layout, action) {
  switch (action.type) {
    case types.LAYOUT_TYPE_SELECTED:
      if (action.data.layoutType === "desktop") {
        return Object.fromEntries(
          Object.entries(desktopPresets).filter(([key, val]) =>
            defaultFeatures.includes(key)
          )
        );
      } else {
        return {};
      }
    case types.UPDATE_LAYOUT_STYLE:
      return produce(state, (draft) => {
        draft[action.style.target][action.style.name] = {
          value: action.style.value,
          unit: action.style.unit,
        };
      });
    case types.TOGGLE_LAYOUT_FEATURE:
      return produce(state, (draft) => {
        if (draft.hasOwnProperty(action.feature)) {
          delete draft[action.feature];
        } else {
          draft[action.feature] = desktopPresets[action.feature];
        }
      });
    case types.LAYOUT_STYLE_PRESET_SELECTED:
      return action.data.preset;
    default:
      return state;
  }
}
