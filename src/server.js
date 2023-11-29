const express = require("express");
const exphbs = require("express-handlebars");
// const Handlebars = require("handlebars");
const path = require("path");

// Importar as rotas
const thoughtsRouters = require("./routes/thoughtsRouters");
const usersRouters = require("./routes/usersRouters");

// Import do arquivo do banco de dados
require("./database/index");

// Inicializando o express
const app = express();

//Import o template de engenharia Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.set("views", path.join(__dirname, "views/"));

app.use(express.static(__dirname + "/public"));

exphbs.create({
  partialsDir: path.join(__dirname, "views/partials"),
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(thoughtsRouters);
app.use(usersRouters);

app.listen(3333, console.log("Server is running in port 3333"));
