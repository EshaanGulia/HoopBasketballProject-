import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Tooltip,
} from "@mui/material";
import { fetchSessions, createSession, joinSession } from "../services/api";
import { UserContext } from "../context/UserContext"; // Import UserContext

interface Session {
  id: string;
  court: string;
  players: number;
  maxPlayers: number;
  status: "In Progress" | "Open";
}

const SessionSection: React.FC = () => {
  const [sessionCode, setSessionCode] = useState("");
  const [isCreatingSession, setIsCreatingSession] = useState(false);
  const [players, setPlayers] = useState<number | "">("");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [sessions, setSessions] = useState<Session[]>([]);

  // Get user from UserContext
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("UserContext must be used within a UserProvider");
  }
  const { user } = userContext; // Get the logged-in user

  useEffect(() => {
    const loadSessions = async () => {
      try {
        const data = await fetchSessions();
        setSessions(data);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };
    loadSessions();
  }, []);

  const handleJoinSession = async (sessionId: string) => {
    if (!user) {
      return alert("You must be signed in to join a session.");
    }

    try {
      await joinSession(sessionId, user.username);
      alert(`Successfully joined session: ${sessionId}`);
      setSessions((prevSessions) =>
        prevSessions.map((session) =>
          session.id === sessionId
            ? { ...session, players: session.players + 1 }
            : session
        )
      );
    } catch (error) {
      alert("Failed to join session.");
    }
  };

  const handleCreateSessionSubmit = async () => {
    if (!user) {
      return alert("You must be signed in to create a session.");
    }

    if (!players || !selectedCourt) {
      return alert("Please fill out all the fields to create a session!");
    }

    try {
      const newSession = await createSession(selectedCourt, Number(players));
      setSessions((prev) => [...prev, newSession]); // Update session list
      alert(`Created a session at ${selectedCourt}`);
      setPlayers("");
      setSelectedCourt("");
      setIsCreatingSession(false);
    } catch (error) {
      alert("Failed to create session. Please try again.");
    }
  };

  return (
    <Box
      id="session-section"
      sx={{
        padding: "50px",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#000", marginBottom: "20px" }}>
        {isCreatingSession ? "Create a Session" : "Join a Session"}
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
              onClick={() => handleJoinSession(sessionCode)}
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
              sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" } }}
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

      <Box sx={{ marginTop: "40px", textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px", color: "#000" }}>
          Available Sessions
        </Typography>
        {sessions.length > 0 ? (
          sessions.map((session) => (
            <Card key={session.id} sx={{ margin: "20px auto", width: "80%", padding: "20px" }}>
              <CardContent>
                <Typography variant="h6">{session.court}</Typography>
                <Typography>Players: {session.players}/{session.maxPlayers}</Typography>
                <Tooltip title={session.players >= session.maxPlayers ? "Session is full" : ""}>
                  <span>
                    <Button
                      variant="contained"
                      onClick={() => handleJoinSession(session.id)}
                      disabled={session.players >= session.maxPlayers}
                    >
                      Join
                    </Button>
                  </span>
                </Tooltip>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No sessions available yet.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SessionSection;