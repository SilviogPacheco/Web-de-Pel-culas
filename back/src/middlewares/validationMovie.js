const validationMovie = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  if (
    !title ||
    !year ||
    !director ||
    !duration ||
    !rate ||
    !poster ||
    !Array.isArray(genre) ||
    genre.length === 0
  ) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  if (!/^\d{4}$/.test(year)) {
    return res
      .status(400)
      .json({ message: "El campo 'year' debe ser un número de 4 dígitos." });
  }

  const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w .-]*)*\/?$/;
  if (!urlPattern.test(poster)) {
    return res
      .status(400)
      .json({ message: "El campo 'poster' debe ser una URL válida." });
  }

  next();
};

module.exports = validationMovie;
