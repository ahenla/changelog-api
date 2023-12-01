import express from "express";

const app = express(); //creates the server

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

export default app;
