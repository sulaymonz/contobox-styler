import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
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
  const [showCode, setShowCode] = useState(false);
  const { layout } = useSelector((state) => state);
  const layoutProps = stylesToCSS(layout);

  return (
    <Grid container>
      <Grid item xs={9} className={styles.section}>
        <DesktopLayout {...layoutProps} />
        <Box className={styles.sidebar} style={showCode ? { right: "0" } : {}}>
          <AceEditor
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
        </Box>
        <Box className={styles.codeButton}>
          {showCode ? (
            <CodeOffIcon
              onClick={() => {
                setShowCode(false);
              }}
            />
          ) : (
            <CodeIcon
              onClick={() => {
                setShowCode(true);
              }}
            />
          )}
        </Box>
      </Grid>
      <Grid item xs={3} className={styles.section}>
        <Inputs />
      </Grid>
    </Grid>
  );
};

export default DesktopStyleEditor;
