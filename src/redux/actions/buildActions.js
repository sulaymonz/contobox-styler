import * as types from "./actionTypes";

export function nextBuildStep() {
  return { type: types.NEXT_BUILD_STEP };
}

export function updateLayoutStepView(view) {
  return { type: types.UPDATE_LAYOUT_STEP_VIEW, view };
}

export function updateComponentStack(components) {
  return { type: types.UPDATE_COMPONENT_STACK, components };
}

export function addComponentToStack(component) {
  return { type: types.ADD_COMPONENT_TO_STACK, component };
}
