const express = require("express");
const userControllers = require("../src/controllers/userControllers");
const { hashPassword } = require("../auth");
const router = express.Router();

// router.get("/api/movies", movieControllers.getMovies);
// router.get("/api/movies/:id", movieControllers.getMovieById);
router.get("/api/users", userControllers.getAllUsers);
router.post("/api/users", hashPassword, userControllers.postUser);
router.put("/api/users/:id", hashPassword, userControllers.putUser);

module.exports = router;
