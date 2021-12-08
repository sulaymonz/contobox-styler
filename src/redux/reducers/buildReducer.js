import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function buildReducer(state = initialState.build, action) {
  switch (action.type) {
    case types.NEXT_BUILD_STEP:
      return { ...state, step: state.step + 1 };
    case types.UPDATE_LAYOUT_STEP_VIEW:
      return { ...state, layoutStepView: action.view };
    case types.REORDER_COMPONENT_STACK:
      return { ...state, components: action.components };
    case types.ADD_COMPONENT_TO_STACK:
      return { ...state, components: [...state.components, action.component] };
    case types.DELETE_COMPONENT_FROM_STACK:
      return {
        ...state,
        components: [...state.components.filter((c) => c.id !== action.id)],
      };
    case types.UPDATE_FONT_SIZE:
      return { ...state, fontSize: action.size };
    case types.UPDATE_BACKGROUND_COLOR:
      return { ...state, backgroundColor: action.color };
    default:
      return state;
  }
}
