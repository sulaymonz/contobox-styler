import * as types from "./actionTypes";

export function nextBuildStep() {
  return { type: types.NEXT_BUILD_STEP };
}

export function reorderComponentStack(components) {
  return { type: types.REORDER_COMPONENT_STACK, components };
}

export function addComponentToStack(component) {
  return { type: types.ADD_COMPONENT_TO_STACK, component };
}

export function deleteComponentFromStack(id) {
  return { type: types.DELETE_COMPONENT_FROM_STACK, id };
}

export function layoutTypeSelected(data) {
  return { type: types.LAYOUT_TYPE_SELECTED, data };
}

export function layoutStylePresetSelected(data) {
  return { type: types.LAYOUT_STYLE_PRESET_SELECTED, data };
}
