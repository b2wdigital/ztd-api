import { Router } from "express";
import * as courseController from "../controllers/course";

const router = Router();

router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);
router.post("/", courseController.createCourse);
router.put("/:id", courseController.updateCourse);
// router.delete("/:id", courseController.deleteCourseById);

export default router;
