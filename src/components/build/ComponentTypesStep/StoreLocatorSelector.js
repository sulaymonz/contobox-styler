import React from "react";
import Typography from "@mui/material/Typography";
import Carousel from "../Carousel";
import Box from "@mui/material/Box";
import styles from "../Build.module.scss";
import * as buildActions from "../../../redux/actions/buildActions";
import storeLocatorPresets from "../Presets/storeLocatorPresets";
import { useSelector, useDispatch } from "react-redux";

const StoreLocatorSelector = () => {
  const componentID = useSelector(
    (state) => state.build.componentTypesStepView
  );
  const componentsByIds = useSelector(
    (state) => state.build.components.componentsByIds
  );
  const allComponentIds = useSelector(
    (state) => state.build.components.allComponentIds
  );
  const component = componentsByIds[componentID];
  const dispatch = useDispatch();
  const carouselSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const handleTypeSelect = (preset) => {
    const componentIndex = allComponentIds.indexOf(componentID);
    const isLast = componentIndex === allComponentIds.length - 1;
    dispatch(
      buildActions.componentStylePresetSelected({
        step: isLast ? 4 : 3,
        view: isLast ? "" : allComponentIds[componentIndex + 1],
        componentType: component.type,
        componentID: component.id,
        preset,
      })
    );
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {component.id}
      </Typography>
      <Carousel settings={carouselSettings}>
        {storeLocatorPresets.map((preset) => (
          <div
            key={preset.name}
            className={styles.slide}
            onClick={() => {
              handleTypeSelect(preset.name);
            }}
          >
            {preset.image}
            <Typography textAlign="center">{preset.name}</Typography>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default StoreLocatorSelector;
