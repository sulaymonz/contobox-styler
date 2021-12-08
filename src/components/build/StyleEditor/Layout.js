import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import logoImg from "../../../images/logo.png";

const StyledTitle = styled.h3`
  font-size: ${(props) => props.fontSize}vw;
`;

const IframeContainerElement = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  border-radius: 16px;
  overflow: hidden;
  text-align: center;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
  padding: 10vw;
`;

const Logo = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background: url("${logoImg}") center no-repeat;
  background-size: contain;
`;

const Layout = () => {
  const fontSize = useSelector((state) => state.build.fontSize);
  const backgroundColor = useSelector((state) => state.build.backgroundColor);

  return (
    <IframeContainerElement backgroundColor={backgroundColor}>
      <Logo width="50vw" height="7vh" top="1.5vh" left="25vw" />
      <StyledTitle fontSize={fontSize}>A stylish framed component!</StyledTitle>
    </IframeContainerElement>
  );
};

export default Layout;
