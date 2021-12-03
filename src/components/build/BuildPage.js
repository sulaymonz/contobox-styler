import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LayoutSelector from "./LayoutSelector";
import MobileSelector from "./MobileSelector";
import MobileMenuSelector from "./MobileMenuSelector";
import DesktopSelector from "./DesktopSelector";
import * as styles from "./Build.module.scss";
import { useSelector } from "react-redux";

const BuildPage = () => {
  const view = useSelector((state) => state.build.view);
  return (
    <Box className={styles.frameWrapper}>
      <Container className={styles.frame} maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Let's generate some styles for your Contobox
        </Typography>
        {view === "LayoutSelector" && <LayoutSelector />}
        {view === "MobileSelector" && <MobileSelector />}
        {view === "MobileMenuSelector" && <MobileMenuSelector />}
        {view === "DesktopSelector" && <DesktopSelector />}
      </Container>
    </Box>
  );
};

export default BuildPage;
