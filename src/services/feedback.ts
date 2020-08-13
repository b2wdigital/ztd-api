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

export const allFeedbacksByCourse = async (): Promise<IFeedbackDocument[]> => {
  const feedback = await feedbackModel.aggregate([
    {
      $lookup: {
        from: "courses",
        let: {
          resultObj: {
            $toObjectId: "$id_course",
          },
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$_id", "$$resultObj"],
              },
            },
          },
        ],
        as: "curso",
      },
    },
    {
      $group: {
        _id: "$curso",
        grades: {
          $push: "$grade",
        },
        positiveFeedbacks: {
          $push: "$positiveFeedback",
        },
        negativeFeedbacks: {
          $push: "$negativeFeedback",
        },
      },
    },
  ]);
  return feedback;
};

export const allFeedbacksByUser = async (): Promise<IFeedbackDocument[]> => {
  const feedback = await feedbackModel.aggregate([
    {
      $addFields: {
        id_course: {
          $toObjectId: "$id_course",
        },
        id_user: {
          $toObjectId: "$id_user",
        },
      },
    },
    {
      $group: {
        _id: "$id_user",
        courses: {
          $push: "$id_course",
        },
        count: { $sum: 1 },
      },
    },
    {
      $lookup: {
        from: "courses",
        localField: "courses",
        foreignField: "_id",
        as: "courses",
      },
    },
  ]);
  return feedback;
};
