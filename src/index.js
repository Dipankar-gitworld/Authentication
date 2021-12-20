const express = require("express");

const {register,login} = require("./controllers/auth.controller");

const authenticate = require ("./middleware/authenticate");

const postController = require ("./controllers/post.controller");

const app = express();

app.use(express.json());

app.post("/register", register);

app.post("/login", login);

app.use("/post", authenticate, postController);



module.exports = app;