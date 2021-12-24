import React from "react";
import Layout from "./Layout";
import PhotoGallery from "./PhotoGallery";
import VideoGallery from "./VideoGallery";
import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../utils/styles";

const PreviewContent = () => {
  const view = useSelector((state) => state.build.styleEditorUI.view);
  const layoutStyles = useSelector((state) => state.layout);
  const photoGallery = useSelector((state) => state.photoGallery);
  const videoGallery = useSelector((state) => state.videoGallery);

  const isPhotoGalleryView = view.includes("Photo Gallery");
  const photoGalleryStyles = isPhotoGalleryView
    ? photoGallery[view].styles
    : {};

  const isVideoGalleryView = view.includes("Video Gallery");
  const videoGalleryStyles = isVideoGalleryView
    ? videoGallery[view].styles
    : {};

  const layoutProps = stylesToCSS(layoutStyles);
  const photoGalleryProps = stylesToCSS(photoGalleryStyles);
  const videoGalleryProps = stylesToCSS(videoGalleryStyles);

  layoutProps.card.left = `calc((100vw - ${layoutProps.card.width})/2)`;

  return (
    <Layout {...layoutProps}>
      {isPhotoGalleryView && <PhotoGallery {...photoGalleryProps} />}
      {isVideoGalleryView && <VideoGallery {...videoGalleryProps} />}
    </Layout>
  );
};

export default PreviewContent;
