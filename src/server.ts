import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";

const app = express(); //creates the server

function customLogger(message) {
  return (req, res, next) => {
    console.log(`Hello from ${message}`);
    next();
  };
}

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //allows to receive json
app.use(express.urlencoded({ extended: true })); //allows to receive encoded queries
app.use(customLogger("my API"));

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", router);

export default app;
