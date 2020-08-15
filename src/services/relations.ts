import feedbackModel from "../models/feedback";
import { Feedback } from "../types/feedback";
import courseModel from "../models/course";
import { Course } from "../types/course";

export const listGivenFeedbacks = async (idUser: string) => {
  const courses = await courseModel.find();
  const feedback = await feedbackModel.find({ id_user: idUser });
  // procurar mongo metodo que traz o curso a partir do id, query d mongo;
  const given: any = [];
  // const filteredCourses = courses.filter((course) => {
  //   existentFeedback(idUser, course._id)
  // })
  for (const course of courses) {
    await feedbackModel
      .find({ id_course: course._id, id_user: idUser })
      .then((response) => {
        if (response.length > 0) {
          given.push(course);
        }
      });
  }

  return given;
};

export const listPendingFeedbacks = async (idUser: string) => {
  const courses = await courseModel.find();
  // id da materia, id o feedback, pegar materias sem id feedback. JOIN, WHERE.

  const pending: any = [];
  for (const course of courses) {
    await feedbackModel
      .find({ id_course: course._id, id_user: idUser })
      .then((response) => {
        if (response.length == 0) {
          pending.push(course);
        }
      });
  }
  return pending;
};

export const getFeedbackByCourse = async (idCourse: string, idUser: string) => {
  const feedback = await feedbackModel.find({
    id_course: idCourse,
    id_user: idUser,
  });
  return feedback;
};
