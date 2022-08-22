import React from "react";
import styled from "styled-components";
import photoImg from "../../../../images/photo.PNG";
import { useSelector } from "react-redux";

const InnerFrame = styled.div`
  width: 100%;
  height: 100%;
  background: url("${photoImg}") center no-repeat;
  background-size: 50%;
`;

const MobileCustom = () => {
  const view = useSelector((state) => state.build.styleEditorUI.view);
  const custom = useSelector((state) => state.custom[view]);
  const image = custom.preset.includes("Custom - B");
  return <>{image && <InnerFrame />}</>;
};

export default MobileCustom;
