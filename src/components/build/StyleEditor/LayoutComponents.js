import styled from "styled-components";
import pSBC from "shade-blend-color";
import logoImg from "../../../images/logo.png";
import React from "react";

export const Box = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  box-sizing: border-box;
  user-select: none;
`;

export const Button = styled(Box)`
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
  font-weight: ${(props) => props.fontWeight};
  user-select: none;
  &:hover {
    background-color: ${(props) => pSBC(0.2, props.backgroundColor)};
  }
`;

export const Copy = styled.div`
  display: block;
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  margin: 0;
  box-sizing: border-box;
  text-transform: ${(props) => props.textTransform};
  user-select: none;
`;

export const Logo = styled(Box)`
  background: url("${logoImg}") center no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const FacebookSVG = () => {
  return (
    <svg
      version="1.1"
      className="social_media facebookSVG"
      x="0px"
      y="0px"
      viewBox="-299 390.1 12.9 12.9"
    >
      <g>
        <path
          className="st0"
          d="M-292.6,390.1c-3.5,0-6.4,2.9-6.4,6.4s2.9,6.4,6.4,6.4s6.4-2.9,6.4-6.4S-289,390.1-292.6,390.1L-292.6,390.1z
                         M-290.9,396.5h-1.1v3.8h-1.4v-3.8h-1v-1.3h1v-0.8c0-1.1,0.3-1.7,1.6-1.7h1.1v1.3h-0.8c-0.4,0-0.5,0.2-0.5,0.5v0.7h1.2
                        L-290.9,396.5z"
        />
      </g>
    </svg>
  );
};

export const TwitterSVG = () => {
  return (
    <svg
      version="1.1"
      className="social_media twitterSVG"
      x="0px"
      y="0px"
      viewBox="0 0 39.8 40"
    >
      <g>
        <path
          className="st0"
          d="M19.9,0.1C9,0.1,0,9,0,20c0,11,8.9,19.9,19.9,19.9c11,0,19.9-8.9,19.9-19.9C39.8,9,30.9,0.1,19.9,0.1L19.9,0.1
                        z M28.8,15.4c0,0.2,0,0.4,0,0.6c0,6-4.6,13-13,13c-2.6,0-5-0.8-7-2.1C9.1,27,9.5,27,9.9,27c2.1,0,4.1-0.7,5.7-2
                        c-2,0-3.7-1.4-4.3-3.2c0.3,0.1,0.6,0.1,0.9,0.1c0.4,0,0.8-0.1,1.2-0.2c-2.1-0.4-3.7-2.3-3.7-4.5c0,0,0,0,0-0.1
                        c0.6,0.3,1.3,0.5,2.1,0.6c-1.2-0.8-2-2.2-2-3.8c0-0.8,0.2-1.6,0.6-2.3c2.3,2.8,5.6,4.6,9.4,4.8c-0.1-0.3-0.1-0.7-0.1-1
                        c0-2.5,2-4.6,4.6-4.6c1.3,0,2.5,0.6,3.3,1.4c1-0.2,2-0.6,2.9-1.1c-0.3,1.1-1.1,2-2,2.5c0.9-0.1,1.8-0.4,2.6-0.7
                        C30.4,14,29.7,14.8,28.8,15.4L28.8,15.4z M28.8,15.4"
        />
      </g>
    </svg>
  );
};

