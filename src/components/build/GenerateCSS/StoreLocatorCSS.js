import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../utils/styles";

const StoreLocatorCSS = (componentID) => {
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

  const markerCSS = marker
    ? `
${cssClass}.loc_img {
    display: inline-block;
    width: 20px;
    height: calc(${name.fontSize} + 2vw);
    background: url("images/marker.png") center no-repeat;
    background-size: contain;
}`
    : "";

  const numberCSS = number
    ? `
${cssClass}.loc_num {
  display: inline-block;
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

  return `
/* Locator */
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
  padding: ${slider.padding};
  box-sizing: border-box;
}
${cssClass}.loc_name {
  margin: ${name.margin};
  font-size: ${name.fontSize};
  font-weight: ${name.fontWeight};
  color: ${name.color};
  text-align: ${name.textAlign};
  line-height: ${name.lineHeight};
  text-transform: ${name.textTransform};${
    marker || number
      ? `
  display: inline-block;`
      : ""
  }
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
  font-size: ${phone.fontSize};
  font-weight: ${phone.fontWeight};
  color: ${phone.color};
  text-align: ${phone.textAlign};
  line-height: ${phone.lineHeight};
  text-transform: ${phone.textTransform};
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
  bottom: ${more.bottom};
  font-size: ${phone.fontSize};
  font-weight: ${phone.fontWeight};
  color: ${phone.color};
  text-align: ${phone.textAlign};
  padding: 0;
  margin: 0;
  line-height: 1;
  text-transform: none;
}

${cssClass}form.locator_form {
    height: ${searchBar.height};
    width: ${searchBar.width};
    left: ${searchBar.left};
    top: ${searchBar.top};
    border-radius: ${searchBar.borderRadius};
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
.gmnoprint.gm-style-mtc {
    display: none;
}

${markerCSS}
${numberCSS}
`;
};

export default StoreLocatorCSS;
