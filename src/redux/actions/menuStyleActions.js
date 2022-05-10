import * as types from "./actionTypes";

export function updateMenuStyle(style) {
  return { type: types.UPDATE_MENU_STYLE, style };
}
