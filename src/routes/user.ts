import { Router } from "express";
import * as userController from "../controllers/user";

const router = Router();

router.get("/instructors", userController.getAllInstructors);
router.get("/:id", userController.getByUserId);
router.put("/:id", userController.editUser);
router.get("/givenfeedbacks/:id", userController.getGivenFeedbacks);
router.get("/pendingfeedbacks/:id", userController.getPendingFeedbacks);
router.get("/", userController.getAllUsers);

export default router;
