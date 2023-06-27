import express from "express";
import cors from "cors";
import mongoConnect from "./src/config/mongoConfig.js";
import * as livroController from "./src/controllers/livroControllers.js";

// Declarando o express
const app = express();

//conectar ao mongoDB
mongoConnect();

// Usando o CORS
app.use(cors());

// Usando o express json
app.use(express.json());

// Rota principal da API
app.get("/", (req, res) => {
  res.send("Olá!");
});

app.get("/livros", livroController.getLivros);

app.get("/livros/:id", livroController.getLivro);

app.post("/livros", (req, res) => {
  livroController.criarLivro(req.body);
  res.sendStatus(201);
});

app.put("/livros", (req, res) => {
  livroController.atualizarLivro(req.body);
  res.sendStatus(201);
});

// Porta
const PORT = 3000;

// Saída do servidor
app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
