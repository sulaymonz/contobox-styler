import React from "react";
import styled from "styled-components";
import playImg from "../../../../images/play-button.png";
import arrowImg from "../../../../images/arrow.png";
import videoImg from "../../../../images/video-content.jpg";
import { Copy, Box } from "./../LayoutComponents";

const Video = styled.div`
  display: block;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  float: ${(props) => props.float};
  margin: ${(props) => props.margin};
  background-image: url("${videoImg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: ${(props) => props.backgroundColor};
  box-sizing: border-box;
`;

const Play = styled(Box)`
  width: 55px;
  height: 55px;
  top: calc(50% - 55px / 2);
  left: calc(50% - 55px / 2);
  background: url("${playImg}") center no-repeat;
  background-size: contain;
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
  display: ${(props) => props.display};
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

const DesktopVideoGallery = (props) => {
  const { video, title, description, thumbHolder, thumb, arrows } = props;
  const thumbs = [];
  for (let i = 0; i < thumb.amount; i++) {
    thumbs.push(
      i === 0 ? (
        <Thumb {...thumb} color={thumb.activeColor} opacity={1} key={i} />
      ) : (
        <Thumb {...thumb} key={i} />
      )
    );
  }

  return (
    <>
      <Video {...video}>
        <Play />
      </Video>
      {title && <Text {...title}>{title.caption}</Text>}
      {description && <Text {...description}>{description.caption}</Text>}
      <ThumbHolder {...thumbHolder}>{thumbs}</ThumbHolder>
      <Prev {...arrows} />
      <Next {...arrows} />
    </>
  );
};

export default DesktopVideoGallery;
