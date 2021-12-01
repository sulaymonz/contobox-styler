import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function buildReducer(state = initialState.build, action) {
  switch (action.type) {
    case types.NEXT_BUILD_STEP:
      return { ...state, currentStep: state.currentStep + 1 };
    default:
      return state;
  }
}
