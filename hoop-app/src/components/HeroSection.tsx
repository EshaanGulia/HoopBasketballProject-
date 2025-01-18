import React, { useState } from "react";
import { Box } from "@mui/material";

const HeroSection: React.FC = () => {
  const images = [
    "https://utdcomets.com/images/2024/8/5/GYMfull_az3Dl.jpg", // Image 1
    "https://urec.utdallas.edu/files/2023/09/all-fields.jpg",   // Image 2
    "https://www.andresconstruction.com/portfolio/images/northside-2/northside-2-4.jpg", // Image 3
  ];

  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    if (expandedImage === image) {
      setExpandedImage(null); // Collapse the image if it's already expanded
    } else {
      setExpandedImage(image); // Expand the clicked image
    }
  };

  return (
    <div
      style={{
        display: "flex", // Flexbox for layout
        justifyContent: "space-between", // Space between left and right
        alignItems: "center", // Vertically center content
        height: "100vh", // Full viewport height for initial page
        backgroundColor: "#fff", // White background
        padding: "0 40px", // Add horizontal padding
        position: "relative", // For positioning expanded images
      }}
    >
      {/* Left: Hoop Logo */}
      <Box>
        <h1
          style={{
            fontSize: "8rem", // Large font size
            color: "#000", // Black text
            margin: 0, // Remove margin
            fontWeight: "bold", // Bold font weight
          }}
        >
          Hoop
        </h1>
      </Box>

      {/* Right: Collage */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Increased image size
          gap: "15px", // Space between images
          maxWidth: "700px", // Collage width
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(image)}
            style={{
              overflow: "hidden", // Ensures zoom effect stays within bounds
              borderRadius: "8px", // Rounded corners
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Subtle shadow
              cursor: "pointer", // Pointer cursor on hover
              transition: "all 0.3s ease", // Smooth expansion effect
              transform: expandedImage === image ? "scale(1.3)" : "scale(1)", // Slightly increase size
              zIndex: expandedImage === image ? 10 : 1, // Bring expanded image to the front
              position: "relative", // Maintain layout without fixed positioning
              width: "100%", // Maintain container width
              height: expandedImage === image ? "250px" : "200px", // Slightly taller on expand
            }}
          >
            <img
              src={image}
              alt={`Court ${index + 1}`}
              style={{
                width: "100%", // Full width of container
                height: "100%", // Full height of container
                objectFit: "cover", // Crop to fit container
                transition: "transform 0.3s ease", // Smooth transition for image itself
              }}
            />
          </div>
        ))}
      </Box>
    </div>
  );
};

export default HeroSection;