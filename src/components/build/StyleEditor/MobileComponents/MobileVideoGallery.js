import React from "react";
import styled from "styled-components";
import playImg from "../../../../images/play-button.png";
import { Copy } from "./../LayoutComponents";
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
  border-top-left-radius: ${(props) => props.borderTopLeftRadius};
  border-top-right-radius: ${(props) => props.borderTopRightRadius};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius};
`;

const MobileVideoGallery = (props) => {
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

export default MobileVideoGallery;
