const axios = require("axios");
const renderCards = require("./renderCards");

const loadMovies = async () => {
  try {
    const movies = (await axios.get("http://localhost:3001/movies")).data;
    renderCards(movies);
  } catch (error) {
    console.log(error.message);
  }
};

loadMovies();

//Formulario

const form = document.getElementById("create-movie-form");

//Formato para la duración

const formatDuration = (min) => {
  const horas = Math.floor(min / 60);
  const minutos = min % 60;
  return `${horas} h y ${minutos} min`;
};

//Géneros

const selectedGenres = [];
const genreSelect = document.getElementById("genre-select");
const selectedGenresContainer = document.getElementById("selected-genres");

const addGenre = () => {
  const genre = genreSelect.value;
  if (genre && !selectedGenres.includes(genre)) {
    selectedGenres.push(genre);
    renderSelectedGenres();
  }

  genreSelect.value = "";
};

const renderSelectedGenres = () => {
  selectedGenresContainer.innerHTML = "";

  selectedGenres.forEach((genre) => {
    const genreElement = document.createElement("span");
    genreElement.textContent = genre;
    genreElement.classList.add("selected-genre");
    genreElement.onclick = () => removeGenre(genre);
    selectedGenresContainer.appendChild(genreElement);
  });
};

const removeGenre = (genre) => {
  const index = selectedGenres.indexOf(genre);
  if (index > -1) {
    selectedGenres.splice(index, 1);
    renderSelectedGenres();
  }
};

genreSelect.addEventListener("change", addGenre);

//Limpiar inputs

const resetInputs = () => {
  ["title", "year", "director", "duration", "rating", "poster-url"].forEach(
    (id) => {
      document.getElementById(id).value = "";
    }
  );
};

//Enviar Form

const sendForm = async (event) => {
  event.preventDefault();

  const movie = getFormData();
  if (!isFormValid(movie)) {
    alert("Por favor completa todos los datos");
    return;
  }

  movie.duration = formatDuration(Number(movie.duration));
  alert("Formulario enviado correctamente");

  try {
    await axios.post("http://localhost:3001/movies/create", movie);
  } catch (error) {
    console.log("Error al enviar la película:", error.message);
  }
};

// Obtener datos del formulario
const getFormData = () => ({
  title: document.getElementById("title").value.trim(),
  year: document.getElementById("year").value.trim(),
  director: document.getElementById("director").value.trim(),
  duration: document.getElementById("duration").value.trim(),
  rate: document.getElementById("rating").value.trim(),
  poster: document.getElementById("poster-url").value.trim(),
  genre: selectedGenres,
});

// Validación del formulario
const isFormValid = (movie) => {
  const { title, year, director, duration, rate, poster } = movie;
  return title && year && director && duration && rate && poster;
};

//Botones

const resetButton = document.getElementById("reset-button");

form.addEventListener("submit", sendForm);
resetButton.addEventListener("click", resetInputs);
