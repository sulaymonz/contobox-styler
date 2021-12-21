import React from "react";
import Layout from "./Layout";
import PhotoGallery from "./PhotoGallery";
import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../utils/styles";

const PreviewContent = () => {
  const view = useSelector((state) => state.build.styleEditorUI.view);
  const layoutStyles = useSelector((state) => state.layout);
  const photoGallery = useSelector((state) => state.photoGallery);

  const isPhotoGalleryView = view.includes("Photo Gallery");
  const galleryStyles = isPhotoGalleryView ? photoGallery[view].styles : {};

  const layoutProps = stylesToCSS(layoutStyles);
  const galleryProps = stylesToCSS(galleryStyles);

  layoutProps.card.left = `calc((100vw - ${layoutProps.card.width})/2)`;

  return (
    <Layout {...layoutProps}>
      {isPhotoGalleryView && <PhotoGallery {...galleryProps} />}
    </Layout>
  );
};

export default PreviewContent;
