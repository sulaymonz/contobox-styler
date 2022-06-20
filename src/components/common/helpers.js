import React from "react";
import VideoGallerySelector from "../build/ComponentTypesStep/VideoGallerySelector";
import PhotoGallerySelector from "../build/ComponentTypesStep/PhotoGallerySelector";
import StoreLocatorSelector from "../build/ComponentTypesStep/StoreLocatorSelector";
import CustomSelector from "../build/ComponentTypesStep/CustomSelector";
import PhotoGallery from "../build/StyleEditor/PhotoGallery";
import VideoGallery from "../build/StyleEditor/VideoGallery";
import StoreLocator from "../build/StyleEditor/StoreLocator";
import Custom from "../build/StyleEditor/Custom";
import { useSelector } from "react-redux";
import { stylesToCSS } from "../../utils/styles";

export const getSelectorByType = (type) => {
  switch (type) {
    case "Photo Gallery":
      return <PhotoGallerySelector />;
    case "Video Gallery":
      return <VideoGallerySelector />;
    case "Store Locator":
      return <StoreLocatorSelector />;
    case "Custom":
      return <CustomSelector />;
    default:
      break;
  }
};

export const useComponentByType = (type) => {
  const view = useSelector((state) => state.build.styleEditorUI.view);
  const photoGallery = useSelector((state) => state.photoGallery);
  const videoGallery = useSelector((state) => state.videoGallery);
  const storeLocator = useSelector((state) => state.storeLocator);

  switch (type) {
    case "Photo Gallery":
      return <PhotoGallery {...stylesToCSS(photoGallery[view].styles)} />;
    case "Video Gallery":
      return <VideoGallery {...stylesToCSS(videoGallery[view].styles)} />;
    case "Store Locator":
      return <StoreLocator {...stylesToCSS(storeLocator[view].styles)} />;
    case "Custom":
      return <Custom />;
    default:
      break;
  }
};
