import React from "react";
import styled from "styled-components";
import pSBC from "shade-blend-color";
import {
  Box,
  Button,
  Logo,
  Copy,
  FacebookSVG,
  TwitterSVG,
  InstagramSVG,
  YoutubeSVG,
  PinterestSVG,
} from "./LayoutComponents";
import InfoIcon from "@mui/icons-material/Info";
import { useComponentByType } from "../../common/helpers";
import { useSelector, useDispatch } from "react-redux";
import * as buildActions from "../../../redux/actions/buildActions";

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.backgroundColor};
`;

const Panel = styled.div`
  position: absolute;
  width: 1026px;
  height: 636px;
  top: calc(50% - 636px / 2 + 20px);
  left: calc(50% - 1026px / 2);
  transform: scale(0.85);
`;

const Bar = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  background-color: ${(props) => props.backgroundColor};
  box-shadow: -1px 0 15px 0 #0003;
  box-sizing: border-box;
  overflow: hidden;
`;

const NavBar = styled(Bar)`
  width: 200px;
  left: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-top: ${(props) => props.paddingTop};
  overflow: visible;
`;

const SwitchLayout = styled.div`
  position: absolute;
  width: 200px;
  top: -30px;
  left: 0;
  color: #25283d;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  z-index: 999;
`;

const TabButton = styled(Button)`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: ${(props) => props.paddingLeft};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    color: ${(props) =>
      props.hoverColor === "autogenerated" ? props.color : props.hoverColor};
    background-color: ${(props) =>
      props.hoverBackground === "autogenerated"
        ? pSBC(0.2, props.backgroundColor)
        : props.hoverBackground};
  }
`;

const ActiveTabButton = styled(TabButton)`
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
  }
  cursor: default;
`;

const SideBar = styled(Bar)`
  width: 45px;
  left: auto;
  right: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const TabFrames = styled(Bar)`
  width: auto;
  left: 200px;
  top: 0;
  bottom: 50px;
  background-color: #fff;
  right: 45px;
  border-radius: 10px;
`;

const Cta = styled(Button)`
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  z-index: 9;
  cursor: pointer;
`;

const CloseButton = styled(Box)`
  width: 45px;
  height: 45px;
  left: auto;
  right: ${(props) => props.right};
  cursor: pointer;
  & svg {
    position: relative;
    left: 0%;
    top: 27%;
    width: 50%;
    height: 50%;
  }
`;

const Social = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45px;
`;

const SocialHeader = styled.div`
  position: relative;
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  text-align: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  &:before {
    content: "Follow\\aus on";
    white-space: pre;
    position: relative;
    transform: translateY(-50%);
    top: 50%;
    display: block;
  }
`;

const SocialSeparator = styled(Box)`
  background-color: ${(props) => props.backgroundColor};
`;

const SocialButtons = styled.div`
  position: relative;
  margin: 10px 0;
  margin: ${(props) => props.margin};
`;

const SocialButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  & svg {
    fill: ${(props) => props.color};
    height: 70%;
    width: ${(props) => props.svgWidth};
  }
`;

const Footer = styled(Bar)`
  width: calc(100% - 245px);
  left: 200px;
  top: auto;
  bottom: 0;
  background-color: transparent;
  height: 50px;
  box-shadow: none;
`;

const MessageIcon = styled(Box)`
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MessageText = styled(Copy)`
  position: absolute;
  left: ${(props) => props.left};
  top: 0;
  height: 100%;
  overflow: hidden;
  text-align: left;
`;

const MessageSeparator = styled(Box)`
  height: auto;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
`;

const DesktopLayout = (props) => {
  const {
    overlay,
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
  } = props;

  const dispatch = useDispatch();
  const view = useSelector((state) => state.build.styleEditorUI.view);
  const components = useSelector(
    (state) => state.build.components.componentsByIds
  );
  const type = view !== "Layout" ? components[view].type : "Layout";

  return (
    <Overlay {...overlay}>
      <Panel>
        <NavBar {...navbar}>
          <SwitchLayout
            onClick={() => {
              dispatch(buildActions.styleEditorShowLayout());
            }}
          >
            Layout
          </SwitchLayout>
          {Object.entries(components).map(([componentID, component]) =>
            componentID === view ? (
              <ActiveTabButton
                {...tabButton}
                {...activeTabButton}
                key={componentID}
              >
                {component.type}
              </ActiveTabButton>
            ) : (
              <TabButton
                {...tabButton}
                key={componentID}
                onClick={() => {
                  dispatch(buildActions.styleEditorShowComponent(componentID));
                }}
              >
                {component.type}
              </TabButton>
            )
          )}
        </NavBar>
        {sidebar && (
          <SideBar {...sidebar}>
            <Social>
              {socialHeader && (
                <SocialHeader {...socialHeader}>
                  {socialSeparator && <SocialSeparator {...socialSeparator} />}
                </SocialHeader>
              )}
              <SocialButtons margin={socialButton.parentMargin}>
                {props.hasOwnProperty("facebook") && (
                  <SocialButton {...socialButton}>
                    <FacebookSVG />
                  </SocialButton>
                )}
                {props.hasOwnProperty("twitter") && (
                  <SocialButton {...socialButton}>
                    <TwitterSVG />
                  </SocialButton>
                )}
                {props.hasOwnProperty("instagram") && (
                  <SocialButton {...socialButton}>
                    <InstagramSVG />
                  </SocialButton>
                )}
                {props.hasOwnProperty("youtube") && (
                  <SocialButton {...socialButton}>
                    <YoutubeSVG />
                  </SocialButton>
                )}
                {props.hasOwnProperty("pinterest") && (
                  <SocialButton {...socialButton}>
                    <PinterestSVG />
                  </SocialButton>
                )}
              </SocialButtons>
            </Social>
          </SideBar>
        )}
        <TabFrames>{useComponentByType(type)}</TabFrames>
        {messageBar && (
          <Footer>
            {messageIcon && (
              <MessageIcon {...messageIcon}>
                <InfoIcon sx={{ color: "#fff" }} />
              </MessageIcon>
            )}
            <MessageText {...messageBar}>{messageBar.text}</MessageText>
            {messageSeparator && (
              <MessageSeparator {...messageSeparator} left={messageBar.left} />
            )}
          </Footer>
        )}
        <Logo {...logo} />
        <Cta {...cta}>{cta.title}</Cta>
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
    </Overlay>
  );
};

export default DesktopLayout;
