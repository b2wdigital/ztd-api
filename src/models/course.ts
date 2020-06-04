import { Schema, model } from "mongoose";

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    instructors_id: { type: Array, default: [] },
    urlDoc: { type: Array, default: [] },
    extra: { type: String, default: "" },
    goals: { type: String, default: "" },
    topicsCovered: { type: String, default: "" }
  },
  {
    versionKey: false
  }
);

const courseModel = model("Course", courseSchema);

export default courseModel;

// docker run --net=host -it mongo mongo 127.0.0.1:27017
// docker run --net=host mongo:4.2.6-bionic
