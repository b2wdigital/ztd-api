import passport from "passport";
import { Strategy, Profile } from "passport-google-oauth20";
import { json } from "express";
import { createOrReturnExistent } from "../services/user";
import userModel from "../models/user";
import config from "./index";
import { UserGoogleInfo } from "../types/user";

passport.serializeUser((user: UserGoogleInfo, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  const a = userModel
    .findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((e) => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(
  new Strategy(
    {
      clientID: config.CLIENT_ID,
      clientSecret: config.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },

    async (accessToken, refreshToken, profile, done) => {
      const user = await createOrReturnExistent(profile);
      done("", user, accessToken);
    }
  )
);
