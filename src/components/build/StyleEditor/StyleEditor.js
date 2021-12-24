import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Prev from "@mui/icons-material/ArrowBackIosNew";
import Next from "@mui/icons-material/ArrowForwardIos";
import Inputs from "./Inputs";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow";
import "./AceEditor.scss";
import * as styles from "./StyleEditor.module.scss";
import Preview from "./Preview";
import GenerateCSS from "../GenerateCSS/GenerateCSS";
import * as buildActions from "../../../redux/actions/buildActions";
import { useDispatch } from "react-redux";

const StyleEditor = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const nextComponent = () => {
    dispatch(buildActions.styleEditorShowNextComponent());
  };

  const prevComponent = () => {
    dispatch(buildActions.styleEditorShowPrevComponent());
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
        <Box className={styles.flexCenter}>
          <Prev className={styles.arrow} onClick={prevComponent} />
          <Preview />
          <Next className={styles.arrow} onClick={nextComponent} />
        </Box>
      </Grid>
      <Grid item xs={4} className={styles.section}>
        <Inputs />
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
          showGutter={true}
          highlightActiveLine
          value={GenerateCSS()}
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
