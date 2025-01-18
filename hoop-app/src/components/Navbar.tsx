import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-scroll";
import UserProfileModal from "./UserProfile";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow
        zIndex: 1000,
        height: "64px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        {/* Left: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://cdn.vectorstock.com/i/500p/74/26/basketball-ball-icon-vector-52387426.jpg"
            alt="Basketball Logo"
            style={{
              height: "40px",
              cursor: "pointer",
            }}
          />
        </Box>

        {/* Center: Navigation Links */}
        <Box
          sx={{
            display: "flex",
            gap: "30px", // Increase gap for better alignment
          }}
        >
          <Link to="hero-section" smooth={true} duration={500} offset={-64}>
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="map-section" smooth={true} duration={500} offset={-64}>
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Map
            </Button>
          </Link>
          <Link to="session-section" smooth={true} duration={500} offset={-64}>
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                color: "#000",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Sessions
            </Button>
          </Link>
        </Box>

        {/* Right: Sign In/Create Profile */}
        <Box>
          <UserProfileModal />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;