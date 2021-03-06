import { Schema, model, Document } from "mongoose";

export interface IUserDocument extends Document {
  googleid: string;
  name: string;
  profileUrl: string;
  email: string;
  canFeedback: boolean;
  canEditCourse: boolean;
  isAdmin: boolean;
}

const userSchema = new Schema(
  {
    googleid: { type: String, required: true },
    name: { type: String, required: true },
    profileUrl: { type: String, default: "" },
    email: { type: String, default: "", required: true },
    canFeedback: { type: Boolean, default: true, required: false },
    canEditCourse: { type: Boolean, default: false, required: false },
    isAdmin: { type: Boolean, default: false, required: false },
  },
  {
    versionKey: false,
  }
);

// title: 1: admin, 2:manager, 3: instructor, 4:student moongose-role

const userModel = model<IUserDocument>("User", userSchema);

export default userModel;
