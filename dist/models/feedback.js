"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var feedbackSchema = new mongoose_1.Schema({
    id_user: { type: String, required: true },
    id_course: { type: String, required: true },
    grade: { type: Number, required: true },
    positiveFeedback: { type: String, required: true },
    negativeFeedback: { type: String, required: true },
}, {
    versionKey: false
});
var feedbackModel = mongoose_1.model("Feedback", feedbackSchema);
exports.default = feedbackModel;
