import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow";
import { placeholderCSS } from "./placeholderCSS";
import * as styles from "./StyleEditor.module.scss";
import { useSelector, useDispatch } from "react-redux";
import * as buildActions from "../../../redux/actions/buildActions";
import Preview from "./Preview";

const StyleEditor = () => {
  const [tab, setTab] = useState(0);
  const fontSize = useSelector((state) => state.build.fontSize);
  const backgroundColor = useSelector((state) => state.build.backgroundColor);
  const dispatch = useDispatch();

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleFontSizeChange = (event) => {
    dispatch(buildActions.updateFontSize(event.target.value));
  };

  const handleBackgroundChange = (event) => {
    dispatch(buildActions.updateBackgroundColor(event.target.value));
  };

  return (
    <Grid container>
      <Grid item xs={4} className={styles.section}>
        <Typography variant="h6">Put the Finishing Touches</Typography>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          centered
          sx={{ mb: "1em" }}
        >
          <Tab label="Preview" />
          <Tab label="Stack" />
        </Tabs>
        <Preview />
      </Grid>
      <Grid item xs={4} className={styles.section}>
        <Stack spacing={2} className={styles.inputContainer}>
          <Typography variant="subtitle1">Photo Gallery</Typography>
          <TextField
            id="number-a"
            label="width"
            type="number"
            size="small"
            variant="standard"
            InputProps={{
              endAdornment: <InputAdornment position="end">vw</InputAdornment>,
            }}
          />
          <TextField
            id="number-b"
            label="height"
            type="number"
            size="small"
            variant="standard"
            InputProps={{
              endAdornment: <InputAdornment position="end">vh</InputAdornment>,
            }}
          />
          <TextField
            id="number-c"
            label="background-color"
            type="text"
            size="small"
            variant="standard"
            value={backgroundColor}
            onChange={handleBackgroundChange}
          />
          <TextField
            id="number-d"
            label="font-size"
            type="number"
            size="small"
            variant="standard"
            InputProps={{
              endAdornment: <InputAdornment position="end">vw</InputAdornment>,
            }}
            value={fontSize}
            onChange={handleFontSizeChange}
          />
          <TextField
            id="number-e"
            label="border"
            type="text"
            size="small"
            variant="standard"
          />
          <TextField
            id="number-f"
            label="z-index"
            type="number"
            size="small"
            variant="standard"
          />
        </Stack>
      </Grid>
      <Grid item xs={4} className={styles.section}>
        <AceEditor
          placeholder="Placeholder Text"
          mode="css"
          theme="tomorrow"
          name="blah2"
          height="calc(100vh - 68px)"
          width="100%"
          fontSize={14}
          showPrintMargin
          showGutter={false}
          highlightActiveLine
          value={placeholderCSS}
          readOnly
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: true,
            showLineNumbers: false,
            tabSize: 2,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default StyleEditor;
