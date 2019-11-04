const express = require("express");
const cors = require("cors");
const commentsRouter = require("./routers/comments-router.js");
const postsRouter = require("./routers/posts-router.js");

const server = express();

// Middleware
server.use(express.json());
server.use(cors());

server.use("/api/posts", postsRouter);
server.use("/api/posts/", commentsRouter);

server.get("/", (req, res) => {
  res.send("Good morning Server.js");
});

// This comes from Express
module.exports = server;
