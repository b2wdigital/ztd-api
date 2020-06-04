import express from "express";
import config from "./config";
import dbConnect from "./config/db";
import setMiddlewares from "./middlewares";

require('dotenv').config();

const app = express();


dbConnect(config.MONGO_DB_URL);
setMiddlewares(app);

app.listen(config.PORT, () => {
  console.log(`✨ server started on port ${config.PORT}!`);
});



