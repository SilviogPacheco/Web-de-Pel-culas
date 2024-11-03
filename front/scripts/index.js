const axios = require("axios");
const renderCards = require("./renderCards");

const loadMovies = async () => {
  try {
    const movies = await (
      await axios.get("https://students-api.up.railway.app/movies")
    ).data;
    renderCards(movies);
  } catch (error) {
    console.log(error.message);
  }
};

loadMovies();
