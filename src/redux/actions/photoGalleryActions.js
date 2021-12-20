import * as types from "./actionTypes";

export function updatePhotoGalleryStyle(style) {
  return { type: types.UPDATE_PHOTOGALLERY_STYLE, style };
}

export function componentStylePresetSelected(data) {
  return { type: types.COMPONENT_STYLE_PRESET_SELECTED, data };
}
