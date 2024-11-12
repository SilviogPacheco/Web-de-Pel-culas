const Movie = require("../models/movie");

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },

  createMovie: async (movie) => {
    const newMovie = await Movie.create(movie);
    console.log(newMovie);
    return newMovie;
  },
};
