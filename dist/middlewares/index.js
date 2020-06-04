"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var course_1 = __importDefault(require("../routes/course"));
var feedback_1 = __importDefault(require("../routes/feedback"));
var user_1 = __importDefault(require("../routes/user"));
var authenticate_1 = __importDefault(require("../routes/authenticate"));
var initLibs = function (app) {
    app.use(express_1.default.json());
    app.use(cors_1.default({ origin: true, credentials: true }));
};
var initRoutes = function (app) {
    app.use("/courses", course_1.default);
    app.use("/feedbacks", feedback_1.default);
    app.use("/users", user_1.default);
    app.use("/authenticate", authenticate_1.default);
};
exports.default = (function (app) {
    initLibs(app);
    initRoutes(app);
});
