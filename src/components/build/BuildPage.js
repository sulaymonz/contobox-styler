import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Carousel from "./Carousel";
import Paper from "@mui/material/Paper";
import desktopImage from "../../images/desktop.png";
import mobileImage from "../../images/mobile.png";
import nonExpandableImage from "../../images/nonExpandable.png";

const BuildPage = () => {
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
                filter: "drop-shadow(0 0 1px rgba(0,0,0,.3))",
                transition: "all .2s",
              },
              "&:hover img": {
                filter: "drop-shadow(0 0 2px rgba(0,0,0,.3))",
              },
            },
          }}
        >
          <Box sx={{ width: "30%" }}>
            <img src={desktopImage} width="100%" alt="Desktop" />
            <Typography sx={{ mt: 2 }}>Desktop</Typography>
          </Box>
          <Box sx={{ width: "20%" }}>
            <img src={mobileImage} width="100%" alt="Mobile" />
            <Typography sx={{ mt: 2 }}>Mobile</Typography>
          </Box>
          <Box sx={{ width: "35%" }}>
            <img src={nonExpandableImage} width="100%" alt="Non-expandable" />
            <Typography sx={{ mt: 2 }}>Non-expandable</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BuildPage;
