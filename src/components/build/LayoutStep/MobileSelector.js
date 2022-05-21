import React from "react";
import Typography from "@mui/material/Typography";
import Carousel from "../Carousel";
import Box from "@mui/material/Box";
import styles from "../Build.module.scss";
import * as buildActions from "../../../redux/actions/buildActions";
import mobilePresets from "../Presets/mobilePresets";
import { useDispatch } from "react-redux";

const MobileSelector = () => {
  const dispatch = useDispatch();
  const carouselSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select Mobile Layout Style Preset
      </Typography>
      <Carousel settings={carouselSettings}>
        {mobilePresets.map((preset) => (
          <div
            key={preset.name}
            className={styles.slide}
            onClick={() =>
              dispatch(
                buildActions.layoutStylePresetSelected({
                  view: "MobileMenuSelector",
                  presetName: preset.name,
                  preset: preset.styles,
                })
              )
            }
          >
            {preset.image}
            <Typography textAlign="center">{preset.name}</Typography>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default MobileSelector;
