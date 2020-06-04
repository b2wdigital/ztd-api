import { Router } from "express";
import * as feedbackController from "../controllers/feedback";

const router = Router();

router.post("/", feedbackController.createFeedback);
router.get("/", feedbackController.getAllFeedbacks);
router.get("/:id", feedbackController.getFeedbackById);
router.get("/by_user/:id", feedbackController.getFeedbackByUser);
router.get("/by_course/:id", feedbackController.getFeedbackByCourse);

export default router;
