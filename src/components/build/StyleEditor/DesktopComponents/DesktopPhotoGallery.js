import React from "react";
import styled from "styled-components";
import photoImg from "../../../../images/photo.PNG";
import { Copy } from "./../LayoutComponents";

const Image = styled.div`
  display: block;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  float: ${(props) => props.float};
  margin: ${(props) => props.margin};
  background-image: url("${photoImg}");
  background-repeat: no-repeat;
  background-position-x: ${(props) => props.backgroundPositionX};
  background-position-y: ${(props) => props.backgroundPositionY};
  background-size: ${(props) => props.backgroundSize};
  background-color: ${(props) => props.backgroundColor};
  box-sizing: border-box;
`;

const Text = styled(Copy)`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  float: ${(props) => props.float};
  margin: ${(props) => props.margin};
  box-sizing: border-box;
`;

const DesktopPhotoGallery = (props) => {
  const { image, title, description } = props;
  return (
    <>
      <Image {...image} />
      {title && <Text {...title}>{title.caption}</Text>}
      {description && <Text {...description}>{description.caption}</Text>}
    </>
  );
};

export default DesktopPhotoGallery;
