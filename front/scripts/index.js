const renderCards = require("./renderCards");

const loadMovies = () => {
  $.get("https://students-api.up.railway.app/movies", (data, status) => {
    if (status === "success") {
      renderCards(data);
    } else {
      console.error("Hubo un error al cargar las películas.");
    }
  });
};

loadMovies();
