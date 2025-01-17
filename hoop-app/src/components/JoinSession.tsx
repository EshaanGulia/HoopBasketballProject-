import React from "react";
import { Box, Typography, Button } from "@mui/material";

const JoinSession: React.FC = () => {
  const sessions = [
    { id: 1, name: "Morning Game", location: "UTD Rec Center", time: "9:00 AM" },
    { id: 2, name: "Evening Game", location: "Outdoor Court A", time: "5:00 PM" },
  ];

  return (
    <Box
      id="join-session"
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
        Join a Session
      </Typography>
      {sessions.map((session) => (
        <Box
          key={session.id}
          sx={{
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6">{session.name}</Typography>
          <Typography>Location: {session.location}</Typography>
          <Typography>Time: {session.time}</Typography>
          <Button variant="outlined" sx={{ marginTop: "10px" }}>
            Join
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default JoinSession;