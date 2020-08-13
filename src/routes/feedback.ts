import { Router } from "express";
import * as feedbackController from "../controllers/feedback";

const router = Router();

router.get("/by_course", feedbackController.getFeedbackByCourse);
router.get("/by_user", feedbackController.getAllFeedbackByUser);
router.post("/", feedbackController.createFeedback);
router.get("/", feedbackController.getAllFeedbacks);
router.get("/:id", feedbackController.getFeedbackById);
router.get("/by_user/:id", feedbackController.getFeedbackByUser);

export default router;
