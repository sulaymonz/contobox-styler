import React from "react";
import AppBar from "@mui/material/AppBar";
import logo from "../../logo.svg";

const Logo = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "200px",
        p: "20px",
        left: "0px",
        bgcolor: "transparent",
        boxShadow: "none",
      }}
    >
      <img src={logo} width="100%" className="App-logo" alt="コントボックス" />
    </AppBar>
  );
};

export default Logo;
