import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../utils/styles";

const MobileMenuCSS = () => {
  const { wrapper, tabButton, activeTabButton } = stylesToCSS(
    useSelector((state) => state.menu)
  );

  return `
/* Menu */
div.layout-nav-bar {
    background: ${wrapper.backgroundColor};
}
ul.layout-tab-holder {
    margin-top: ${wrapper.paddingTop} !important;
    width: ${tabButton.width};
}
li.tab-button {
    height: ${tabButton.height};
    line-height: ${tabButton.lineHeight};
    font-size: ${tabButton.fontSize};
    font-weight: ${tabButton.fontWeight};
    text-align: ${tabButton.textAlign};
    border: ${tabButton.border};
    border-radius: ${tabButton.borderRadius};
    background-color: ${tabButton.backgroundColor};
    text-transform: ${tabButton.textTransform};
    padding: ${tabButton.padding};
    box-shadow: none;
    margin: 0;
    margin-bottom: ${tabButton.marginBottom};
    transition: all .2s !important;
}
.tab-button.current {
    background: ${activeTabButton.backgroundColor};
    border: ${activeTabButton.border};
    font-weight: ${activeTabButton.fontWeight};
}
.tab-button span {
    color: ${tabButton.color};
    transition: all .2s !important;
}
.tab-button.current span {
    color: ${activeTabButton.color};
}
`;
};

export default MobileMenuCSS;
