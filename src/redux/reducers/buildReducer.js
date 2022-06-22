import { produce } from "immer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function buildReducer(state = initialState.build, action) {
  const { view, allViews, showMenu } = state.styleEditorUI;
  const viewIndex = allViews.indexOf(view);

  return produce(state, (draft) => {
    switch (action.type) {
      case types.NEXT_BUILD_STEP:
        draft.step++;
        break;
      case types.SHOW_COMPONENT_TYPES_STEP:
        draft.step = 3;
        draft.componentTypesStepView = action.view;
        break;
      case types.REORDER_COMPONENT_STACK:
        draft.components.allComponentIds = action.componentIDs;
        draft.styleEditorUI.allViews = ["Layout", ...action.componentIDs];
        break;
      case types.ADD_COMPONENT_TO_STACK:
        draft.components.componentsByIds[action.component.id] =
          action.component;
        draft.components.allComponentIds.push(action.component.id);
        draft.styleEditorUI.allViews.push(action.component.id);
        break;
      case types.DELETE_COMPONENT_FROM_STACK:
        delete draft.components.componentsByIds[action.id];
        draft.components.allComponentIds =
          draft.components.allComponentIds.filter((id) => id !== action.id);
        draft.styleEditorUI.allViews = draft.styleEditorUI.allViews.filter(
          (v) => v !== action.id
        );
        break;
      case types.UPDATE_COMPONENT_CUSTOM_CLASS:
        draft.components.componentsByIds[action.data.id].customClass =
          action.data.customClass;
        break;
      case types.COMPONENT_STYLE_PRESET_SELECTED:
        draft.step = action.data.step;
        draft.componentTypesStepView = action.data.view;
        break;
      case types.LAYOUT_TYPE_SELECTED:
        draft.layoutType = action.data.layoutType;
        draft.layoutStepView = action.data.view;
        break;
      case types.LAYOUT_STYLE_PRESET_SELECTED:
        draft.layoutPreset = action.data.presetName;
        draft.layoutStepView = action.data.view;
        break;
      case types.MENU_STYLE_PRESET_SELECTED:
        draft.menuPreset = action.data.presetName;
        draft.step = action.data.step;
        break;
      case types.STYLE_EDITOR_SHOW_NEXT_COMPONENT:
        draft.styleEditorUI.view =
          viewIndex < allViews.length - 1 ? allViews[viewIndex + 1] : view;
        break;
      case types.STYLE_EDITOR_SHOW_PREV_COMPONENT:
        draft.styleEditorUI.view =
          viewIndex > 0 ? allViews[viewIndex - 1] : view;
        break;
      case types.STYLE_EDITOR_SHOW_COMPONENT:
        draft.styleEditorUI.view = action.view;
        draft.styleEditorUI.showMenu = false;
        break;
      case types.TOGGLE_MENU:
        draft.styleEditorUI.showMenu = !showMenu;
        break;
      default:
        break;
    }
  });
}
