import React from "react";
import * as styles from "./StyleEditor.module.scss";
import Iframe from "./Iframe";
import Layout from "./Layout";
import Box from "@mui/material/Box";

const Preview = () => {
  return (
    <Box className={styles.preview}>
      <Iframe width="270" height="440">
        <Layout />
      </Iframe>
    </Box>
  );
};

export default Preview;
