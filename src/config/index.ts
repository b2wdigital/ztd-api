// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const config = {
  PORT: process.env.NODE_PORT || 3333,
  MONGO_DB_URL: process.env.MONGO_DB_URL || "",
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};
export default config;
