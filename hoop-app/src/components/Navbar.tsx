import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="sticky"
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
          alignItems: "center", // Vertically align items
          padding: "10px 40px",
        }}
      >
        {/* Left: Logo */}
        <img
          src="https://cdn.vectorstock.com/i/500p/74/26/basketball-ball-icon-vector-52387426.jpg"
          alt="Basketball Logo"
          style={{
            height: "50px",
            width: "50px",
            objectFit: "contain",
          }}
        />

        {/* Right: Navigation Links */}
        <Box sx={{ display: "flex", gap: "30px" }}>
          <Button
            component={Link}
            to="map-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            sx={{
              color: "#000",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
            }}
          >
            Map
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;