const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json()); // Allows us to parse JSON data

// Import and use session routes
const sessionRoutes = require("./routes/sessionRoutes");
app.use("/api/sessions", sessionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});