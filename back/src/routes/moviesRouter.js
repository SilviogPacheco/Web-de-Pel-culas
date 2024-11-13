const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validationMovie = require("../middlewares/validationMovie");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.post("/create", validationMovie, moviesController.createMovie);

module.exports = moviesRouter;
