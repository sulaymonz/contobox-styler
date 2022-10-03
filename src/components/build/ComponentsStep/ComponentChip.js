import React from "react";
import Chip from "@mui/material/Chip";
import * as buildActions from "../../../redux/actions/buildActions";
import { useSelector, useDispatch } from "react-redux";
import "./Chip.scss";

const ComponentChip = (props) => {
  const dispatch = useDispatch();
  const components = useSelector(
    (state) => state.build.components.allComponentIds
  );
  return (
    <Chip
      {...props}
      onClick={() => {
        if (props.label !== "Shoppable") {
          const title = `Component #${components.length + 1}: ${props.label}`;
          dispatch(
            buildActions.addComponentToStack({
              id: title,
              type: props.label,
              customClass: "",
            })
          );
        }
      }}
    />
  );
};

export default ComponentChip;
