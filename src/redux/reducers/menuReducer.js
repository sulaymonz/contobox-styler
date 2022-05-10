import { produce } from "immer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function menuReducer(state = initialState.menu, action) {
  switch (action.type) {
    case types.UPDATE_MENU_STYLE:
      return produce(state, (draft) => {
        draft[action.style.target][action.style.name] = {
          value: action.style.value,
          unit: action.style.unit,
        };
      });
    case types.MENU_STYLE_PRESET_SELECTED:
      return action.data.preset;
    default:
      return state;
  }
}
