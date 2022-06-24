const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Mamá estoy triunfando en el mundo de la programación");
});

app.get("/usuarios", function (req, res) {
  const usuarios = {
    nombre: "Rogelio",
    apellido: "Dominguez"
  }

  res.send(usuarios);
});

app.post("/usuarios", function (req, res) {
  res.send(req.body);
});

app.listen(3000);


