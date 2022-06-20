import React from "react";
import LayoutInputs from "./LayoutInputs";
import MenuInputs from "./MenuInputs";
import PhotoGalleryInputs from "./PhotGalleryInputs";
import VideoGalleryInputs from "./VideoGalleryInputs";
import StoreLocatorInputs from "./StoreLocatorInputs";
import CustomInputs from "./CustomInputs";
import { useSelector } from "react-redux";

const Inputs = () => {
  const { showMenu, view } = useSelector((state) => state.build.styleEditorUI);
  return showMenu ? (
    <MenuInputs />
  ) : (
    <>
      {view === "Layout" && <LayoutInputs />}
      {view.includes("Photo Gallery") && <PhotoGalleryInputs />}
      {view.includes("Video Gallery") && <VideoGalleryInputs />}
      {view.includes("Store Locator") && <StoreLocatorInputs />}
      {view.includes("Custom") && <CustomInputs />}
    </>
  );
};

export default Inputs;
