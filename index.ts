import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json({ response: "OK" });
});

app.listen(3000, () => {
  console.log("Server started on Port 3000");
});
