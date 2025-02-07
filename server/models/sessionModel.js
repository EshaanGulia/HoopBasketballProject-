const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    court: { type: String, required: true },
    maxPlayers: { type: Number, required: true },
    currentPlayers: { type: Number, default: 0 },
    players: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model("Session", sessionSchema);