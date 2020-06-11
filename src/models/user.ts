import { Schema, model, Document } from "mongoose";

export interface IUserDocument extends Document {
  name: string;
  profile_url: string;
  title: string;
  email: string;
  canFeedback: boolean;
  canEditCourse: boolean;
}

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    profile_url: { type: String, default: "" },
    title: { type: String, default: "" },
    email: { type: String, default: "", required: true },
    canFeedback: { type: Boolean, required: true },
    canEditCourse: { type: Boolean, required: false },
  },
  {
    versionKey: false,
  }
);

// title: 1: admin, 2:manager, 3: instructor, 4:student moongose-role

const userModel = model<IUserDocument>("User", userSchema);

export default userModel;
