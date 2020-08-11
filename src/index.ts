import express from "express";
import config from "./config";
import dbConnect from "./config/db";
import setMiddlewares from "./middlewares";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const app = express();

dbConnect(config.MONGO_DB_URL);
export const mid = setMiddlewares(app);

app.listen(config.PORT, () => {
  console.log(`✨ server started on port ${config.PORT}!`);
  console.log(process.env.NODE_ENV);
});
