import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import desktopImage from "../../images/desktop.png";
import mobileImage from "../../images/mobile.png";
import nonExpandableImage from "../../images/nonExpandable.png";
import * as types from "../../redux/actions/actionTypes";
import { useSelector, useDispatch } from "react-redux";

const BuildPage = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.build.currentStep);
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        top: 0,
        width: "100vw",
        flexDirection: "column",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <Container component="main" sx={{ mt: "15vh", mb: 2 }} maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Let's generate some styles for your Contobox
        </Typography>
        <Typography gutterBottom>Choose your Layout</Typography>
        <Box
          sx={{
            display: "flex",
            mt: 1,
            justifyContent: "space-between",
            "& > :not(style)": {
              height: "46vh",
              textAlign: "center",
              // textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              cursor: "pointer",
              "& img": {
                filter: "drop-shadow(0 0 1px rgba(0,0,0,.4))",
                transition: "all .2s",
              },
              "&:hover img": {
                filter: "drop-shadow(0 0 3px rgba(0,0,0,.4))",
              },
            },
          }}
        >
          <Box sx={{ width: "31%" }}>
            <img src={desktopImage} width="100%" alt="Desktop" />
            <Typography sx={{ mt: 2 }}>Desktop</Typography>
          </Box>
          <Box sx={{ width: "21%" }}>
            <img src={mobileImage} width="100%" alt="Mobile" />
            <Typography sx={{ mt: 2 }}>Mobile</Typography>
          </Box>
          <Box
            sx={{ width: "40%" }}
            onClick={() => dispatch({ type: types.NEXT_BUILD_STEP })}
          >
            <img src={nonExpandableImage} width="100%" alt="Non-expandable" />
            <Typography sx={{ mt: 2 }}>Non-expandable {step}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BuildPage;
