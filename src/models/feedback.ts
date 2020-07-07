import { Schema, model, Document } from "mongoose";

export interface IFeedbackDocument extends Document {
  id_user: string;
  id_course: string;
  grade: number;
  positiveFeedback: string;
  negativeFeedback: string;
}

const feedbackSchema = new Schema(
  {
    id_user: { type: String, required: true },
    id_course: { type: String, required: true },
    grade: { type: Number, required: true },
    positiveFeedback: { type: String, required: true },
    negativeFeedback: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const feedbackModel = model<IFeedbackDocument>("Feedback", feedbackSchema);

export default feedbackModel;
