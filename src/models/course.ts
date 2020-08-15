import { Schema, model, Document } from "mongoose";

export interface ICourseDocument extends Document {
  name: string;
  instructors: string;
  urlDoc: string;
  extra: string;
  goals: string;
  topicsCovered: string;
  module: number;
}

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    instructors_id: { type: Array, default: [] },
    urlDoc: { type: Array, default: [] },
    extra: { type: String, default: "" },
    goals: { type: String, default: "" },
    topicsCovered: { type: String, default: "" },
    module: { type: Number },
  },
  {
    versionKey: false,
  }
);

const courseModel = model<ICourseDocument>("Course", courseSchema);

export default courseModel;
