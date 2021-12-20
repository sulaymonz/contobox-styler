import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PhotoGallerySelector from "./PhotoGallerySelector";
import * as styles from "../Build.module.scss";
import { useSelector } from "react-redux";

const LayoutStep = () => {
  const view = useSelector((state) => state.build.componentTypesStepView);
  return (
    <Container className={styles.frame} maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Select a Style Preset for each of your Component
      </Typography>
      {view.includes("Photo Gallery") && <PhotoGallerySelector />}
    </Container>
  );
};

export default LayoutStep;
