import userModel, { IUserDocument } from "../models/user";
import { User } from "../types/user";

const NotFoundError = require("../errors/not-found-error");
const ValidationError = require("../errors/validation-error");

export const create = async (data: User): Promise<IUserDocument> => {
  const { name, email, canEditCourse, canFeedback } = data;
  if (!name || name === "") {
    throw new ValidationError({
      message: "Field name is required",
      statusCode: 422,
    });
  }

  if (!email || email === "") {
    /** adicionar classe de erro com status code */
    throw new ValidationError({
      message: "Field email is required",
      statusCode: 422,
    });
  }

  if (!canEditCourse) {
    /** adicionar classe de erro com status code */
    throw new ValidationError({
      message: "Field canEditCourse is required",
      statusCode: 422,
    });
  }

  if (!canFeedback) {
    /** adicionar classe de erro com status code */
    throw new ValidationError({
      message: "Field canFeedbak is required",
      statusCode: 422,
    });
  }

  return userModel.create(data);
};

export const getById = async (id: string): Promise<IUserDocument> => {
  const user = await userModel.findById(id);
  if (!user) {
    throw new NotFoundError({
      message: `🤷 User ${id} not found`,
      statusCode: 404,
    });
  }
  return user;
};

export const list = async (): Promise<IUserDocument[]> => {
  const user = await userModel.find();
  if (!user) {
    throw new NotFoundError({
      message: `🤷 Any User not found`,
      statusCode: 404,
    });
  }
  return user;
};
