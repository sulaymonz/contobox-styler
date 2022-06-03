import styled from "styled-components";
import pSBC from "shade-blend-color";

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