export const InstagramSVG = () => {
  return (
    <svg
      version="1.1"
      className="social_media instagramSVG"
      x="0px"
      y="0px"
      viewBox="0 0 39.9 39.9"
    >
      <g>
        <path
          className="st0"
          d="M20,23.9c2.2,0,4-1.8,4-4c0-0.9-0.3-1.7-0.8-2.3c-0.7-1-1.9-1.7-3.2-1.7c-1.3,0-2.5,0.7-3.2,1.7
                        c-0.5,0.7-0.8,1.5-0.8,2.3C16,22.1,17.8,23.9,20,23.9L20,23.9z M20,23.9"
        />
        <path
          className="st0"
          d="M28.7,15.1v-3.8h-0.5l-3.3,0l0,3.8L28.7,15.1z M28.7,15.1"
        />
        <path
          className="st0"
          d="M20,0.1C9,0.1,0.1,9,0.1,19.9c0,11,8.9,19.9,19.9,19.9c11,0,19.9-8.9,19.9-19.9C39.8,9,30.9,0.1,20,0.1L20,0.1
                        z M31.3,17.6v9.2c0,2.4-2,4.4-4.4,4.4H13.1c-2.4,0-4.4-2-4.4-4.4V13c0-2.4,2-4.4,4.4-4.4h13.9c2.4,0,4.4,2,4.4,4.4V17.6z
                         M31.3,17.6"
        />
        <path
          className="st0"
          d="M26.2,19.9c0,3.4-2.8,6.2-6.2,6.2c-3.4,0-6.2-2.8-6.2-6.2c0-0.8,0.2-1.6,0.5-2.3h-3.4v9.2c0,1.2,1,2.2,2.2,2.2
                        h13.9c1.2,0,2.2-1,2.2-2.2v-9.2h-3.4C26,18.3,26.2,19.1,26.2,19.9L26.2,19.9z M26.2,19.9"
        />
      </g>
    </svg>
  );
};

export const YoutubeSVG = () => {
  return (
    <svg
      version="1.1"
      className="social_media youtubeSVG"
      x="0px"
      y="0px"
      viewBox="0 0 78.8 78.7"
    >
      <g>
        <path
          className="st0"
          d="M20.9,42.2H24v16.8h2.9V42.2h3.2v-2.7h-9.2V42.2z M20.9,42.2"
        />
        <path
          className="st0"
          d="M45.7,44.2c-1,0-1.9,0.5-2.7,1.6v-6.4h-2.6v19.5h2.6v-1.4c0.9,1.1,1.8,1.6,2.7,1.6c1,0,1.8-0.6,2.1-1.6
                        c0.2-0.6,0.3-1.6,0.3-2.9v-5.8c0-1.4-0.1-2.3-0.3-2.9C47.4,44.8,46.7,44.2,45.7,44.2L45.7,44.2z M45.4,54.8c0,1.3-0.4,2-1.1,2
                        c-0.4,0-0.9-0.2-1.3-0.6v-8.9c0.4-0.4,0.9-0.6,1.3-0.6c0.8,0,1.1,0.7,1.1,2V54.8z M45.4,54.8"
        />
        <path
          className="st0"
          d="M35.4,55.5c-0.6,0.8-1.1,1.2-1.7,1.2c-0.4,0-0.6-0.2-0.6-0.6c0-0.1,0-0.4,0-1V44.4h-2.6v11.5
                        c0,1,0.1,1.7,0.2,2.2c0.3,0.7,0.9,1.1,1.7,1.1c1,0,2-0.6,3-1.8v1.6H38V44.4h-2.6V55.5z M35.4,55.5"
        />
        <path
          className="st0"
          d="M37.7,30.9c0.9,0,1.3-0.7,1.3-2v-6.2c0-1.4-0.4-2-1.3-2c-0.9,0-1.3,0.7-1.3,2v6.2
                        C36.4,30.3,36.8,30.9,37.7,30.9L37.7,30.9z M37.7,30.9"
        />
        <path
          className="st0"
          d="M39.4,0.2C17.8,0.2,0.3,17.7,0.3,39.3c0,21.6,17.5,39.1,39.1,39.1c21.6,0,39.1-17.5,39.1-39.1
                        C78.5,17.7,61,0.2,39.4,0.2L39.4,0.2z M43.8,18.5h2.7v10.8c0,0.6,0,0.9,0,1c0.1,0.4,0.3,0.6,0.6,0.6c0.5,0,1.1-0.4,1.7-1.2V18.5
                        h2.7v14.7h-2.7v-1.6c-1.1,1.2-2.1,1.8-3,1.8c-0.9,0-1.4-0.4-1.7-1.1c-0.1-0.4-0.2-1.1-0.2-2.2V18.5z M33.7,23.2
                        c0-1.6,0.3-2.7,0.8-3.5c0.7-1,1.8-1.5,3.1-1.5c1.3,0,2.4,0.5,3.1,1.5c0.6,0.7,0.8,1.9,0.8,3.5v5.1c0,1.6-0.3,2.7-0.8,3.5
                        c-0.7,1-1.8,1.5-3.1,1.5c-1.3,0-2.4-0.5-3.1-1.5c-0.6-0.7-0.8-1.9-0.8-3.5V23.2z M26.6,13.4l2.1,7.7l2-7.7h3l-3.6,11.7v8h-3v-8
                        c-0.3-1.4-0.9-3.5-1.8-6.2c-0.6-1.8-1.3-3.7-1.9-5.5H26.6z M60.5,60.2c-0.5,2.3-2.4,4-4.7,4.3c-5.4,0.6-10.9,0.6-16.3,0.6
                        c-5.5,0-10.9,0-16.3-0.6c-2.3-0.3-4.2-2-4.7-4.3c-0.8-3.3-0.8-6.9-0.8-10.3c0-3.4,0-7,0.8-10.3c0.5-2.3,2.4-4,4.7-4.3
                        c5.4-0.6,10.9-0.6,16.3-0.6c5.5,0,10.9,0,16.3,0.6c2.3,0.3,4.2,2,4.7,4.3c0.8,3.3,0.8,6.9,0.8,10.3C61.2,53.3,61.2,56.9,60.5,60.2
                        L60.5,60.2z M60.5,60.2"
        />
        <path
          className="st0"
          d="M54.1,44.2c-1.3,0-2.4,0.5-3.2,1.5c-0.6,0.7-0.8,1.9-0.8,3.4v5.1c0,1.5,0.3,2.7,0.8,3.4c0.8,1,1.8,1.5,3.2,1.5
                        c1.4,0,2.5-0.5,3.2-1.6c0.3-0.5,0.5-1,0.6-1.6c0-0.3,0.1-0.8,0.1-1.7v-0.4h-2.7c0,1.1,0,1.6-0.1,1.8c-0.2,0.7-0.5,1.1-1.2,1.1
                        c-0.9,0-1.3-0.7-1.3-2v-2.6H58v-3c0-1.6-0.3-2.7-0.8-3.4C56.4,44.7,55.4,44.2,54.1,44.2L54.1,44.2z M55.4,49.9h-2.6v-1.3
                        c0-1.3,0.4-2,1.3-2c0.9,0,1.3,0.7,1.3,2V49.9z M55.4,49.9"
        />
      </g>
    </svg>
  );
};

