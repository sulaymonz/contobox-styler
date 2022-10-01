import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../../utils/styles";
import pSBC from "shade-blend-color";

const MobileStoreLocatorCSS = (componentID) => {
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
  } = stylesToCSS(
    useSelector((state) => state.storeLocator[componentID].styles)
  );
  const customClass = useSelector(
    (state) => state.build.components.componentsByIds[componentID].customClass
  );
  const cssClass = customClass ? `.${customClass} ` : "";

  if (number || marker) {
    name.display = "inline";
  }

  const markerCSS = marker
    ? `

${cssClass}.loc_img {
    display: inline-block;
    width: ${marker.width};
    height: ${marker.height};
    margin: ${marker.margin};
    background: url("images/marker.png") center bottom no-repeat;
    background-size: contain;
}`
    : "";

  const numberCSS = number
    ? `

${cssClass}.loc_num {
    display: inline;
    margin: ${number.margin};
    font-size: ${number.fontSize};
    font-weight: ${number.fontWeight};
    color: ${number.color};
    line: ${name.line};
}
.loc_num:after {
    content: ".";
}`
    : "";

  const arrowsCSS = arrows
    ? `

${cssClass}.locator_slide_prev,
${cssClass}.locator_slide_next {
    display: block;
    position: absolute;
    top: ${arrows.top};
    width: 16px;
    height: 32px;
    background: transparent;
    z-index: 1;
}
${cssClass}.locator_slide_next {
    left: auto;
    right: ${arrows.positionX};
    
}
${cssClass}.locator_slide_prev {
    left: ${arrows.positionX};
}
${cssClass}.locator_slide_prev:after,
${cssClass}.locator_slide_next:after {
    content: '';
    position: absolute;
    top: 6px;
    width: ${arrows.size};
    height: ${arrows.size};
    transform: rotate(45deg);
}
${cssClass}.locator_slide_prev:after {
    left: 5px;
    border-bottom: ${arrows.lineWidth} solid ${arrows.color};
    border-left: ${arrows.lineWidth} solid ${arrows.color};
}
${cssClass}.locator_slide_next:after {
    right: 5px;
    border-top: ${arrows.lineWidth} solid ${arrows.color};
    border-right: ${arrows.lineWidth} solid ${arrows.color};
}`
    : "";

  return `

/* Locator */
${cssClass}.locator {
    border-radius: 15px;
    overflow: hidden;
}
${cssClass}div.locator_map {
    top: ${map.top};
    left: ${map.left};
    width: ${map.width};
    height: ${map.height};
    right: auto;
}
${cssClass}div.locator_slider {
    top: ${map.height};
    bottom: 0;
    height: auto;
    padding: 0;
    box-sizing: border-box;
    text-align: left;
}
${cssClass}.locator_slider .loc_inner {
    padding: ${slider.padding};
}
${
  marker
    ? `${cssClass}.locator_list .loc_inner {
    padding-left: calc(8vw + ${marker.width});
}`
    : ""
}
${cssClass}div.loc_row:hover,
${cssClass}div.loc_row.current {
    background: ${pSBC(0.95, name.color)};
}
${cssClass}.loc_name {
    margin: ${name.margin};
    font-size: ${name.fontSize};
    font-weight: ${name.fontWeight};
    color: ${name.color};
    text-align: ${name.textAlign};
    line-height: ${name.lineHeight};
    text-transform: ${name.textTransform};
    display: ${name.display || "block"};
}
${cssClass}.loc_address {
    margin: ${address.margin};
    font-size: ${address.fontSize};
    font-weight: ${address.fontWeight};
    color: ${address.color};
    text-align: ${address.textAlign};
    line-height: ${address.lineHeight};
    text-transform: ${address.textTransform};
}
${cssClass}.loc_phone {
    margin: ${phone.margin};
    font-weight: ${phone.fontWeight};
    text-align: ${phone.textAlign};
    line-height: ${phone.lineHeight};
    text-transform: ${phone.textTransform};
}
${cssClass}.loc_phone a {
    font-size: ${phone.fontSize};
    color: ${phone.color};
    text-decoration: none;
}

${cssClass}.moreLocBtn {
    left: ${more.left};
    z-index: 9;
}
.show .moreLocBtn {
    font-size: 0;
}
${cssClass}.moreLocBtn,
${cssClass}.locator.show .moreLocBtn:before {
    position: absolute;
    height: ${more.fontSize};
    bottom: ${more.bottom};
    font-size: ${more.fontSize};
    font-weight: ${more.fontWeight};
    color: ${more.color};
    text-align: ${phone.textAlign};
    padding: 0;
    margin: 0;
    line-height: 1;
    text-transform: none;
    text-decoration: none;
}

${cssClass}form.locator_form {
    height: ${searchBar.height};
    width: ${searchBar.width};
    left: ${searchBar.left};
    top: ${searchBar.top};
    border-radius: ${searchBar.borderRadius};
    z-index: 1;
}
.locator-component.loc_post_load form.locator_form {
    display: none;
}
${cssClass}input.loc_search_text {
    height: 100%;
    left: 0;
    width: 100%;
    border: ${searchBar.border};
    border-radius: ${searchBar.borderRadius};
    font-size: ${searchBar.fontSize};
    font-weight: ${searchBar.fontWeight};
    color: ${searchBar.color};
    text-align: ${searchBar.textAlign};
    text-transform: ${searchBar.textTransform};
    padding: ${
      searchBar.buttonAlignRight === "true"
        ? "0px 30px 0px 10px"
        : "0px 10px 0px 30px"
    };
    box-sizing: border-box;
}
${cssClass}.loc_form_cell {
    height: 100%;
    top: 0;
}
${cssClass}.loc_search_button {
    border: none;
    width: 30px;
    height: 100%;
    position: absolute;
    top: 0;
    left: ${searchBar.buttonAlignRight === "true" ? "auto" : "0"};
    right: ${searchBar.buttonAlignRight === "true" ? "0" : "auto"};
    background: 0 0;
    padding: 0;
}
${cssClass}.magGlass {
    width: 6px;
    height: 6px;
    position: absolute;
    top: calc(50% - 5px);
    left: calc(50% - 5px);
    border: 1px solid ${searchBar.iconColor};
    border-radius: 100%;
}
${cssClass}.magGlass:before {
    content: '';
    width: 6px;
    height: 6px;
    position: absolute;
    top: 0;
    left: 7px;
    border-bottom: 1px solid ${searchBar.iconColor};
    transform: rotate(45deg);
    transform-origin: 0;
}

${cssClass}.gmnoprint.gm-style-mtc {
    display: none;
}${markerCSS}${numberCSS}${arrowsCSS}`;
};

export default MobileStoreLocatorCSS;
