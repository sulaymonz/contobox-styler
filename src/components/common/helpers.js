import React from "react";
import { useSelector } from "react-redux";
import { stylesToCSS } from "../../utils/styles";
import VideoGallerySelector from "../build/ComponentTypesStep/VideoGallerySelector";
import PhotoGallerySelector from "../build/ComponentTypesStep/PhotoGallerySelector";
import StoreLocatorSelector from "../build/ComponentTypesStep/StoreLocatorSelector";
import CustomSelector from "../build/ComponentTypesStep/CustomSelector";
import MobileStyleEditor from "../build/StyleEditor/MobileStyleEditor";
import DesktopStyleEditor from "../build/StyleEditor/DesktopStyleEditor";
import Custom from "../build/StyleEditor/Custom";
import MobilePhotoGallery from "../build/StyleEditor/MobileComponents/MobilePhotoGallery";
import MobileVideoGallery from "../build/StyleEditor/MobileComponents/MobileVideoGallery";
import MobileStoreLocator from "../build/StyleEditor/MobileComponents/MobileStoreLocator";
import DesktopPhotoGallery from "../build/StyleEditor/DesktopComponents/DesktopPhotoGallery";
import DesktopVideoGallery from "../build/StyleEditor/DesktopComponents/DesktopVideoGallery";
import DesktopStoreLocator from "../build/StyleEditor/DesktopComponents/DesktopStoreLocator";
import MobileLayoutCSS from "../build/GenerateCSS/Mobile/MobileLayoutCSS";
import DesktopLayoutCSS from "../build/GenerateCSS/Desktop/DesktopLayotCSS";
import MobilePhotoGalleryCSS from "../build/GenerateCSS/Mobile/MobilePhotoGalleryCSS";
import DesktopPhotoGalleryCSS from "../build/GenerateCSS/Desktop/DesktopPhotoGalleryCSS";
import MobileVideoGalleryCSS from "../build/GenerateCSS/Mobile/MobileVideoGalleryCSS";
import DesktopVideoGalleryCSS from "../build/GenerateCSS/Desktop/DesktopVideoGalleryCSS";

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

export const getEditorByType = (layoutType) => {
  switch (layoutType) {
    case "mobile":
      return <MobileStyleEditor />;
    case "desktop":
      return <DesktopStyleEditor />;
    default:
      break;
  }
};

export const useComponentByType = (type) => {
  const view = useSelector((state) => state.build.styleEditorUI.view);
  const { layoutType } = useSelector((state) => state.build);
  const photoGallery = useSelector((state) => state.photoGallery);
  const videoGallery = useSelector((state) => state.videoGallery);
  const storeLocator = useSelector((state) => state.storeLocator);

  switch (true) {
    case type === "Custom":
      return <Custom />;
    case layoutType === "mobile" && type === "Photo Gallery":
      return <MobilePhotoGallery {...stylesToCSS(photoGallery[view].styles)} />;
    case layoutType === "mobile" && type === "Video Gallery":
      return <MobileVideoGallery {...stylesToCSS(videoGallery[view].styles)} />;
    case layoutType === "mobile" && type === "Store Locator":
      return <MobileStoreLocator {...stylesToCSS(storeLocator[view].styles)} />;
    case layoutType === "desktop" && type === "Photo Gallery":
      return (
        <DesktopPhotoGallery {...stylesToCSS(photoGallery[view].styles)} />
      );
    case layoutType === "desktop" && type === "Video Gallery":
      return (
        <DesktopVideoGallery {...stylesToCSS(videoGallery[view].styles)} />
      );
    case layoutType === "desktop" && type === "Store Locator":
      return (
        <DesktopStoreLocator {...stylesToCSS(storeLocator[view].styles)} />
      );
    default:
      break;
  }
};

export const layoutCSS = (layoutType) => {
  switch (layoutType) {
    case "mobile":
      return MobileLayoutCSS();
    case "desktop":
      return DesktopLayoutCSS();
    default:
      break;
  }
};

export const photoGalleryCSS = (layoutType, componentID) => {
  switch (layoutType) {
    case "mobile":
      return MobilePhotoGalleryCSS(componentID);
    case "desktop":
      return DesktopPhotoGalleryCSS(componentID);
    default:
      break;
  }
};

export const videoGalleryCSS = (layoutType, componentID) => {
  switch (layoutType) {
    case "mobile":
      return MobileVideoGalleryCSS(componentID);
    case "desktop":
      return DesktopVideoGalleryCSS(componentID);
    default:
      break;
  }
};
