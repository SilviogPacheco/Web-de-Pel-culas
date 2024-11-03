const cardsContainer = document.getElementById("cards-container");

const renderCards = (data) => {
  data.forEach((ele) => {
    const cardDiv = document.createElement("div");

    const titleCard = document.createElement("h3");
    const imageCard = document.createElement("img");
    const detailsDiv = document.createElement("div");
    const yearCard = document.createElement("h3");
    const directorCard = document.createElement("h3");
    const durationCard = document.createElement("h3");
    const genreCard = document.createElement("h3");
    const rateCard = document.createElement("h3");

    titleCard.innerHTML = ele.title;
    imageCard.src = ele.poster;
    yearCard.innerHTML = `Año: ${ele.year}`;
    directorCard.innerHTML = `Director: ${ele.director}`;
    durationCard.innerHTML = `Duración: ${ele.duration}`;
    rateCard.innerHTML = `Rating: ${ele.rate}`;

    ele.genre.forEach((e) => {
      const genreElement = document.createElement("span");
      genreElement.innerHTML = e;
      genreElement.classList.add("genre-item");
      genreCard.appendChild(genreElement);
    });

    cardDiv.classList.add("card");
    titleCard.classList.add("title-card");
    imageCard.classList.add("image-card");
    detailsDiv.classList.add("details");
    genreCard.classList.add("genre-card");

    detailsDiv.appendChild(yearCard);
    detailsDiv.appendChild(directorCard);
    detailsDiv.appendChild(durationCard);
    detailsDiv.appendChild(rateCard);
    detailsDiv.appendChild(genreCard);

    cardDiv.appendChild(titleCard);
    cardDiv.appendChild(imageCard);
    cardDiv.appendChild(detailsDiv);

    cardsContainer.appendChild(cardDiv);
  });
};

module.exports = renderCards;
