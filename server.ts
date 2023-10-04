import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json({ response: "OK" });
});

app.listen(() => {
  console.log("Server started");
});
