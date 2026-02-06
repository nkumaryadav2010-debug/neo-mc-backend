import express from "express";
import cors from "cors";
import { status } from "minecraft-server-util";

const app = express();
app.use(cors());

// CHANGE THIS
const MC_HOST = "play.chocomc.in"; // or IP
const MC_PORT = 25565;

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.get("/status", async (req, res) => {
  try {
    const result = await status(MC_HOST, MC_PORT);

    res.json({
      online: true,
      host: MC_HOST,
      players: result.players.online,
      maxPlayers: result.players.max,
      playerList: result.players.sample
        ? result.players.sample.map(p => p.name)
        : [],
      motd: result.motd.clean.join(" "),
      version: result.version.name,
      latency: result.roundTripLatency
    });

  } catch (err) {
    res.json({
      online: false,
      error: "Server offline or unreachable"
    });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
