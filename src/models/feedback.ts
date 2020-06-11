import { Schema, model, Document } from "mongoose";
import { ICourseDocument } from "./course";

export interface IFeedbackDocument extends Document {
  name: string;
  instructors: string;
  urlDoc: string;
  extra: string;
  goals: string;
  topicsCovered: string;
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

const feedbackModel = model<ICourseDocument>("Feedback", feedbackSchema);

export default feedbackModel;
