import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// root route (for testing)
app.get("/", (req, res) => {
  res.send("Backend is working");
});

// status API (use this in Neocities)
app.get("/status", (req, res) => {
  res.json({
    server: "NEO MC",
    online: true,
    players: 23,
    maxPlayers: 100,
    tps: 19.95,
    version: "1.20.4"
  });
});

// Railway REQUIRED port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
