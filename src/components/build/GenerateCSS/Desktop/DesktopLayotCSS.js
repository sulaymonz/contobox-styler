import pSBC from "shade-blend-color";
import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../../utils/styles";

const DesktopLayoutCSS = () => {
  const {
    navbar,
    sidebar,
    logo,
    cta,
    close,
    tabButton,
    activeTabButton,
    socialButton,
    socialHeader,
    socialSeparator,
    messageBar,
    messageIcon,
    messageSeparator,
  } = stylesToCSS(useSelector((state) => state.layout));

  const socialHeaderCSS = socialHeader
    ? `
.sl-header {
    position: relative;
    height: ${socialHeader.height};
    line-height: ${socialHeader.lineHeight};
    text-align: center;
    color: ${socialHeader.color};
    font-size: ${socialHeader.fontSize};
}
.sl-header::before {
    content: "Follow\\aus on";
    white-space: pre;
    position: relative;
    transform: translateY(-50%);
    top: 50%;
    display: block;
}`
    : `
.sl-header {
    display: none;
}`;

  const socialSeparatorCSS =
    socialHeader && socialSeparator
      ? `
.sl-header:after {
    content: "";
    position: absolute;
    width: ${socialSeparator.width};
    height: ${socialSeparator.height};
    top: ${socialSeparator.top};
    left: ${socialSeparator.left};
}`
      : "";

  const socialButtonCSS = socialButton
    ? `
.social-buttons {
    margin: ${socialButton.parentMargin};
}
.social-button {
    height: ${socialButton.height};
    -VENDOR-transition: all .2s;
}
.social-button:hover {
    -VENDOR-transform: scale(1.1);
}
.social-button svg {
    fill: ${socialButton.color};
    width: ${socialButton.svgWidth};
}`
    : "";

  const messageIconCSS = messageIcon
    ? `
.message-icon {
    width: 25px;
    width: ${messageIcon.width};
    background: url("images/tab1-message-icon.png") left center no-repeat;
    background-size: 90%;
}
.message-icon svg {
    display: none;
}`
    : `
.message-icon {
    display: none;
}`;

  const messageSeparatorCSS = messageSeparator
    ? `
.message-sep {
    left: ${messageBar.left};
    top: ${messageSeparator.top};
    bottom: ${messageSeparator.bottom};
    width: ${messageSeparator.width};
    background-color: ${messageSeparator.backgroundColor};
}`
    : `
.message-sep {
    display: none;
}`;

  const messageBarCSS = messageBar
    ? `
.message-text {
    left: ${messageBar.left};
    width: ${messageBar.width};
    line-height: ${messageBar.lineHeight};
    color: ${messageBar.color};
    font-size: ${messageBar.fontSize};
    font-weight: ${messageBar.fontWeight};
    text-transform: ${messageBar.textTransform};
    padding: ${messageBar.padding};
    box-sizing: border-box;
}${messageIconCSS}${messageSeparatorCSS}`
    : "";

  return `
#panel {
    box-shadow: none;
    overflow: visible;
}
#panel,
.tab-button {
    font-family: 'ProximaNova', arial, sans-serif;
}
.expansion-overlay {
    background: rgba(0, 0, 0, 0.5) url("images/overlay-bg.jpg") center no-repeat;
    background-size: 1100px auto;
}
.opened .expansion-overlay {
    opacity: 1;
}
.expansion-close {
    top: ${close.top};
    right: ${close.right};
}
.expansion-close svg path {
    stroke: ${close.stroke};
    stroke-width: ${close.strokeWidth};
}
.layout-side-bar {
    top: ${sidebar.top};
    bottom: ${sidebar.bottom};
    background-color: ${sidebar.backgroundColor};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.layout-nav-bar {
    top: ${navbar.top};
    bottom: ${navbar.bottom};
    background-color: ${navbar.backgroundColor};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.tab-frames {
    border-radius: 10px;
    z-index: 9;
}
.layout-side-bar,
.layout-nav-bar,
.tab-frames {
    box-shadow: -1px 0px 15px 0px rgba(0,0,0,.2);
}
.layout-footer {
    left: 200px;
    width: calc(100% - 245px);
}
.layout-tabs {
    top: ${navbar.paddingTop};
}
.tab-button {
    position: relative;
    width: ${tabButton.width};
    height: ${tabButton.height};
    line-height: ${tabButton.lineHeight};
    color: ${tabButton.color};
    background-color: ${tabButton.backgroundColor};
    font-size: ${tabButton.fontSize};
    font-weight: ${tabButton.fontWeight};
    text-align: ${tabButton.textAlign};
    text-transform: ${tabButton.textTransform};
    border: ${tabButton.border};
    border-radius: ${tabButton.borderRadius};
    padding: ${tabButton.padding};
    padding-left: ${tabButton.paddingLeft};
    margin: ${tabButton.margin};
    margin-bottom: ${tabButton.marginBottom};
    box-sizing: border-box;
    transition: all .2s;
}
.tab-button:hover {
    color: ${tabButton.hoverColor};
    background-color: ${tabButton.hoverBackground};
    -VENDOR-transform: none;
}
.tab-button.current {
    color: ${activeTabButton.hoverColor};
    background-color: ${activeTabButton.hoverBackground};
    border: ${activeTabButton.border};
    font-weight: ${activeTabButton.border};
}


/* CTA */
.main-cta {
    position: absolute;
    top: ${logo.top};
    left: ${logo.left};
    width: ${logo.width};
    height: ${logo.height};
    background: url("images/logo.png") center no-repeat;
    background-size: contain;
    z-index: 999;
}
.${cta.className} {
    position: absolute;
    bottom: ${cta.bottom};
    right: ${cta.right};
    width: ${cta.width};
    height: ${cta.height};
    line-height: ${cta.lineHeight};
    padding: ${cta.padding};
    font-size: ${cta.fontSize};
    font-weight: ${cta.fontWeight};
    text-transform: ${cta.textTransform};
    text-align: ${cta.textAlign};
    color: ${cta.color};
    background-color: ${cta.backgroundColor};
    border: ${cta.border};
    border-radius: ${cta.borderRadius};
    text-decoration: none;
    -VENDOR-transition: all .2s;
    z-index: 999;
}
.learn-more:hover {
    color: ${cta.color};
    background-color: ${pSBC(0.2, cta.backgroundColor)};
}
.learn-more span {
    display: block;
}

/* Social */${socialHeaderCSS}${socialSeparatorCSS}${socialButtonCSS}

/* Messages */${messageBarCSS}`;
};

export default DesktopLayoutCSS;
