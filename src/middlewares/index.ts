import express, { Express } from "express";
import cors from "cors";
import courseRoutes from "../routes/course";
import feedbackRoutes from "../routes/feedback";
import userRoutes from "../routes/user";
import authRoutes from "../routes/authenticate";

const initLibs = (app: Express) => {
  app.use(express.json());
  app.use(cors({ origin: true, credentials: true }));
};

const initRoutes = (app: Express) => {
  app.use("/courses", courseRoutes);
  app.use("/feedbacks", feedbackRoutes);
  app.use("/users", userRoutes);
  app.use("/authenticate", authRoutes);
};

export default (app: Express): void => {
  initLibs(app);
  initRoutes(app);
};
