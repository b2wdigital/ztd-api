require('dotenv').config();
const config = {
  PORT: process.env.PORT || 3333,
  MONGO_DB_URL:process.env.MONGO_DB_URL || "",
  CLIENT_ID : process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET
};
export default config;
