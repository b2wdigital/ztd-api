// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const config = {
  PORT: process.env.NODE_PORT || 3333,
  MONGO_DB_URL:
    process.env.NODE_ENV === "test"
      ? process.env.MONGO_DB_TEST || ""
      : process.env.MONGO_DB_URL || "",
  CLIENT_ID:
    process.env.CLIENT_ID ||
    "552986523156-1kb9de3gub5oaaej6j18uib1q3cp9n10.apps.googleusercontent.com",
  CLIENT_SECRET: process.env.CLIENT_SECRET || "bjFHBkTHyAIoDtcyXHUQJTvw",
  GOOGLE_URL: "https://oauth2.googleapis.com/token",
  HOMEPAGE: "http://localhost:3000",
};
export default config;
