import React from "react";
import styled from "styled-components";
import { Box, Copy } from "./LayoutComponents";
import mapImg from "../../../images/map.jpg";
import markerImg from "../../../images/marker.png";

const Map = styled(Box)`
  background: url("${mapImg}") center no-repeat;
  background-size: cover;
`;

const Slider = styled(Box)`
  left: 0;
  width: 100%;
  padding: ${(props) => props.padding};
  margin: 0;
`;

const CopyRelative = styled(Copy)`
  width: auto;
  padding: 0;
  margin: ${(props) => props.margin};
`;

const Marker = styled(Box)`
  background: url("${markerImg}") center no-repeat;
  background-size: contain;
`;

const CopyAbsolute = styled(Copy)`
  position: absolute;
  padding: 0;
  width: auto;
  left: ${(props) => props.left};
`;

const Number = styled(CopyAbsolute)`
  top: ${(props) => props.top};
`;

const SearchBar = styled(Box)`
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.height};
  font-weight: ${(props) => props.fontWeight};
  text-transform: ${(props) => props.textTransform};
  background-color: #fff;
`;

const More = styled(CopyAbsolute)`
  bottom: ${(props) => props.bottom};
  padding: 0;
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

const StoreLocator = (props) => {
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
  return (
    <>
      <Map {...map} />
      <Slider
        {...slider}
        top={map.height}
        height={`calc(100% - ${map.height})`}
      >
        <CopyRelative {...name}>{name.caption}</CopyRelative>
        <CopyRelative {...address}>{address.caption}</CopyRelative>
        <CopyRelative {...phone}>{phone.caption}</CopyRelative>
        {marker && <Marker {...marker} />}
        {number && <Number {...number} />}
      </Slider>
      <SearchBar {...searchBar}>Postal Code</SearchBar>
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
      <More {...more}>24 MORE LOCATIONS</More>
    </>
  );
};

export default StoreLocator;
