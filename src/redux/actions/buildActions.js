import * as types from "./actionTypes";

export function updateBuildView(view) {
  return { type: types.UPDATE_BUILD_VIEW, view };
}
