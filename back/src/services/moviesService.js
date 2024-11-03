const axios = require("axios");

module.exports = {
  getMovies: async () => {
    const movies = (
      await axios.get("https://students-api.up.railway.app/movies")
    ).data;
    return movies;
  },
};
