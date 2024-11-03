const moviesController = (req, res) => {
  console.log("aquí obtendremos las películas");
  res.status(200).send("Respuesta exitosa del servidor");
};

module.exports = moviesController;
