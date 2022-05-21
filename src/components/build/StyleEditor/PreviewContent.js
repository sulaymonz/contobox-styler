import React from "react";
import Layout from "./Layout";
import { useComponentByType } from "../../common/helpers";
import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../utils/styles";

const PreviewContent = () => {
  const view = useSelector((state) => state.build.styleEditorUI.view);
  const component = useSelector(
    (state) => state.build.components.componentsByIds
  );
  const layoutStyles = useSelector((state) => state.layout);

  const layoutProps = stylesToCSS(layoutStyles);
  const type = view !== "Layout" ? component[view].type : "Layout";

  layoutProps.card.left = `calc((100vw - ${layoutProps.card.width})/2)`;

  return <Layout {...layoutProps}>{useComponentByType(type)}</Layout>;
};

export default PreviewContent;
