import feedbackModel, { IFeedbackDocument } from "../models/feedback";
import { Feedback } from "../types/feedback";

import NotFoundError from "../errors/not-found-error";
import ValidationError from "../errors/validation-error";

export const create = async (data: Feedback): Promise<IFeedbackDocument> => {
  const {
    id_user,
    id_course,
    grade,
    positiveFeedback,
    negativeFeedback,
  } = data;

  const feedback = await feedbackModel.find({
    id_course,
    id_user,
  });

  if (!feedback) {
    throw new ValidationError("Feedback already exists", 409);
  }

  // if (!id_user || id_user === "") {
  //   /** adicionar classe de erro com status code */
  //   throw new ValidationError("Field id_user is required", 422);
  // }

  // if (!id_course || id_course === "") {
  //   /** adicionar classe de erro com status code */
  //   throw new ValidationError("Field id_course is required", 422);
  // }

  // if (!grade) {
  //   /** adicionar classe de erro com status code */
  //   throw new ValidationError("Field grade is required", 422);
  // }

  // if (!positiveFeedback || positiveFeedback === "") {
  //   /** adicionar classe de erro com status code */
  //   throw new ValidationError("Field positiveFeedback is required", 422);
  // }

  // if (!negativeFeedback || negativeFeedback === "") {
  //   /** adicionar classe de erro com status code */
  //   throw new ValidationError({
  //     message: "Field negativeFeedback is required",
  //     statusCode: 422,
  //   });
  // }
  return feedbackModel.create(data);
};

export const List = async (): Promise<IFeedbackDocument[]> => {
  const feedback = await feedbackModel.find();
  return feedback;
};

export const getById = async (id: string): Promise<IFeedbackDocument> => {
  const feedback = await feedbackModel.findById(id);
  if (!feedback) {
    throw new NotFoundError(`🤷 Feedback ${id} not found`, 404);
  }
  return feedback;
};

export const getByUser = async (id: string): Promise<IFeedbackDocument[]> => {
  const feedback = await feedbackModel.find({ id_user: id });

  if (!feedback) {
    throw new NotFoundError(`🤷 None user Feedback ${id} found`, 404);
  }
  return feedback;
};

export const getByCourse = async (id: string): Promise<IFeedbackDocument[]> => {
  const feedback = await feedbackModel.find({ id_course: id });
  if (!feedback) {
    throw new NotFoundError(`🤷 Any Course Feedback ${id} found`, 404);
  }
  return feedback;
};
