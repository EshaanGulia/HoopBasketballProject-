import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const NavBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://cdn.vectorstock.com/i/500p/74/26/basketball-ball-icon-vector-52387426.jpg"
            alt="Hoop Logo"
            style={{
              height: "50px",
              marginRight: "10px",
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Hoop
          </Typography>
        </Box>
        {/* Add Other Navbar Items Here */}
        <Typography variant="body1">Map</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;