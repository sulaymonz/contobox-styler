import { produce } from "immer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function layoutReducer(state = initialState.custom, action) {
  return produce(state, (draft) => {
    if (
      action.type === types.COMPONENT_STYLE_PRESET_SELECTED &&
      action.data.componentType === "Custom"
    ) {
      draft[action.data.componentID] = {
        id: action.data.componentID,
        preset: action.data.preset,
      };
    }
  });
}
