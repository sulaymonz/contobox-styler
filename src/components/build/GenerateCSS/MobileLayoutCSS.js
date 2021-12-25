import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../utils/styles";

const MobileLayoutCSS = () => {
  const { panel, logo, tabTitle, card, cta, navDots, hamburger, close } =
    stylesToCSS(useSelector((state) => state.layout));

  const hamburgerCSS = hamburger
    ? `
.hamburgerMenu {
    width: 8vw;
    height: 8vw;
    top: ${hamburger.top};
    left: ${hamburger.left};
}
.hamburgerMenuBar {
    background-color: ${hamburger.barColor};
}
`
    : `
.hamburgerMenu {
    display: none;
}
`;

  const tabTitlelCSS = tabTitle
    ? `
.tabTitleContainer {
    top: ${tabTitle.top};
    left: ${tabTitle.left};
    width: ${tabTitle.width};
    text-align: ${tabTitle.textAlign};
}
.tabTitle {
    color: ${tabTitle.color};
    font-size: ${tabTitle.fontSize};
    font-weight: bold;
    line-height: ${tabTitle.lineHeight};
}
`
    : `
.tabTitle {
    display: none;
}
`;

  const ctaCSS = cta
    ? `
.learn-more {
    position: absolute;
    text-decoration: none;
    z-index: 9;
    width: ${cta.width};
    height: ${cta.height};
    line-height: ${cta.lineHeight};
    top: ${cta.top};
    left: ${cta.left};
    font-size: ${cta.fontSize};
    color: ${cta.color};
    text-align: ${cta.textAlign};
    border: ${cta.border};
    border-radius: ${cta.borderRadius};
    background-color: ${cta.backgroundColor};
    text-transform: ${cta.textTransform};
    padding: ${cta.padding};
}
`
    : "";

  const navDotsCSS = navDots
    ? `
.navDot {
    background-color: ${navDots.dotColor};
}
.custom-element-0 {
    bottom: ${navDots.bottom};
    width: ${navDots.width};
    left: ${navDots.left};
}
  `
    : `
.custom-element-0 {
    display: none;
}
`;

  return `
#panel,
div.layout-nav-bar  {
    background-color: ${panel.backgroundColor};
}
#panel,
.tab-button {
    font-family: 'Roboto', arial, sans-serif;
}
.tab-frames {
    width: ${card.width};
    left: calc((100vw - ${card.width})/2);
    height: ${card.height};
    top: ${card.top};
}
div.expansion-close {
    width: ${close.width};
    height: ${close.height};
    top: ${close.top};
    right: ${close.right};
}
div.expansion-close svg path {
    stroke: ${close.stroke};
    stroke-width: ${close.strokeWidth};
}
${hamburgerCSS}
${navDotsCSS}
${tabTitlelCSS}

/* CTA */
.custom-links a.custom-link.main-cta {
    width: ${logo.width};
    height: ${logo.height};
    top: ${logo.top};
    left: ${logo.left};
    background: url("images/logo.png") center no-repeat !important;
    background-size: contain !important;
}
${ctaCSS}

/* small screen fixes */
@media only screen and (max-height: 500px) {
  .fullTitle, .fullDesc, .gl-slide-title, .gl-slide-desc {
    line-height: 1.3em;
  }
}
    `;
};

export default MobileLayoutCSS;
