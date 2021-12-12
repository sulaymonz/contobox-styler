import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function layoutReducer(state = initialState.layout, action) {
  switch (action.type) {
    case types.UPDATE_LAYOUT_STYLE:
      return {
        ...state,
        [action.style.target]: {
          ...state[action.style.target],
          [action.style.name]: {
            value: action.style.value,
            unit: action.style.unit,
          },
        },
      };
    default:
      return state;
  }
}