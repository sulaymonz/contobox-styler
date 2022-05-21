import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { getSelectorByType } from "../../common/helpers";
import * as styles from "../Build.module.scss";
import { useSelector } from "react-redux";

const LayoutStep = () => {
  const view = useSelector((state) => state.build.componentTypesStepView);
  const component = useSelector(
    (state) => state.build.components.componentsByIds
  );

  return (
    <Container className={styles.frame} maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Select a Style Preset for each of your Component
      </Typography>
      {getSelectorByType(component[view].type)}
    </Container>
  );
};

export default LayoutStep;
