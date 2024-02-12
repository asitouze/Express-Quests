require("dotenv").config();
const express = require("express");

const app = express();
const router = require("../router/router");
// const movieControllers = require("./controllers/movieControllers");
// const userHandlers = require("./controllers/userControllers");
app.use(express.json());
const verifyToken = require("../middleware/verifyToken");
app.use(verifyToken); // authentication wall : verifyToken is activated for each route after this line

app.post("/api/movies", movieHandlers.postMovie);
app.put("/api/movies/:id", movieHandlers.updateMovie);
app.delete("/api/movies/:id", movieHandlers.deleteMovie);

app.use(router);
module.exports = app;
