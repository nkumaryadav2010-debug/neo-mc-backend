import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working ✅");
});

app.get("/status", (req, res) => {
  res.json({
    server: "NEO MC",
    online: true,
    players: 15,
    maxPlayers: 100,
    tps: 19.9
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
