require("dotenv").config();
const express = require("express");
const jsonServer = require("json-server");
const path = require("path");

const app = express();
app.use(express.json());
const router = jsonServer.router(path.join(__dirname, "database", "db.json"));
const middlewares = jsonServer.defaults();

// Configurando o servidor JSON
app.use("/api", middlewares, router);

// Configurando o servidor de rota
const routes = require("./routes/index.js");
app.use("/", routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
