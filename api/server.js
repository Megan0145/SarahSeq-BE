const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const authRouter = require("../authentication/auth-router");
const testRouter = require("../tests/test-router");
const userRouter = require("../users/user-router")

server.use("/api/auth", authRouter);
server.use("/api/tests", testRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send("Up and running!");
});

module.exports = server;
