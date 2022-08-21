import React from "react";
import * as styles from "../Build.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DesktopLayoutPreview from "./DesktopLayoutPreview";
import * as layoutActions from "../../../redux/actions/layoutStyleActions";
import * as buildActions from "../../../redux/actions/buildActions";
import { useSelector, useDispatch } from "react-redux";

const options = {
  sx: {
    padding: "6px 9px",
    color: "#ff6f6f",
    "&.Mui-checked": {
      color: "#ff6f6f",
    },
  },
};

const DesktopLayoutBuilder = () => {
  const layout = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  const onToggleFeature = (feature) => {
    dispatch(layoutActions.toggleLayoutFeature(feature));
  };

  const handleClickNext = () => {
    dispatch(buildActions.nextBuildStep());
  };

  return (
    <Container className={styles.frame} maxWidth="md">
      <Typography variant="h4">Build your Desktop Layout</Typography>
      <Grid container spacing={2} className={styles.componentGrid}>
        <Grid item xs={4}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  {...options}
                  checked={layout.hasOwnProperty("messageBar")}
                  onChange={() => onToggleFeature("messageBar")}
                />
              }
              label="Message bar"
              sx={{ userSelect: "none" }}
            />
            <FormControlLabel
              disabled={!layout.hasOwnProperty("messageBar")}
              control={
                <Checkbox
                  size="small"
                  {...options}
                  checked={
                    layout.hasOwnProperty("messageBar") &&
                    layout.hasOwnProperty("messageIcon")
                  }
                  onChange={() => onToggleFeature("messageIcon")}
                />
              }
              label="Message icon"
              sx={{ userSelect: "none", marginLeft: "15px" }}
            />
            <FormControlLabel
              disabled={!layout.hasOwnProperty("messageBar")}
              control={
                <Checkbox
                  size="small"
                  {...options}
                  checked={
                    layout.hasOwnProperty("messageBar") &&
                    layout.hasOwnProperty("messageSeparator")
                  }
                  onChange={() => onToggleFeature("messageSeparator")}
                />
              }
              label="Message separator"
              sx={{ userSelect: "none", marginLeft: "15px" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  {...options}
                  checked={layout.hasOwnProperty("sidebar")}
                  onChange={() => onToggleFeature("sidebar")}
                />
              }
              label="Sidebar & Social icons"
              sx={{ userSelect: "none", marginTop: "10px" }}
            />
            <FormControlLabel
              disabled={!layout.hasOwnProperty("sidebar")}
              control={
                <Checkbox
                  size="small"
                  {...options}
                  checked={
                    layout.hasOwnProperty("sidebar") &&
                    layout.hasOwnProperty("socialHeader")
                  }
                  onChange={() => onToggleFeature("socialHeader")}
                />
              }
              label="Social header"
              sx={{ userSelect: "none", marginLeft: "15px" }}
            />
            <FormControlLabel
              disabled={!layout.hasOwnProperty("sidebar")}
              control={
                <Checkbox
                  size="small"
                  {...options}
                  checked={
                    layout.hasOwnProperty("sidebar") &&
                    layout.hasOwnProperty("socialSeparator")
                  }
                  onChange={() => onToggleFeature("socialSeparator")}
                />
              }
              label="Social separator"
              sx={{ userSelect: "none", marginLeft: "15px" }}
            />
            <FormControlLabel
              disabled={!layout.hasOwnProperty("sidebar")}
              control={
                <Checkbox
                  size="small"
                  {...options}
                  checked={
                    layout.hasOwnProperty("sidebar") &&
                    layout.hasOwnProperty("facebook")
                  }
                  onChange={() => onToggleFeature("facebook")}
                />
              }
              label="Facebook"
              sx={{ userSelect: "none", marginLeft: "15px" }}
            />
            <FormControlLabel
              disabled={!layout.hasOwnProperty("sidebar")}
              control={
                <Checkbox
                  size="small"
                  {...options}
                  checked={
                    layout.hasOwnProperty("sidebar") &&
                    layout.hasOwnProperty("twitter")
                  }
                  onChange={() => onToggleFeature("twitter")}
                />
              }
              label="Twitter"
              sx={{ userSelect: "none", marginLeft: "15px" }}
            />
            <FormControlLabel
              disabled={!layout.hasOwnProperty("sidebar")}
              control={
                <Checkbox
                  size="small"
                  {...options}
                  checked={
                    layout.hasOwnProperty("sidebar") &&
                    layout.hasOwnProperty("instagram")
                  }
                  onChange={() => onToggleFeature("instagram")}
                />
              }
              label="Instagram"
              sx={{ userSelect: "none", marginLeft: "15px" }}
            />
            <FormControlLabel
              disabled={!layout.hasOwnProperty("sidebar")}
              control={
                <Checkbox
                  size="small"
                  {...options}
                  checked={
                    layout.hasOwnProperty("sidebar") &&
                    layout.hasOwnProperty("youtube")
                  }
                  onChange={() => onToggleFeature("youtube")}
                />
              }
              label="Youtube"
              sx={{ userSelect: "none", marginLeft: "15px" }}
            />
            <FormControlLabel
              disabled={!layout.hasOwnProperty("sidebar")}
              control={
                <Checkbox
                  size="small"
                  {...options}
                  checked={
                    layout.hasOwnProperty("sidebar") &&
                    layout.hasOwnProperty("pinterest")
                  }
                  onChange={() => onToggleFeature("pinterest")}
                />
              }
              label="Pinterest"
              sx={{ userSelect: "none", marginLeft: "15px" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  {...options}
                  checked={layout.hasOwnProperty("lockup")}
                  onChange={() => onToggleFeature("lockup")}
                />
              }
              label="Lockup"
              sx={{ userSelect: "none", marginTop: "10px" }}
            />
          </FormGroup>
        </Grid>
        <Grid item xs={8}>
          <DesktopLayoutPreview />
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="text" onClick={handleClickNext}>
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DesktopLayoutBuilder;
