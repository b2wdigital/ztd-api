import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
import express, { Express } from "express";
import session from "express-session";
import cors from "cors";
import passport from "passport";
import "../config/passport";
import config from "../config/index";
import courseRoutes from "../routes/course";
import feedbackRoutes from "../routes/feedback";
import userRoutes from "../routes/user";
import authRoutes from "../routes/authenticate";

const initLibs = (app: Express) => {
  app.use(express.json());
  app.use(
    cookieSession({
      name: "session",
      keys: ["help"],
      maxAge: 24 * 60 * 100,
    })
  );
  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(
    cors({
      origin: config.HOMEPAGE,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );
};

const initRoutes = (app: Express) => {
  app.use("/courses", courseRoutes);
  app.use("/feedbacks", feedbackRoutes);
  app.use("/users", userRoutes);
  app.use("/auth", authRoutes);
};

const authCheck = (req: Request, res: Response) => {
  console.log("authCheck =>", req);
};

export default (app: Express): void => {
  initLibs(app);
  initRoutes(app);
};