export const PinterestSVG = () => {
  return (
    <svg
      version="1.1"
      className="social_media pinterestSVG"
      x="0px"
      y="0px"
      viewBox="0 0 412.2 412.2"
    >
      <g>
        <path
          className="st0"
          d="M206.5,1.2C93.3,1.2,1.7,92.9,1.7,206c0,113.1,91.7,204.8,204.8,204.8c113.1,0,204.8-91.7,204.8-204.8
                        C411.3,92.9,319.6,1.2,206.5,1.2L206.5,1.2z M226.3,274.9c-18.6-1.4-26.4-10.7-41-19.5c-8,42.1-17.8,82.4-46.9,103.5
                        c-9-63.6,13.2-111.3,23.4-162c-17.5-29.5,2.1-88.8,39-74.2c45.5,18-39.4,109.6,17.6,121c59.4,11.9,83.7-103.1,46.9-140.6
                        c-53.3-54-155-1.2-142.5,76.1c3,18.9,22.6,24.7,7.8,50.8c-34.1-7.6-44.3-34.4-43-70.3c2.1-58.7,52.7-99.7,103.5-105.4
                        c64.2-7.2,124.4,23.6,132.8,84C333.3,206.4,295,280.2,226.3,274.9L226.3,274.9z M226.3,274.9"
        />
      </g>
    </svg>
  );
};
