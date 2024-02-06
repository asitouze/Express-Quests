require("dotenv").config();
const express = require("express");

const app = express();
const router = require("../router/router");
// const movieControllers = require("./controllers/movieControllers");
// const userHandlers = require("./controllers/userControllers");
app.use(express.json());

app.use(router);
module.exports = app;
