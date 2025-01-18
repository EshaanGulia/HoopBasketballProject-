import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

const UserProfileModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [preferredCourt, setPreferredCourt] = useState<string>("Indoor");

  // Load saved profile from localStorage
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPreferredCourt = localStorage.getItem("preferredCourt");

    if (savedUsername) setUsername(savedUsername);
    if (savedPreferredCourt) setPreferredCourt(savedPreferredCourt);
  }, []);

  // Save profile settings to localStorage
  const saveProfile = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("preferredCourt", preferredCourt);
    alert("Profile saved!");
    setOpen(false); // Close the modal
  };

  return (
    <Box
      sx={{
        position: "absolute", // Positioned relative to the page layout
        top: "100px", // Lowered by increasing the top value
        left: "20px", // Aligned to the left
      }}
    >
      {/* Button to Open Modal */}
      <Button
        onClick={() => setOpen(true)}
        sx={{
          backgroundColor: "#f5f5f5",
          color: "#000",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        Create or Sign In
      </Button>

      {/* Modal for Profile Creation */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              marginBottom: "20px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Create Profile
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: "15px" }}
          />
          <Select
            value={preferredCourt}
            onChange={(e) => setPreferredCourt(e.target.value)}
            fullWidth
            displayEmpty
            sx={{ marginBottom: "15px" }}
          >
            <MenuItem value="Indoor">Indoor</MenuItem>
            <MenuItem value="Outdoor">Outdoor</MenuItem>
          </Select>
          <Button
            variant="contained"
            fullWidth
            onClick={saveProfile}
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Save Profile
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default UserProfileModal;