import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function buildReducer(state = initialState.build, action) {
  switch (action.type) {
    case types.NEXT_BUILD_STEP:
      return { ...state, step: state.step + 1 };
    case types.SHOW_COMPONENT_TYPES_STEP:
      return { ...state, step: 3, componentTypesStepView: action.view };
    case types.REORDER_COMPONENT_STACK:
      return {
        ...state,
        components: {
          componentsByIds: { ...state.components.componentsByIds },
          allComponentIds: action.componentIDs,
        },
      };
    case types.ADD_COMPONENT_TO_STACK:
      return {
        ...state,
        components: {
          componentsByIds: {
            ...state.components.componentsByIds,
            [action.component.id]: action.component,
          },
          allComponentIds: [
            ...state.components.allComponentIds,
            action.component.id,
          ],
        },
      };
    case types.DELETE_COMPONENT_FROM_STACK:
      return {
        ...state,
        components: {
          componentsByIds: Object.keys(state.components.componentsByIds)
            .filter((id) => id !== action.id)
            .reduce((obj, key) => {
              obj[key] = state.components.componentsByIds[key];
              return obj;
            }, {}),
          allComponentIds: state.components.allComponentIds.filter(
            (id) => id !== action.id
          ),
        },
      };
    case types.COMPONENT_STYLE_PRESET_SELECTED:
      return {
        ...state,
        step: action.data.step,
        componentTypesStepView: action.data.view,
      };
    case types.LAYOUT_TYPE_SELECTED:
      return {
        ...state,
        layoutType: action.data.layoutType,
        layoutStepView: action.data.view,
      };
    case types.LAYOUT_STYLE_PRESET_SELECTED:
      return {
        ...state,
        layoutPreset: action.data.presetName,
        layoutStepView: action.data.view,
      };
    default:
      return state;
  }
}
