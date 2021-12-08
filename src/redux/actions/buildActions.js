import * as types from "./actionTypes";

export function nextBuildStep() {
  return { type: types.NEXT_BUILD_STEP };
}

export function updateLayoutStepView(view) {
  return { type: types.UPDATE_LAYOUT_STEP_VIEW, view };
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

export function updateFontSize(size) {
  return { type: types.UPDATE_FONT_SIZE, size };
}

export function updateBackgroundColor(color) {
  return { type: types.UPDATE_BACKGROUND_COLOR, color };
}
