import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../../utils/styles";
import pSBC from "shade-blend-color";

const DesktopStoreLocatorCSS = (componentID) => {
  const {
    map,
    list,
    locRow,
    name,
    address,
    phone,
    marker,
    number,
    searchBar,
    searchButton,
  } = stylesToCSS(
    useSelector((state) => state.storeLocator[componentID].styles)
  );
  const customClass = useSelector(
    (state) => state.build.components.componentsByIds[componentID].customClass
  );
  const cssClass = customClass ? `.${customClass} ` : "";

  if (number) {
    name.display = "inline";
  } else if (marker) {
    name.display = "inline-block";
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
    : `
${cssClass}.loc_num {
    display: none;
}`;

  return `

/* Locator */
${cssClass}div.locator_map {
    top: ${map.top};
    left: ${map.left};
    width: ${map.width};
    height: ${map.height};
    right: auto;
}
${cssClass}div.locator_list {
    top: ${list.top};
    left: ${list.left};
    width: ${list.width};
    height: ${list.height};
    background-color: ${list.backgroundColor};
    border-top: solid 1px #eee;
    box-sizing: border-box;
}
${cssClass}.locator_list .scroller-area {
    right: 0;
}
${cssClass}.locator_list .loc_row {
    border-top: none;
    border-bottom: solid 1px #eee;
    margin-bottom: 0;
    -VENDOR-transition: background-color .2s;
}
${cssClass}.locator_list .loc_row:last-child {
    border-bottom: none;
  }
${cssClass}.locator_list .loc_inner {
    padding: ${locRow.padding};
}
${
  marker
    ? `${cssClass}.locator_list .loc_inner {
    padding-left: 30px;
}`
    : ""
}
${cssClass}.locator_list div.loc_row:hover,
${cssClass}.locator_list div.loc_row.current {
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
${cssClass}.locator_form,
${cssClass}.loc_form_cell {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
}
${cssClass}.loc_search_label,
${cssClass}.loc_radius_label,
${cssClass}.loc_radius_select {
    display: none;
}
${cssClass}input.loc_search_text {
    position: absolute;
    left: ${searchBar.left};
    top: ${searchBar.top};
    height: ${searchBar.height};
    width: ${searchBar.width};
    border: ${searchBar.border};
    border-radius: ${searchBar.borderRadius};
    font-size: ${searchBar.fontSize};
    font-weight: ${searchBar.fontWeight};
    color: ${searchBar.color};
    text-align: ${searchBar.textAlign};
    text-transform: ${searchBar.textTransform};
    padding: ${searchBar.padding};
    box-sizing: border-box;
    z-index: 1;
}
${cssClass}.loc_search_button {
    position: absolute;
    left: ${searchButton.left};
    top: ${searchButton.top};
    width: ${searchButton.width};
    height: ${searchButton.height};
    background-color: ${searchButton.backgroundColor};
    border: ${searchButton.border};
    border-top-left-radius: ${searchButton.borderTopLeftRadius};
    border-top-right-radius: ${searchButton.borderTopRightRadius};
    border-bottom-left-radius: ${searchButton.borderBottomLeftRadius};
    border-bottom-right-radius: ${searchButton.borderBottomRightRadius};
    -VENDOR-transition: background-color .2s;
    z-index: 2;
}
${cssClass}.loc_search_button:hover {
    background-color: ${pSBC(0.2, searchButton.backgroundColor)};
}
${cssClass}.loc_search_button span {
    position: absolute;
    font-size: 0;
    display: block;
    width: 6px;
    height: 6px;
    position: absolute;
    top: calc(50% - 5px);
    left: calc(50% - 5px);
    border: 1px solid ${searchButton.iconColor};
    border-radius: 100%;
}
${cssClass}.loc_search_button span:before {
    content: '';
    width: 6px;
    height: 6px;
    position: absolute;
    top: 0;
    left: 7px;
    border-bottom: 1px solid ${searchButton.iconColor};
    transform: rotate(45deg);
    transform-origin: 0;
}${markerCSS}${numberCSS}`;
};

export default DesktopStoreLocatorCSS;
