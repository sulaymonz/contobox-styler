import React from "react";
import { useSelector } from "react-redux";
import LayoutContent from "./LayoutContent";

const Layout = () => {
  const layout = useSelector((state) => state.layout);
  const LayoutProps = {};

  Object.entries(layout).forEach(([elKey, elProps]) => {
    Object.entries(elProps).forEach(([pKey, p]) => {
      LayoutProps[elKey] = {
        ...LayoutProps[elKey],
        [pKey]: `${p.value}${p.unit}`,
      };
    });
  });

  LayoutProps.card.left = `calc((100vw - ${LayoutProps.card.width})/2)`;

  return <LayoutContent {...LayoutProps} />;
};

export default Layout;
