import userModel, { IUserDocument } from "../models/user";
import { User, UserGoogleInfo } from "../types/user";

const NotFoundError = require("../errors/not-found-error");
const ValidationError = require("../errors/validation-error");

export const create = async (data: UserGoogleInfo): Promise<IUserDocument> => {
  const { email, id, name, picture } = data;
  const user = await userModel.find({ email });
  const newUser: User = {
    googleid: id,
    name,
    email,
    profileUrl: picture,
    canEditCourse: false,
    canFeedback: true,
  };

  return userModel.create(newUser);
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
