import React from "react";
import styled from "styled-components";
import { Button } from "./LayoutComponents";
import * as buildActions from "../../../redux/actions/buildActions";
import { useSelector, useDispatch } from "react-redux";

const MenuWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: ${(props) => (props.showMenu ? "0" : "-100%")};
  background-color: ${(props) => props.backgroundColor};
  padding-top: ${(props) => props.paddingTop};
  box-sizing: border-box;
  overflow: hidden;
`;

const TabButton = styled(Button)`
  position: relative;
  left: calc(50vw - ${(props) => props.width} / 2);
  margin-bottom: ${(props) => props.marginBottom};
`;

const ActiveTabButton = styled(TabButton)`
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: ${(props) => props.backgroundColor};
  }
`;

const Menu = (props) => {
  const componentIDs = useSelector(
    (state) => state.build.components.allComponentIds
  );
  const component = useSelector(
    (state) => state.build.components.componentsByIds
  );
  const showMenu = useSelector((state) => state.build.styleEditorUI.showMenu);
  const view = useSelector((state) => state.build.styleEditorUI.view);
  const dispatch = useDispatch();

  const { wrapper, tabButton, activeTabButton } = props;

  return (
    <MenuWrapper {...wrapper} showMenu={showMenu}>
      {componentIDs.map((id) =>
        id === view ? (
          <ActiveTabButton {...tabButton} {...activeTabButton} key={id}>
            {component[id].type}
          </ActiveTabButton>
        ) : (
          <TabButton
            {...tabButton}
            key={id}
            onClick={() => {
              dispatch(buildActions.styleEditorShowComponent(id));
            }}
          >
            {component[id].type}
          </TabButton>
        )
      )}
    </MenuWrapper>
  );
};

export default Menu;
