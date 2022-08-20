import React from "react";
import * as styles from "./StyleEditor.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import * as layoutActions from "../../../redux/actions/layoutStyleActions";
import { camelCaseToNormal } from "../../../utils/camelCaseToNormal";

const LayoutInputs = () => {
  const layout = useSelector((state) => state.layout);
  const { layoutPreset: preset, layoutType } = useSelector(
    (state) => state.build
  );

  const dispatch = useDispatch();

  const handleChange = (style) => {
    dispatch(layoutActions.updateLayoutStyle(style));
  };

  return (
    <Stack spacing={2} className={styles.inputContainer}>
      <Box className={styles.paddingLeft}>
        <Typography variant="h6">Layout</Typography>
        {layoutType !== "desktop" && (
          <Typography variant="subtitle2">{preset}</Typography>
        )}
      </Box>
      {Object.entries(layout)
        .filter(([elKey, elValue], i) => Object.keys(elValue).length)
        .map(([elKey, elValue], i) => (
          <Stack
            key={elKey}
            spacing={2}
            className={`${i % 2 === 1 ? styles.grey : ""} ${styles.padded}`}
          >
            <Typography className={styles.elementTitle}>
              {camelCaseToNormal(elKey)}
            </Typography>
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

export default LayoutInputs;
