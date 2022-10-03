import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import LayoutStep from "./LayoutStep/LayoutStep";
import ComponentsStep from "./ComponentsStep/ComponentsStep";
import ComponentTypesStep from "./ComponentTypesStep/ComponentTypesStep";
import * as styles from "./Build.module.scss";
import { useSelector } from "react-redux";
import { getEditorByType } from "../common/helpers";
import NET from "vanta/dist/vanta.net.min";

const BuildPage = () => {
  const { step, layoutType } = useSelector((state) => state.build);

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xfec6c6,
          backgroundColor: 0xffffff,
          points: 6.0,
          maxDistance: 30.0,
          spacing: 15.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Box className={styles.frameWrapper} ref={vantaRef}>
      {step === 1 && <LayoutStep />}
      {step === 2 && <ComponentsStep />}
      {step === 3 && <ComponentTypesStep />}
      {step === 4 && getEditorByType(layoutType)}
    </Box>
  );
};

export default BuildPage;
