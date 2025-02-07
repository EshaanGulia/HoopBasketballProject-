const Session = require("../models/sessionModel");

// ✅ Create a session (MongoDB)
exports.createSession = async (req, res) => {
    try {
        const { court, maxPlayers } = req.body;

        if (!court || !maxPlayers || typeof maxPlayers !== "number" || maxPlayers <= 0) {
            return res.status(400).json({ message: "Valid court and maxPlayers (number > 0) are required." });
        }

        const session = new Session({ court, maxPlayers, currentPlayers: 0, players: [] });
        await session.save();

        res.status(201).json({ message: "Session created successfully!", session });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// ✅ Get all sessions
exports.getAllSessions = async (req, res) => {
    try {
        const sessions = await Session.find();
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// ✅ Join a session
exports.joinSession = async (req, res) => {
    try {
        const { sessionId } = req.params;
        const { username } = req.body;

        if (!username) {
            return res.status(400).json({ message: "Username is required to join a session." });
        }

        const session = await Session.findById(sessionId);
        if (!session) {
            return res.status(404).json({ message: "Session not found." });
        }

        if (session.currentPlayers >= session.maxPlayers) {
            return res.status(400).json({ message: "Session is already full." });
        }

        session.players.push(username);
        session.currentPlayers++;
        await session.save();

        res.status(200).json({ message: "Joined session successfully!", session });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// ✅ Leave a session
exports.leaveSession = async (req, res) => {
    try {
        const { sessionId } = req.params;
        const { username } = req.body;

        const session = await Session.findById(sessionId);
        if (!session) {
            return res.status(404).json({ message: "Session not found." });
        }

        const playerIndex = session.players.indexOf(username);
        if (playerIndex === -1) {
            return res.status(400).json({ message: "User is not in this session." });
        }

        session.players.splice(playerIndex, 1);
        session.currentPlayers--;
        await session.save();

        res.status(200).json({ message: "Player left the session successfully!", session });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// ✅ Delete a session
exports.deleteSession = async (req, res) => {
    try {
        const { sessionId } = req.params;

        const session = await Session.findByIdAndDelete(sessionId);
        if (!session) {
            return res.status(404).json({ message: "Session not found." });
        }

        res.status(200).json({ message: "Session deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};