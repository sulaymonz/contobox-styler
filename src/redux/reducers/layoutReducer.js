import { produce } from "immer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function layoutReducer(state = initialState.layout, action) {
  switch (action.type) {
    case types.UPDATE_LAYOUT_STYLE:
      return produce(state, (draft) => {
        draft[action.style.target][action.style.name] = {
          value: action.style.value,
          unit: action.style.unit,
        };
      });
    case types.LAYOUT_STYLE_PRESET_SELECTED:
      return action.data.preset;
    default:
      return state;
  }
}
