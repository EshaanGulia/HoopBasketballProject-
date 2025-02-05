const express = require("express");
const router = express.Router();

// Temporary in-memory sessions array (Replace with database later)
let sessions = [];

// Create a session
router.post("/create", (req, res) => {
  const { court, maxPlayers } = req.body;

  if (!court || !maxPlayers) {
    return res.status(400).json({ message: "Court and max players are required." });
  }

  const session = {
    id: sessions.length + 1,
    court,
    maxPlayers,
    currentPlayers: 0,
    players: [],
  };

  sessions.push(session);
  res.status(201).json({ message: "Session created successfully!", session });
});

// Get all sessions
router.get("/", (req, res) => {
  res.json(sessions);
});

// Join a session
router.post("/join/:sessionId", (req, res) => {
  const { sessionId } = req.params;
  const { username } = req.body;

  const session = sessions.find((s) => s.id == sessionId);

  if (!session) {
    return res.status(404).json({ message: "Session not found." });
  }

  if (session.currentPlayers >= session.maxPlayers) {
    return res.status(400).json({ message: "Session is already full." });
  }

  session.players.push(username);
  session.currentPlayers++;

  res.json({ message: "Joined session successfully!", session });
});

module.exports = router;