

import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  ano: {
    type: Number,
    required: true
  },
  editora: {
    type: String,
    required: false
  },
  capa: {
    type: Buffer,
    required: false
  }
});

const Livro = mongoose.model("Livro", livroSchema);

export default Livro; 


