"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    profile_url: { type: String, default: "" },
    title: { type: String, default: "" },
    email: { type: String, default: "", required: true },
    canFeedback: { type: Boolean, required: true },
    canEditCourse: { type: Boolean, required: false },
}, {
    versionKey: false
});
//title: 1: admin, 2:manager, 3: instructor, 4:student moongose-role
var userModel = mongoose_1.model("User", userSchema);
exports.default = userModel;
