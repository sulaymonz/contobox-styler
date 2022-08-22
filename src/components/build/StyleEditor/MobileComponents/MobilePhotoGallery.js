import React from "react";
import styled from "styled-components";
import photoImg from "../../../../images/photo.PNG";
import { Copy } from "./../LayoutComponents";

const Image = styled.div`
  display: block;
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-image: url("${photoImg}");
  background-repeat: no-repeat;
  background-position-x: ${(props) => props.backgroundPositionX};
  background-position-y: ${(props) => props.backgroundPositionY};
  background-size: ${(props) => props.backgroundSize};
  background-color: ${(props) => props.backgroundColor};
  box-sizing: border-box;
`;

const MobilePhotoGallery = (props) => {
  const { image, title, description } = props;
  return (
    <>
      <Image {...image} />
      {title && <Copy {...title}>{title.caption}</Copy>}
      {description && <Copy {...description}>{description.caption}</Copy>}
    </>
  );
};

export default MobilePhotoGallery;
