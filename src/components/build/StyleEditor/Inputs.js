import React from "react";
import LayoutInputs from "./LayoutInputs";
import PhotoGalleryInputs from "./PhotGalleryInputs";
import { useSelector } from "react-redux";

const Inputs = () => {
  const view = useSelector((state) => state.build.styleEditorUI.view);
  return (
    <>
      {view === "Layout" && <LayoutInputs />}
      {view.includes("Photo Gallery") && <PhotoGalleryInputs />}
    </>
  );
};

export default Inputs;
