import React from "react";
import * as styles from "./StyleEditor.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import * as videoGalleryActions from "../../../redux/actions/videoGalleryActions";
import * as buildActions from "../../../redux/actions/buildActions";

const VideoGalleryInputs = () => {
  const view = useSelector((state) => state.build.styleEditorUI.view);
  const videoGallery = useSelector((state) => state.videoGallery[view]);
  const isVideoGalleryView = view.includes("Video Gallery");
  const galleryStyles = isVideoGalleryView ? videoGallery.styles : {};
  const customClass = useSelector(
    (state) => state.build.components.componentsByIds[view].customClass
  );

  const dispatch = useDispatch();

  const handleChange = (style) => {
    dispatch(videoGalleryActions.updateVideoGalleryStyle(style));
  };

  const handleClassChange = (customClass) => {
    dispatch(
      buildActions.updateComponentCustomClass({
        id: view,
        customClass: customClass,
      })
    );
  };

  return (
    <Stack spacing={2} className={styles.inputContainer}>
      <Box className={styles.paddingLeft}>
        <Typography variant="h6">{view}</Typography>
        <Typography variant="subtitle2">{videoGallery.preset}</Typography>
        <TextField
          style={{ backgroundColor: "#ffffff" }}
          id="customClass"
          key="customClass"
          label="Custom CSS class"
          type="text"
          value={customClass}
          size="small"
          variant="standard"
          onChange={(event) => {
            handleClassChange(event.target.value);
          }}
        />
      </Box>
      {Object.entries(galleryStyles).map(([elKey, elValue], i) => (
        <Stack
          key={elKey}
          spacing={2}
          className={`${i % 2 === 1 ? styles.grey : ""} ${styles.padded}`}
        >
          <Typography className={styles.elementTitle}>{elKey}</Typography>
          {Object.entries(elValue).map(([styleKey, styleValue]) => (
            <TextField
              style={{ backgroundColor: "#ffffff" }}
              id={styleKey}
              label={styleKey}
              key={styleKey}
              type={styleValue.unit ? "number" : "text"}
              value={styleValue.value}
              onChange={(event) => {
                handleChange({
                  componentID: view,
                  target: elKey,
                  name: styleKey,
                  value: event.target.value,
                  unit: styleValue.unit,
                });
              }}
              size="small"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {styleValue.unit}
                  </InputAdornment>
                ),
              }}
            />
          ))}
          <br />
        </Stack>
      ))}
    </Stack>
  );
};

export default VideoGalleryInputs;
