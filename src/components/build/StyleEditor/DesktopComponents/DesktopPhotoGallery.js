import React from "react";
import styled from "styled-components";
import photoImg from "../../../../images/photo.PNG";
import arrowImg from "../../../../images/arrow.png";
import { Copy, Box } from "./../LayoutComponents";

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

const ThumbHolder = styled.div`
  display: ${(props) => props.display};
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

const Thumb = styled.div`
  position: relative;
  float: left;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: ${(props) => props.size};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
`;

const Prev = styled(Box)`
  left: ${(props) => props.distance};
  background: url("${arrowImg}") center no-repeat;
  background-size: contain;
  cursor: pointer;
`;

const Next = styled(Prev)`
  left: auto;
  right: ${(props) => props.distance};
  transform: rotate(180deg);
`;

const DesktopPhotoGallery = (props) => {
  const { image, title, description, thumbHolder, thumb, arrow } = props;
  const thumbs = [];
  for (let i = 0; i < thumb.amount; i++) {
    thumbs.push(
      i === 0 ? (
        <Thumb
          {...thumb}
          backgroundColor={thumb.activeColor}
          opacity={1}
          key={i}
        />
      ) : (
        <Thumb {...thumb} key={i} />
      )
    );
  }

  return (
    <>
      <Image {...image} />
      {title && <Text {...title}>{title.caption}</Text>}
      {description && <Text {...description}>{description.caption}</Text>}
      <ThumbHolder {...thumbHolder}>{thumbs}</ThumbHolder>
      <Prev {...arrow} />
      <Next {...arrow} />
    </>
  );
};

export default DesktopPhotoGallery;
