import React from "react";
import styled from "styled-components";
import playImg from "../../../images/play-button.png";
import { useSelector } from "react-redux";

const Video = styled.div`
  display: block;
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) =>
    props.height === "auto"
      ? `calc(${props.cardWidth} * 9 / 16)`
      : props.height};
  margin: ${(props) => props.margin};
  background: url("${playImg}") center no-repeat;
  background-color: ${(props) => props.backgroundColor};
  background-size: 15%;
  box-sizing: border-box;
`;

const Copy = styled.div`
  display: block;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  margin: 0;
  box-sizing: border-box;
  text-transform: ${(props) => props.textTransform};
`;

const VideoGallery = (props) => {
  const cardWidth = useSelector((state) => state.layout.card.width);
  const { video, title, description } = props;
  return (
    <>
      <Video {...video} cardWidth={`${cardWidth.value}${cardWidth.unit}`} />
      {title && <Copy {...title}>{title.caption}</Copy>}
      {description && <Copy {...description}>{description.caption}</Copy>}
    </>
  );
};

export default VideoGallery;
