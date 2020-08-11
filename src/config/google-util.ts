import * as queryString from "query-string";

require("dotenv");

export const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirect: "http://localhost:3333/auth/google/callback",
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

const stringifiedParams = queryString.stringify({
  client_id: googleConfig.clientId,
  redirect_uri: googleConfig.redirect,
  scope: [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ].join(" "),
  response_type: "code",
  access_type: "offline",
  prompt: "consent",
});

export const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
