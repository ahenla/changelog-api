import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

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

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signin);

export default app;
