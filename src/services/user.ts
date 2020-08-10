import { Profile } from "passport-google-oauth20";
import userModel, { IUserDocument } from "../models/user";
import { User, UserGoogleInfo } from "../types/user";

import NotFoundError from "../errors/not-found-error";
import ValidationError from "../errors/validation-error";

export const createOrReturnExistent = async (
  data: Profile
): Promise<IUserDocument> => {
  const { _json } = data;
  const { email, sub, name, picture } = _json;

  const user = await userModel.findOne({ email });
  if (!user) {
    const newUser: User = {
      googleid: sub,
      name,
      email,
      profileUrl: picture,
      canEditCourse: false,
      canFeedback: true,
    };
    return userModel.create(newUser);
  }
  return user;
};

export const getById = async (id: string): Promise<IUserDocument> => {
  const user = await userModel.findById(id);
  if (!user) {
    throw new NotFoundError(`🤷 User ${id} not found`, 404);
  }
  return user;
};

export const list = async (): Promise<IUserDocument[]> => {
  const user = await userModel.find();
  if (!user) {
    throw new NotFoundError(`🤷 Any User not found`, 404);
  }
  return user;
};
