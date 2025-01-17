import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff", // White background
        color: "#000", // Black text color
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        width: "100%", // Full-width navbar
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between", // Space between logo and links
          alignItems: "center",
          padding: "0 20px", // Horizontal padding for inner content
          width: "100%",
        }}
      >
        {/* Left: Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Hoop
        </Typography>

        {/* Right: Navigation Links */}
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button
            href="#map"
            sx={{
              color: "#000", // Black text
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" }, // Subtle hover
            }}
          >
            Map
          </Button>
          <Button
            href="#create-session"
            sx={{
              color: "#000",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
            }}
          >
            Create Session
          </Button>
          <Button
            href="#join-session"
            sx={{
              color: "#000",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
            }}
          >
            Join Session
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;