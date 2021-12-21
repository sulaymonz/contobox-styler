import React from "react";
import * as styles from "./StyleEditor.module.scss";
import Iframe from "./Iframe";
import PreviewContent from "./PreviewContent";
import Box from "@mui/material/Box";

const Preview = () => {
  return (
    <Box className={styles.preview}>
      <Iframe width="270" height="440">
        <PreviewContent />
      </Iframe>
    </Box>
  );
};

export default Preview;
