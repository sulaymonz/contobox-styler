import React from "react";
import Box from "@mui/material/Box";
import LayoutStep from "./LayoutStep/LayoutStep";
import ComponentsStep from "./ComponentsStep/ComponentsStep";
import ComponentTypesStep from "./ComponentTypesStep/ComponentTypesStep";
import * as styles from "./Build.module.scss";
import { useSelector } from "react-redux";
import { getEditorByType } from "../common/helpers";

const BuildPage = () => {
  const { step, layoutType } = useSelector((state) => state.build);
  return (
    <Box className={styles.frameWrapper}>
      {step === 1 && <LayoutStep />}
      {step === 2 && <ComponentsStep />}
      {step === 3 && <ComponentTypesStep />}
      {step === 4 && getEditorByType(layoutType)}
    </Box>
  );
};

export default BuildPage;
