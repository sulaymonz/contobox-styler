import * as types from "./actionTypes";

export function updatePhotoGalleryStyle(style) {
  return { type: types.UPDATE_PHOTO_GALLERY_STYLE, style };
}
