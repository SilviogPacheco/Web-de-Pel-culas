const moviesService = require("../services/moviesService");

const getAllMovies = async (req, res) => {
  try {
    const movies = await moviesService.getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: "Error al obtener películas" });
  }
};

const createMovie = async (req, res) => {
  const movie = req.body;
  try {
    const newMovie = await moviesService.createMovie(movie);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: "Error al crear película" });
  }
};

module.exports = { getAllMovies, createMovie };
