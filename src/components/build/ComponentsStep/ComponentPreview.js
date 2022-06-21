import React from "react";
import styled from "styled-components";
import photoGalleryImage from "../../../images/PhotoGallery-A.png";
import videoGalleryImage from "../../../images/VideoGallery-A.png";
import customImage from "../../../images/Custom-B.png";
import storeLocatorImage from "../../../images/Store-Locator-E.png";
import noPreview from "../../../images/Mobile-No-Component.png";

const Preview = styled.div`
  width: 100%;
  border-radius: 16px;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.4));
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;
  &.show {
    visibility: visible;
    opacity: 1;
  }
`;

const ComponentPreview = (props) => {
  const { preview } = props;

  return (
    <Preview>
      <Image className={!preview ? "show" : ""} src={noPreview} />
      <Image
        className={preview === "Photo Gallery" ? "show" : ""}
        src={photoGalleryImage}
      />
      <Image
        className={preview === "Video Gallery" ? "show" : ""}
        src={videoGalleryImage}
      />
      <Image className={preview === "Custom" ? "show" : ""} src={customImage} />
      <Image
        className={preview === "Store Locator" ? "show" : ""}
        src={storeLocatorImage}
      />
      <Image
        className={preview === "Shoppable" ? "show" : ""}
        src={photoGalleryImage}
      />
    </Preview>
  );
};

export default ComponentPreview;
