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
      origin: "https://zerotodev.api.pe.hmg.asgard.b2w.io",
      methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
      allowedHeaders: [
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        "Access-Control-Allow-Origin",
        "Access-Control-Allow-Credentials",
      ],
      credentials: true,
    })
  );
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Origin",
      "https://zerotodev.api.pe.hmg.asgard.b2w.io"
    );
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://zerotodev.api.pe.hmg.asgard.b2w.io"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
  });
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
