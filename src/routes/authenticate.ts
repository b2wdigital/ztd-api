import { Router } from "express";
import { googleUrl, callback } from "../controllers/authenticate";

const router = Router();

router.get("/google", googleUrl);
router.get("/google/callback", callback);

export default router;
