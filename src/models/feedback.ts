import { Schema, model } from "mongoose";

const feedbackSchema = new Schema(
  {
    id_user: { type: String, required: true },
    id_course: { type: String, required: true },
    grade: { type: Number, required:true },
    positiveFeedback: { type: String, required:true },
    negativeFeedback: { type: String, required:true },
  },
  {
    versionKey: false
  }
);

const feedbackModel = model("Feedback", feedbackSchema);

export default feedbackModel;
