import React from "react";
import Typography from "@mui/material/Typography";
import Carousel from "../Carousel";
import Box from "@mui/material/Box";
import styles from "../Build.module.scss";
import * as buildActions from "../../../redux/actions/buildActions";
import mobileMenuPresets from "../Presets/mobileMenuPresets";
import { useDispatch } from "react-redux";

const MobileMenuSelector = () => {
  const dispatch = useDispatch();
  const carouselSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select Mobile Menu Style Preset
      </Typography>
      <Carousel settings={carouselSettings}>
        {mobileMenuPresets.map((preset) => (
          <div
            key={preset.name}
            className={styles.slide}
            onClick={() =>
              dispatch(
                buildActions.menuStylePresetSelected({
                  step: 2,
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

export default MobileMenuSelector;
