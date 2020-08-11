import { Router } from "express";
import * as userController from "../controllers/user";

const router = Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getByUserId);
router.get("/instructors", userController.getAllInstructors);
router.put("/:id", userController.editUser);
router.get("/givenfeedbacks/:id", userController.getGivenFeedbacks);
router.get("/pendingfeedbacks/:id", userController.getPendingFeedbacks);

export default router;
