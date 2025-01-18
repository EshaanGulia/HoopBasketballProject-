import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem, Select, FormControl, InputLabel, Card, CardContent } from "@mui/material";

interface Session {
  id: string;
  court: string;
  players: number;
  status: "In Progress" | "Open";
}

const SessionSection: React.FC = () => {
  const [sessionCode, setSessionCode] = useState("");
  const [isCreatingSession, setIsCreatingSession] = useState(false);
  const [players, setPlayers] = useState<number | "">("");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [sessions, setSessions] = useState<Session[]>([]);

  const handleJoinSession = () => {
    alert(`Joining session with code: ${sessionCode}`);
  };

  const handleCreateSessionSubmit = () => {
    if (players && selectedCourt) {
      const newSession: Session = {
        id: `${sessions.length + 1}`,
        court: selectedCourt,
        players: Number(players),
        status: "Open",
      };
      setSessions((prevSessions) => [...prevSessions, newSession]);
      alert(`Created a session with ${players} players at ${selectedCourt}`);
      setPlayers("");
      setSelectedCourt("");
      setIsCreatingSession(false);
    } else {
      alert("Please fill out all the fields to create a session!");
    }
  };

  const handleJoinExistingSession = (id: string) => {
    setSessions((prevSessions) =>
      prevSessions.map((session) =>
        session.id === id
          ? {
              ...session,
              players: session.players > 0 ? session.players - 1 : 0,
              status: session.players - 1 === 0 ? "In Progress" : "Open",
            }
          : session
      )
    );
  };

  return (
    <Box
      id="session-section"
      sx={{
        padding: "40px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#000",
          marginBottom: "20px",
        }}
      >
        {isCreatingSession ? "Create a Session" : "Join a Session"}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#333",
          marginBottom: "20px",
        }}
      >
        {isCreatingSession
          ? "Create a new basketball session at UTD!"
          : "Discover and join basketball sessions happening around UTD! Connect with players and compete."}
      </Typography>

      {!isCreatingSession ? (
        <>
          <TextField
            label="Enter Session Code"
            variant="outlined"
            value={sessionCode}
            onChange={(e) => setSessionCode(e.target.value)}
            sx={{
              width: "300px",
              marginBottom: "20px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <Button
              variant="contained"
              onClick={handleJoinSession}
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Join Session
            </Button>
            <Button
              variant="contained"
              onClick={() => setIsCreatingSession(true)}
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Create New Session
            </Button>
          </Box>
        </>
      ) : (
        <>
          <FormControl sx={{ marginBottom: "20px", width: "300px" }}>
            <TextField
              type="number"
              label="Number of Players"
              variant="outlined"
              value={players}
              onChange={(e) => setPlayers(Number(e.target.value))}
              inputProps={{ min: 1 }}
              sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
            />
          </FormControl>
          <FormControl sx={{ marginBottom: "20px", width: "300px" }}>
            <InputLabel id="court-select-label">Select Court</InputLabel>
            <Select
              labelId="court-select-label"
              value={selectedCourt}
              onChange={(e) => setSelectedCourt(e.target.value)}
              variant="outlined"
              sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
            >
              <MenuItem value="Northside Building 13 Outdoor Courts">
                Northside Building 13 Outdoor Courts
              </MenuItem>
              <MenuItem value="UTD Outdoor Courts">UTD Outdoor Courts</MenuItem>
              <MenuItem value="Residence Hall Outdoor Courts">
                Residence Hall Outdoor Courts
              </MenuItem>
              <MenuItem value="UTD Activity Center Indoor Courts">
                UTD Activity Center Indoor Courts
              </MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <Button
              variant="contained"
              onClick={handleCreateSessionSubmit}
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              onClick={() => setIsCreatingSession(false)}
              sx={{
                borderColor: "#000",
                color: "#000",
                "&:hover": { borderColor: "#333", color: "#333" },
              }}
            >
              Cancel
            </Button>
          </Box>
        </>
      )}

      {/* List of Created and In-Progress Sessions */}
      <Box sx={{ marginTop: "40px", textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#000", // Black text for "Available Sessions"
          }}
        >
          Available Sessions
        </Typography>
        {sessions.length > 0 ? (
          sessions.map((session) => (
            <Card
              key={session.id}
              sx={{
                marginBottom: "20px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {session.court}
                </Typography>
                <Typography>Players Remaining: {session.players}</Typography>
                <Typography>Status: {session.status}</Typography>
                <Button
                  variant="contained"
                  onClick={() => handleJoinExistingSession(session.id)}
                  sx={{
                    backgroundColor: "green",
                    color: "#fff",
                    marginTop: "10px",
                    "&:hover": { backgroundColor: "darkgreen" },
                  }}
                  disabled={session.players === 0} // Disable button if no players are needed
                >
                  Join
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography
            sx={{
              color: "#000", // Black text for "No sessions available yet."
              fontWeight: "bold",
            }}
          >
            No sessions available yet.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SessionSection;