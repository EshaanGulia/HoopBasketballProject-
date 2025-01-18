import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  const images = [
    {
      src: "https://utdcomets.com/images/2024/8/5/GYMfull_az3Dl.jpg",
      title: "UTD Basketball Court",
    },
    {
      src: "https://urec.utdallas.edu/files/2023/09/all-fields.jpg",
      title: "Outdoor Fields",
    },
    {
      src: "https://www.andresconstruction.com/portfolio/images/northside-2/northside-2-4.jpg",
      title: "Northside Basketball Court",
    },
  ];

  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => setRotation(window.scrollY / 10);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className={`hero-section ${darkMode ? "dark" : ""}`}>
        <Button
          onClick={() => setDarkMode(!darkMode)}
          sx={{
            position: "absolute",
            top: "20px",
            right: "20px",
            backgroundColor: darkMode ? "#000" : "#fff",
            color: darkMode ? "#fff" : "#000",
            textTransform: "none",
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>

        {/* Animated Hoop Logo */}
        <Box>
          <h1
            className="hero-logo"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          >
            Hoop
          </h1>
        </Box>
      </div>

      {/* Picture Section */}
      <div className="picture-section">
        <h2 className="section-title">Explore the Courts</h2>
        <Box className="hero-collage">
          {images.map((image, index) => (
            <div
              key={index}
              className="collage-item"
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <span className="image-text">{image.title}</span>
            </div>
          ))}
        </Box>
      </div>
    </>
  );
};

export default HeroSection;