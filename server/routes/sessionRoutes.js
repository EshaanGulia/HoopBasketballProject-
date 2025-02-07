const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");

// Create a session
router.post("/create", sessionController.createSession);

// Get all sessions
router.get("/", sessionController.getAllSessions);

// Join a session
router.post("/join/:sessionId", sessionController.joinSession);

// Leave a session
router.put("/leave/:sessionId", sessionController.leaveSession);

// Delete a session
router.delete("/delete/:sessionId", sessionController.deleteSession);

module.exports = router;