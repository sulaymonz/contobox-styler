import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function buildReducer(state = initialState.build, action) {
  switch (action.type) {
    case types.UPDATE_BUILD_VIEW:
      return { ...state, view: action.view };
    default:
      return state;
  }
}
