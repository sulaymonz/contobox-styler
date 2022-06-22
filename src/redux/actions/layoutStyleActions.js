import * as types from "./actionTypes";

export function updateLayoutStyle(style) {
  return { type: types.UPDATE_LAYOUT_STYLE, style };
}

export function toggleLayoutFeature(feature) {
  return { type: types.TOGGLE_LAYOUT_FEATURE, feature };
}
