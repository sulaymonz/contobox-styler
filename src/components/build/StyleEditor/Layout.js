import React from "react";
import { useSelector } from "react-redux";
import { LayoutContent } from "./LayoutTemplates";

const Layout = () => {
  const layout = useSelector((state) => state.layout);

  const { panel, logo, tabTitle, card, cta, navDots, close, hamburger } =
    layout;

  const LayoutProps = {
    panel: {
      backgroundColor: panel.backgroundColor.value,
    },
    logo: {
      width: `${logo.width.value}${logo.width.unit}`,
      height: `${logo.height.value}${logo.height.unit}`,
      top: `${logo.top.value}${logo.top.unit}`,
      left: `${logo.left.value}${logo.left.unit}`,
    },
    tabTitle: {
      width: `${tabTitle.width.value}${tabTitle.width.unit}`,
      top: `${tabTitle.top.value}${tabTitle.top.unit}`,
      left: `${tabTitle.left.value}${tabTitle.left.unit}`,
      fontSize: `${tabTitle.fontSize.value}${tabTitle.fontSize.unit}`,
      color: tabTitle.color.value,
      textAlign: tabTitle.textAlign.value,
      lineHeight: tabTitle.lineHeight.value,
    },
    card: {
      width: `${card.width.value}${card.width.unit}`,
      top: `${card.top.value}${card.top.unit}`,
      height: `${card.height.value}${card.height.unit}`,
      left: `calc((100vw - ${card.width.value}${card.width.unit})/2)`,
      backgroundColor: card.backgroundColor.value,
    },
    cta: {
      title: `${cta.title.value}`,
      width: `${cta.width.value}${cta.width.unit}`,
      height: `${cta.height.value}${cta.height.unit}`,
      lineHeight: `${cta.lineHeight.value}${cta.lineHeight.unit}`,
      top: `${cta.top.value}${cta.top.unit}`,
      left: `${cta.left.value}${cta.left.unit}`,
      fontSize: `${cta.fontSize.value}${cta.fontSize.unit}`,
      color: `${cta.color.value}`,
      textAlign: `${cta.textAlign.value}`,
      border: `${cta.border.value}`,
      borderRadius: `${cta.borderRadius.value}${cta.borderRadius.unit}`,
      backgroundColor: `${cta.backgroundColor.value}`,
      textTransform: `${cta.textTransform.value}`,
      padding: `${cta.padding.value}`,
    },
    navDots: {
      bottom: `${navDots.bottom.value}${navDots.bottom.unit}`,
      width: `${navDots.width.value}${navDots.width.unit}`,
      left: `${navDots.left.value}${navDots.left.unit}`,
      dotColor: `${navDots.dotColor.value}${navDots.dotColor.unit}`,
    },
    hamburger: {
      top: `${hamburger.top.value}${hamburger.top.unit}`,
      left: `${hamburger.left.value}${hamburger.left.unit}`,
      barColor: `${hamburger.barColor.value}${hamburger.barColor.unit}`,
    },
    close: {
      width: `${close.width.value}${close.width.unit}`,
      height: `${close.height.value}${close.height.unit}`,
      top: `${close.top.value}${close.top.unit}`,
      right: `${close.right.value}${close.right.unit}`,
      stroke: `${close.stroke.value}${close.stroke.unit}`,
      strokeWidth: `${close.strokeWidth.value}${close.strokeWidth.unit}`,
    },
  };

  return <LayoutContent {...LayoutProps} />;
};

export default Layout;
