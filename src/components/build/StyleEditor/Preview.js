import React from "react";
import * as styles from "./StyleEditor.module.scss";
import Iframe from "./Iframe";
import PreviewContent from "./PreviewContent";
import Box from "@mui/material/Box";
import Prev from "@mui/icons-material/ArrowBackIosNew";
import Next from "@mui/icons-material/ArrowForwardIos";
import * as buildActions from "../../../redux/actions/buildActions";
import { useDispatch, useSelector } from "react-redux";

const Preview = () => {
  const { view, allViews } = useSelector((state) => state.build.styleEditorUI);
  const viewIndex = allViews.indexOf(view);
  const dispatch = useDispatch();

  const nextComponent = () => {
    dispatch(buildActions.styleEditorShowNextComponent());
  };

  const prevComponent = () => {
    dispatch(buildActions.styleEditorShowPrevComponent());
  };
  return (
    <Box className={styles.flexCenter}>
      <Prev
        className={`${styles.arrow} ${viewIndex > 0 ? "" : styles.disabled}`}
        onClick={prevComponent}
      />
      <Box className={styles.preview}>
        <Iframe width="270" height="440">
          <PreviewContent />
        </Iframe>
      </Box>
      <Next
        className={`${styles.arrow} ${
          viewIndex < allViews.length - 1 ? "" : styles.disabled
        }`}
        onClick={nextComponent}
      />
    </Box>
  );
};

export default Preview;
