const Movie = require("../models/movie");

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },
};
