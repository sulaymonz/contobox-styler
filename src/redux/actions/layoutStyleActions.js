import * as types from "./actionTypes";

export function updateLayoutStyle(style) {
  return { type: types.UPDATE_LAYOUT_STYLE, style };
}
