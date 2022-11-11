import * as types from "./actionTypes";

export function nextBuildStep() {
  return { type: types.NEXT_BUILD_STEP };
}

export function showComponentTypesStep(view) {
  return { type: types.SHOW_COMPONENT_TYPES_STEP, view };
}

export function showStyleEditorStep() {
  return { type: types.SHOW_STYLE_EDITOR_STEP };
}

export function componentStylePresetSelected(data) {
  return { type: types.COMPONENT_STYLE_PRESET_SELECTED, data };
}

export function reorderComponentStack(componentIDs) {
  return { type: types.REORDER_COMPONENT_STACK, componentIDs };
}

export function addComponentToStack(component) {
  return { type: types.ADD_COMPONENT_TO_STACK, component };
}

export function deleteComponentFromStack(id) {
  return { type: types.DELETE_COMPONENT_FROM_STACK, id };
}

export function updateComponentCustomClass(data) {
  return { type: types.UPDATE_COMPONENT_CUSTOM_CLASS, data };
}

export function layoutTypeSelected(data) {
  return { type: types.LAYOUT_TYPE_SELECTED, data };
}

export function layoutStylePresetSelected(data) {
  return { type: types.LAYOUT_STYLE_PRESET_SELECTED, data };
}

export function menuStylePresetSelected(data) {
  return { type: types.MENU_STYLE_PRESET_SELECTED, data };
}

export function styleEditorShowNextComponent() {
  return { type: types.STYLE_EDITOR_SHOW_NEXT_COMPONENT };
}

export function styleEditorShowPrevComponent() {
  return { type: types.STYLE_EDITOR_SHOW_PREV_COMPONENT };
}

export function styleEditorShowComponent(view) {
  return { type: types.STYLE_EDITOR_SHOW_COMPONENT, view };
}

export function styleEditorShowLayout() {
  return { type: types.STYLE_EDITOR_SHOW_LAYOUT };
}

export function toggleMenu() {
  return { type: types.TOGGLE_MENU };
}
