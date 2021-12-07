import React from "react";
import Chip from "@mui/material/Chip";
import * as buildActions from "../../../redux/actions/buildActions";
import { useSelector, useDispatch } from "react-redux";

const ComponentChip = (props) => {
  const dispatch = useDispatch();
  const components = useSelector((state) => state.build.components);
  return (
    <Chip
      {...props}
      onClick={() => {
        const title = `Component #${components.length + 1}: ${props.label}`;
        dispatch(
          buildActions.addComponentToStack({
            id: title,
            content: title,
          })
        );
      }}
    />
  );
};

export default ComponentChip;
