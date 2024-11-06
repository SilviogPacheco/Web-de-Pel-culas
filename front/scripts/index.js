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

//Formulario

const form = document.getElementById("create-movie-form");

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

const resetInputs = () => {
  document.getElementById("title").value = "";
  document.getElementById("year").value = "";
  document.getElementById("director").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("poster-url").value = "";
};

const sendForm = (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const year = document.getElementById("year").value.trim();
  const director = document.getElementById("director").value.trim();
  const duration = document.getElementById("duration").value.trim();
  const rating = document.getElementById("rating").value.trim();
  const poster = document.getElementById("poster-url").value.trim();

  if (!title || !year || !director || !duration || !rating || !poster) {
    alert("Por favor completa todos los datos");
    return;
  } else {
    alert("Formulario enviado correctamente");
    return { title, year, director, duration, rating, poster };
  }
};

const resetButton = document.getElementById("reset-button");

form.addEventListener("submit", sendForm);
resetButton.addEventListener("click", resetInputs);
