const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const authRouter = require("../authentication/auth-router");

server.use("/api/users", authRouter);

server.get("/", (req, res) => {
  res.send("Up and running!");
});

module.exports = server;
