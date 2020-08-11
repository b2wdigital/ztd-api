import { Router } from "express";
import passport from "passport";
import { loginSuccess, logout } from "../controllers/authenticate";
import config from "../config/index";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/login/success", loginSuccess);
router.get("/login/failed");
router.get("/logout", logout);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: config.HOMEPAGE,
    failureRedirect: "auth/login/failed",
  })
);

export default router;
