import React from "react";
import styled from "styled-components";
import pSBC from "shade-blend-color";
import { Box, Copy } from "./../LayoutComponents";
import mapImg from "../../../../images/map.jpg";
import markerImg from "../../../../images/marker.png";

const Map = styled(Box)`
  background: url("${mapImg}") center no-repeat;
  background-size: cover;
`;

const List = styled(Box)`
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};
  border-top: 1px solid #eee;
  text-align: left;
`;

const Slider = List;

const LocRow = styled.div`
  box-sizing: border-box;
  padding: ${(props) => props.padding};
  border-bottom: 1px solid #eee;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${(props) => props.hoverBackground};
  }
`;

const CopyRelative = styled(Copy)`
  width: auto;
  padding: ${(props) => props.margin};
  display: ${(props) => props.display || "block"};
`;

const Distance = styled(CopyRelative)`
  &:after {
    content: "${(props) => props.unit}";
    font-size: ${(props) => props.unitFontSize};
    margin-left: ${(props) => props.unitMarginLeft};
  }
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
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.height};
  font-weight: ${(props) => props.fontWeight};
  text-transform: ${(props) => props.textTransform};
  background-color: #fff;
`;

const SearchButton = styled(Box)`
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  border-top-left-radius: ${(props) => props.borderTopLeftRadius};
  border-top-right-radius: ${(props) => props.borderTopRightRadius};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${(props) => pSBC(0.2, props.backgroundColor)};
  }
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

const DesktopStoreLocator = (props) => {
  const {
    map,
    list,
    listRow,
    name,
    address,
    phone,
    marker,
    number,
    slider,
    sliderRow,
    sliderName,
    sliderAddress,
    sliderPhone,
    sliderDistance,
    searchBar,
    searchButton,
  } = props;

  if (number) {
    name.display = "inline";
  } else if (marker) {
    name.display = "inline-block";
  }

  const rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(
      <LocRow {...listRow} hoverBackground={pSBC(0.95, name.color)} key={i}>
        {marker && <Marker {...marker} />}
        {number && <Number {...number}>{i + 1}. </Number>}
        <CopyRelative {...name}>{name.caption}</CopyRelative>
        <CopyRelative {...address}>{address.caption}</CopyRelative>
        {!slider && <CopyRelative {...phone}>{phone.caption}</CopyRelative>}
      </LocRow>
    );
  }

  return (
    <>
      <Map {...map} />
      {slider && (
        <Slider {...slider}>
          <LocRow {...sliderRow} hoverBackground={slider.backgroundColor}>
            <CopyRelative {...sliderName}>{sliderName.caption}</CopyRelative>
            <CopyRelative {...sliderAddress}>
              {sliderAddress.caption}
            </CopyRelative>
            <CopyRelative {...sliderPhone}>{sliderPhone.caption}</CopyRelative>
            <Distance {...sliderDistance}>10</Distance>
          </LocRow>
        </Slider>
      )}
      <List {...list}>{rows}</List>
      <SearchBar {...searchBar}>Postal Code</SearchBar>
      <SearchButton {...searchButton}>
        <MagGlass iconColor={searchButton.iconColor} />
      </SearchButton>
    </>
  );
};

export default DesktopStoreLocator;
