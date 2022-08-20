import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const Preview = styled.div`
  position: relative;
  height: 415px;
`;
const Card = styled.div`
  position: absolute;
  top: 11px;
  right: 0;
  width: 440px;
  height: 360px;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #fff;
    background-size: 50%;
    border-radius: 12px;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.4));
  }
`;
const Navbar = styled.div`
  position: absolute;
  top: calc(50% - 140px);
  right: 100%;
  width: 105px;
  height: 280px;
  background: #25283d;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.4));
`;
const Sidebar = styled.div`
  position: absolute;
  top: 30px;
  left: 100%;
  width: 25px;
  height: 240px;
  background: #ff6f6f;
  padding-top: 20px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.4));
  box-sizing: border-box;
`;
const Cta = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 100px;
  height: 25px;
  background: #ff6f6f;
  border-radius: 5px;
`;
const Bar = styled.div`
  height: 10px;
  border-radius: 10px;
  opacity: 0.4;
`;
const Button = styled(Bar)`
  position: relative;
  background: #fff;
  margin-bottom: 13px;
  margin-left: 20px;
  margin-top: ${(props) => props.marginTop || "0"};
  width: ${(props) => props.width};
  background: #fff;
`;
const Footer = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 70%;
  height: 25px;
`;
const Message = styled(Bar)`
  background: #25283d;
  width: 150px;
  margin-top: 8px;
`;
const MessageSeparator = styled.div`
  width: 1px;
  background: #25283d;
  height: 25px;
  margin-right: 15px;
`;
const SocialHeader = styled.div`
  text-align: center;
  font-size: 6px;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 10px;
  user-select: none;
`;
const SocialSeparator = styled.div`
  height: 1px;
  background: #fff;
  width: 17px;
  margin-bottom: 10px;
  margin-left: 4px;
`;
const Lockup = styled.div`
  position: absolute;
  bottom: 15px;
  width: 80%;
  left: 10%;
  height: 60px;
  background: #fff;
  opacity: 0.4;
  border-radius: 5px;
`;

const DesktopLayoutPreview = () => {
  const layout = useSelector((state) => state.layout);
  const {
    messageBar,
    messageIcon,
    messageSeparator,
    sidebar,
    socialHeader,
    socialSeparator,
    facebook,
    twitter,
    instagram,
    youtube,
    pinterest,
    linkedin,
    lockup,
  } = layout;

  const options = {
    fontSize: "14px",
    sx: {
      color: "#fff",
      margin: "0 5px",
    },
  };

  return (
    <Preview>
      <Card>
        <Navbar>
          <Button width="50px" marginTop="90px" />
          <Button width="70px" />
          <Button width="60px" />
          {lockup && <Lockup />}
        </Navbar>
        {sidebar && (
          <Sidebar>
            {socialHeader && (
              <SocialHeader>
                Follow
                <br />
                us on
              </SocialHeader>
            )}
            {socialSeparator && <SocialSeparator />}
            {facebook && <FacebookIcon {...options} />}
            {twitter && <TwitterIcon {...options} />}
            {instagram && <InstagramIcon {...options} />}
            {youtube && <YouTubeIcon {...options} />}
            {pinterest && <PinterestIcon {...options} />}
            {linkedin && <LinkedInIcon {...options} />}
          </Sidebar>
        )}
        <CloseIcon
          sx={{
            position: "absolute",
            top: "0",
            left: "100%",
            width: "25px",
            color: "#25283d",
          }}
        />
        {messageBar && (
          <Footer>
            <Box sx={{ display: "flex" }}>
              {messageIcon && (
                <InfoIcon sx={{ marginRight: "10px", color: "#25283d" }} />
              )}
              {messageSeparator && <MessageSeparator />}
              <Message />
            </Box>
          </Footer>
        )}
        <Cta />
      </Card>
    </Preview>
  );
};

export default DesktopLayoutPreview;
