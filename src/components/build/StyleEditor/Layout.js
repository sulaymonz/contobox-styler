import React from "react";
import { useSelector } from "react-redux";
import LayoutContent from "./LayoutContent";
import { stylesToCSS } from "../../../utils/styles";

const Layout = () => {
  const layout = useSelector((state) => state.layout);
  const layoutProps = stylesToCSS(layout);

  layoutProps.card.left = `calc((100vw - ${layoutProps.card.width})/2)`;

  return <LayoutContent {...layoutProps} />;
};

export default Layout;
