import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Inputs from "./Inputs";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow";
import "./AceEditor.scss";
import * as styles from "./StyleEditor.module.scss";
import DesktopLayout from "./DesktopLayout";
import GenerateCSS from "../GenerateCSS/GenerateCSS";
import { useSelector } from "react-redux";
import { stylesToCSS } from "../../../utils/styles";

const DesktopStyleEditor = () => {
  const { layout, menu, photoGallery, videoGallery, storeLocator, custom } =
    useSelector((state) => state);

  const layoutProps = stylesToCSS(layout);
  /*const editorEl = useRef(null);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    editorEl.current.editor.gotoLine(Number.POSITIVE_INFINITY, 0, true);
  }, [layout, menu, photoGallery, videoGallery, storeLocator, custom]);*/

  return (
    <Grid container>
      <Grid item xs={9} className={styles.section}>
        <DesktopLayout {...layoutProps} />
      </Grid>
      <Grid item xs={3} className={styles.section}>
        <Inputs />
      </Grid>
      {/*<Grid item xs={4} className={styles.section}>
        <AceEditor
          ref={editorEl}
          placeholder="Placeholder Text"
          mode="css"
          theme="tomorrow"
          name="blah2"
          height="calc(100vh - 68px)"
          width="100%"
          fontSize={13}
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
      </Grid>*/}
    </Grid>
  );
};

export default DesktopStyleEditor;
