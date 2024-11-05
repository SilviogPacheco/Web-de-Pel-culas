const axios = require("axios");
const renderCards = require("./renderCards");

const loadMovies = async () => {
  try {
    const movies = await (await axios.get("http://localhost:3001/movies")).data;
    renderCards(movies);
  } catch (error) {
    console.log(error.message);
  }
};

loadMovies();
