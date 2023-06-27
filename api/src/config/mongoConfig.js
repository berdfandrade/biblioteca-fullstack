

import mongoose from "mongoose";

const password = 'R8sCL3tn2c6M9sCu';
const url = `mongodb+srv://berdfandrade:
${password}@bibliocluster.wljipf9.mongodb.net/test?retryWrites=true&w=majority`;


const mongoConnect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conectado ao MongoDB!");
    })
    .catch((error) => {
      console.error("Erro ao conectar ao MongoDB:", error.message);
    });
};


export default mongoConnect;
