"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var courseSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    instructors_id: { type: Array, default: [] },
    urlDoc: { type: Array, default: [] },
    extra: { type: String, default: "" },
    goals: { type: String, default: "" },
    topicsCovered: { type: String, default: "" },
}, {
    versionKey: false,
});
var courseModel = mongoose_1.model("Course", courseSchema);
exports.default = courseModel;
