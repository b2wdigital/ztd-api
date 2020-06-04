import mongoose from "mongoose";

export default (mongoDbUrl: string) => {
  mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  });

  mongoose.connection.once("connected", () => {
    console.log("Conectado com MongoDB.");
  });

  mongoose.connection.on("error", err => {
    console.error(`💥 Deu erro, ${err}`);
  });
};
