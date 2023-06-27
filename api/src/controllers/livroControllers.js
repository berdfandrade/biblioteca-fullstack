
import Livro from "../models/livroSchema.js";

const criarLivro = (dadosLivro) => {
  const livro = new Livro(dadosLivro);

  livro
    .save()
    .then((savedLivro) => {
      console.log("Livro criado com sucesso:", savedLivro.nome);
    })
    .catch((error) => {
      console.error("Erro ao criar livro:", error.message);
    });
};

const getLivros = (req, res) => {
  Livro.find()
    .then((livros) => {
      res.send(livros);
    })
    .catch((error) => {
      res.status(404).json({ message: "Livro não encontrado", error });
    });
};

const getLivro = (req, res) => {
  const { id } = req.params;

  Livro.findById(id)
  .then((livro)=> {
    if(!livro){
      return res.status(404).json({ message : "Livro não encontrado"})
    }
    res.json(livro)
  })
   .catch((error) =>{
    console.error('Eerror ao buscar livro:', error.message);
    res.status(500).json({ message: 'Erro ao buscar livro' });
   })
}

const atualizarLivro = (req, res) => {
  const { id } = req.params;
  const { nome, autor, ano, editora } = req.body;

  Livro.findByIdAndUpdate(
    id,
    { nome, autor, ano, editora },
    { new: true }
  )
    .then((livroAtualizado) => {
      if (!livroAtualizado) {
        throw new Error("Livro não encontrado");
      }
      res.send(livroAtualizado);
    })
    .catch((error) => {
      res.status(404).json({ message: "Erro ao atualizar livro", error });
    });
};

const deletarLivro = (req, res) => {
  const { id } = req.params;

  Livro.findByIdAndDelete(id)
    .then((livroDeletado) => {
      if (!livroDeletado) {
        throw new Error("Livro não encontrado");
      }
      res.send(livroDeletado);
    })
    .catch((error) => {
      res.status(404).json({ message: "Erro ao deletar livro", error });
    });
};

export { criarLivro, getLivros, atualizarLivro, deletarLivro, getLivro };
