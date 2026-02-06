import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Backend is working");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
