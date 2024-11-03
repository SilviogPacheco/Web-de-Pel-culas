const { getMovies } = require("../services/moviesService");

const getAllMovies = async (req, res) => {
  try {
    const movies = await getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: "Error al obtener películas" });
  }
};

module.exports = { getAllMovies };
