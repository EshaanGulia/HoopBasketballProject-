import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const CreateSession: React.FC = () => {
  return (
    <Box
      id="create-session"
      sx={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "20px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        Create a Session
      </Typography>
      <TextField label="Session Name" fullWidth sx={{ marginBottom: "15px" }} />
      <TextField label="Location" fullWidth sx={{ marginBottom: "15px" }} />
      <TextField label="Time" type="time" fullWidth sx={{ marginBottom: "15px" }} />
      <Button variant="contained" color="primary" fullWidth>
        Create Session
      </Button>
    </Box>
  );
};

export default CreateSession;