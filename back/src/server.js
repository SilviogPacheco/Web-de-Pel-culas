const express = require("express");
const router = require("./routes/index");

const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(router);

module.exports = app;
