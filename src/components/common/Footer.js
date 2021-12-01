import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

const pages = ["Build", "Quick Snippets", "About"];

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ bottom: 0, top: "auto", bgcolor: "#25283D" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
            © {new Date().getFullYear()} コントボックス v1.0 by{" "}
            <Link
              href="https://ourwork.contobox.com/"
              color="#ff6f6f"
              target="_blank"
            >
              Contobox
            </Link>{" "}
            developers
          </Typography>
          <Box sx={{ flexGrow: 0, display: "flex", mr: "30px" }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "#fff", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar
                alt="Shmontobox Developer"
                sx={{ bgcolor: "#fff", color: "#ff6f6f" }}
              >
                S
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
