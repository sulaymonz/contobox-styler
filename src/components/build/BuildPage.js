import React from "react";
import Box from "@mui/material/Box";
import LayoutStep from "./LayoutStep/LayoutStep";
import ComponentsStep from "./ComponentsStep/ComponentsStep";
import StyleEditor from "./StyleEditor/StyleEditor";
import * as styles from "./Build.module.scss";
import { useSelector } from "react-redux";

const BuildPage = () => {
  const step = useSelector((state) => state.build.step);
  return (
    <Box className={styles.frameWrapper}>
      {step === 1 && <LayoutStep />}
      {step === 2 && <ComponentsStep />}
      {step === 3 && <StyleEditor />}
    </Box>
  );
};

export default BuildPage;
