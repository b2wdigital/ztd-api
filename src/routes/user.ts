import { Router } from "express";
import * as userController from "../controllers/user";

const router = Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers)
router.get("/:id", userController.getByUserId);
router.get("/givenfeedbacks/:id", userController.getGivenFeedbacks)
router.get("/pendingfeedbacks/:id", userController.getPendingFeedbacks)

export default router;
