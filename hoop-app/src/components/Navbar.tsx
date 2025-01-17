import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff", // White background
        color: "#000", // Black text color
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between", // Space between logo and links
          alignItems: "center", // Align items vertically
          padding: "10px 40px", // Padding for spacing
        }}
      >
        {/* Left: Logo Image */}
        <img
          src="https://cdn.vectorstock.com/i/500p/74/26/basketball-ball-icon-vector-52387426.jpg"
          alt="Basketball Logo"
          style={{
            height: "50px", // Adjust image size
            width: "50px",
            objectFit: "contain",
          }}
        />

        {/* Right: Navigation Links */}
        <Box sx={{ display: "flex", gap: "30px" }}>
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