import React from "react";
import styled from "styled-components";
import { Box, Copy } from "./../LayoutComponents";
import mapImg from "../../../../images/map.jpg";
import markerImg from "../../../../images/marker.png";

const Map = styled(Box)`
  background: url("${mapImg}") center no-repeat;
  background-size: cover;
`;

const Slider = styled(Box)`
  left: 0;
  width: 100%;
  padding: ${(props) => props.padding};
  margin: 0;
  text-align: left;
`;

const CopyRelative = styled(Copy)`
  width: auto;
  padding: 0;
  margin: ${(props) => props.margin};
  display: ${(props) => props.display || "block"};
`;

const Marker = styled.div`
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background: url("${markerImg}") center bottom no-repeat;
  background-size: contain;
`;

const Number = styled.div`
  display: inline;
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  user-select: none;
`;

const SearchBar = styled(Box)`
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) =>
    props.buttonAlignRight === "true"
      ? "0px 30px 0px 10px"
      : "0px 10px 0px 30px"};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.height};
  font-weight: ${(props) => props.fontWeight};
  text-transform: ${(props) => props.textTransform};
  background-color: #fff;
`;

const SearchButton = styled(Box)`
  top: 0;
  height: 100%;
  left: ${(props) => (props.buttonAlignRight === "true" ? "auto" : "0")};
  right: ${(props) => (props.buttonAlignRight === "true" ? "0" : "auto")};
  width: 30px;
`;

const MagGlass = styled.div`
  width: 6px;
  height: 6px;
  position: absolute;
  top: calc(50% - 5px);
  left: calc(50% - 5px);
  border: 1px solid ${(props) => props.iconColor};
  border-radius: 100%;
  &:before {
    content: "";
    width: 6px;
    height: 6px;
    position: absolute;
    top: 0;
    left: 7px;
    border-bottom: 1px solid ${(props) => props.iconColor};
    transform: rotate(45deg);
    transform-origin: 0;
  }
`;

const More = styled(Copy)`
  position: absolute;
  padding: 0;
  margin: 0;
  width: auto;
  line-height: 1;
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  text-transform: none;
`;

const Prev = styled(Box)`
  width: 16px;
  height: 32px;
  left: ${(props) => props.positionX};
`;

const Next = styled(Box)`
  left: auto;
  right: ${(props) => props.positionX};
`;

const Arrow = styled.div`
  position: absolute;
  top: 6px;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  transform: rotate(45deg);
`;

const ArrowPrev = styled(Arrow)`
  left: 5px;
  border-bottom: ${(props) => props.lineWidth} solid ${(props) => props.color};
  border-left: ${(props) => props.lineWidth} solid ${(props) => props.color};
`;

const ArrowNext = styled(Arrow)`
  right: 5px;
  border-top: ${(props) => props.lineWidth} solid ${(props) => props.color};
  border-right: ${(props) => props.lineWidth} solid ${(props) => props.color};
`;

const MobileStoreLocator = (props) => {
  const {
    map,
    slider,
    name,
    address,
    phone,
    marker,
    number,
    searchBar,
    more,
    arrows,
  } = props;

  if (number) {
    name.display = "inline";
  } else if (marker) {
    name.display = "inline-block";
  }
  return (
    <>
      <Map {...map} />
      <Slider
        {...slider}
        top={map.height}
        height={`calc(100% - ${map.height})`}
      >
        {marker && <Marker {...marker} />}
        {number && <Number {...number}>1. </Number>}
        <CopyRelative {...name}>{name.caption}</CopyRelative>
        <CopyRelative {...address}>{address.caption}</CopyRelative>
        <CopyRelative {...phone}>{phone.caption}</CopyRelative>
        {arrows && (
          <Prev {...arrows}>
            <ArrowPrev {...arrows} />
          </Prev>
        )}
        {arrows && (
          <Next {...arrows}>
            <ArrowNext {...arrows} />
          </Next>
        )}
      </Slider>
      <SearchBar {...searchBar}>
        <SearchButton buttonAlignRight={searchBar.buttonAlignRight}>
          <MagGlass iconColor={searchBar.iconColor} />
        </SearchButton>
        Postal Code
      </SearchBar>
      <More {...more}>24 MORE LOCATIONS</More>
    </>
  );
};

export default MobileStoreLocator;
