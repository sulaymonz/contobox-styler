import React from "react";
import * as styles from "./StyleEditor.module.scss";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import * as layoutActions from "../../../redux/actions/layoutStyleActions";

const Inputs = () => {
  const layout = useSelector((state) => state.layout);

  const dispatch = useDispatch();

  const handleFontSizeChange = (style) => {
    dispatch(layoutActions.updateLayoutStyle(style));
  };

  return (
    <Stack spacing={2} className={styles.inputContainer}>
      <Typography variant="h6" className={styles.componentTitle}>
        Layout
      </Typography>
      {Object.entries(layout).map(([elKey, elValue], i) => (
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
                handleFontSizeChange({
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

export default Inputs;
