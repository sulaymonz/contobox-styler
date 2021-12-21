import React from "react";
import styled from "styled-components";
import logoImg from "../../../images/logo.png";
import pSBC from "shade-blend-color";

const Box = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  box-sizing: border-box;
`;

const Panel = styled.div`
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
`;

const Logo = styled(Box)`
  background: url("${logoImg}") center no-repeat;
  background-size: contain;
  cursor: pointer;
`;

const TabTitle = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};
  font-weight: bold;
`;

const Card = styled(Box)`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.6);
  background-color: ${(props) => props.backgroundColor};
`;

const SideCard = styled(Card)`
  opacity: 0.5;
  transform: scale(0.85);
`;

const Cta = styled(Box)`
  line-height: ${(props) => props.lineHeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  text-transform: ${(props) => props.textTransform};
  padding: ${(props) => props.padding};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${(props) => pSBC(0.2, props.backgroundColor)};
  }
`;

const NavDots = styled(Box)`
  position: absolute;
  top: auto;
  height: 2vh;
  width: ${(props) => props.width};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
`;

const NavDot = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  background-color: ${(props) => props.dotColor};
  border-radius: 100%;
  opacity: 0.3;
`;

const NavDot1 = styled(NavDot)`
  width: 11.11111%;
  padding-top: 11.11111%;
  top: 0;
  opacity: 1;
`;

const NavDot2 = styled(NavDot)`
  width: 8.888889%;
  padding-top: 8.888889%;
  top: 10%;
`;

const NavDot3 = styled(NavDot)`
  width: 6.66667%;
  padding-top: 6.66667%;
  top: 20%;
`;

const Hamburger = styled(Box)`
  width: 8vw;
  height: 8vw;
  cursor: pointer;
`;

const Bar = styled.div`
  position: absolute;
  width: 80%;
  height: 7.5%;
  left: 10%;
  top: ${(props) => props.top};
  background-color: ${(props) => props.barColor};
  border-radius: 10px;
`;

const CloseButton = styled(Box)`
  left: auto;
  right: ${(props) => props.right};
  cursor: pointer;
`;

const Layout = (props) => {
  const { panel, logo, tabTitle, card, cta, navDots, close, hamburger } = props;
  return (
    <Panel {...panel}>
      <SideCard {...card} left={`calc(${card.left} - ${card.width})`} />
      <SideCard {...card} left={`calc(${card.left} + ${card.width})`} />
      <Card {...card}>{props.children}</Card>
      {props.tabTitle && <TabTitle {...tabTitle}>Layout</TabTitle>}
      <Logo {...logo} />
      {props.navDots && (
        <NavDots {...navDots}>
          <NavDot3 left="0" dotColor={navDots.dotColor} />
          <NavDot2 left="21.11111%" dotColor={navDots.dotColor} />
          <NavDot1 left="44.44444%" dotColor={navDots.dotColor} />
          <NavDot2 left="68.88889%" dotColor={navDots.dotColor} />
          <NavDot3 left="93.33333%" dotColor={navDots.dotColor} />
        </NavDots>
      )}
      {props.cta && <Cta {...cta}>{cta.title}</Cta>}
      {props.hamburger && (
        <Hamburger {...hamburger}>
          <Bar barColor={hamburger.barColor} top="25%" />
          <Bar barColor={hamburger.barColor} top="45%" />
          <Bar barColor={hamburger.barColor} top="65%" />
        </Hamburger>
      )}
      <CloseButton {...close}>
        <svg viewBox="0,0 45,45" width="68%">
          <path
            strokeWidth={close.strokeWidth}
            strokeLinecap="round"
            fill="none"
            stroke={close.stroke}
            d="M4 4 L41 41 M4 41 L41 4"
          />
        </svg>
      </CloseButton>
    </Panel>
  );
};

export default Layout;
