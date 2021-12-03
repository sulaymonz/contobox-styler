import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import desktopImage from "../../images/desktop.png";
import mobileImage from "../../images/mobile.png";
import * as buildActions from "../../redux/actions/buildActions";
import nonExpandableImage from "../../images/nonExpandable.png";
import { useDispatch } from "react-redux";
import * as styles from "./Build.module.scss";

const LayoutSelector = () => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select your Contobox Layout
      </Typography>
      <Box className={styles.cardContainer}>
        <Box
          className={styles.card1}
          onClick={() =>
            dispatch(buildActions.updateBuildView("DesktopSelector"))
          }
        >
          <img src={desktopImage} width="100%" alt="Desktop" />
          <Typography>Desktop</Typography>
        </Box>
        <Box
          className={styles.card2}
          onClick={() =>
            dispatch(buildActions.updateBuildView("MobileSelector"))
          }
        >
          <img src={mobileImage} width="100%" alt="Mobile" />
          <Typography>Mobile</Typography>
        </Box>
        <Box className={styles.card3}>
          <img src={nonExpandableImage} width="100%" alt="Non-expandable" />
          <Typography>Non-Expandable</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutSelector;
