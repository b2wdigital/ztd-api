import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    profile_url: { type: String, default: "" },
    title: { type: String, default: "" },
    email: { type: String, default: "", required: true },
    canFeedback: { type: Boolean , required: true},
    canEditCourse: { type: Boolean , required: false},
  },
  {
    versionKey: false
  }
);

//title: 1: admin, 2:manager, 3: instructor, 4:student moongose-role

const userModel = model("User", userSchema);

export default userModel;
