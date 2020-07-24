"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var config_1 = __importDefault(require("../../config"));
var db_1 = __importDefault(require("../../config/db"));
var feedback_1 = __importDefault(require("../../models/feedback"));
describe("Users", function () {
    beforeAll(function () {
        db_1.default(config_1.default.MONGO_DB_URL);
    });
    beforeEach(function () {
        if (feedback_1.default.countDocuments()) {
            return feedback_1.default.deleteMany({});
        }
    });
    describe("Feedback Creation", function () {
        it("Should add a new feedback to database", function () { return __awaiter(void 0, void 0, void 0, function () {
            var newFeedback, createdFeedback;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newFeedback = new feedback_1.default({
                            id_user: "5f044c683bd89050951eb90f",
                            id_course: "5ecb3cb81bbb5d4508daed8e",
                            grade: 5,
                            positiveFeedback: "Sim",
                            negativeFeedback: "Não",
                        });
                        return [4 /*yield*/, feedback_1.default.create(newFeedback)];
                    case 1:
                        createdFeedback = _a.sent();
                        expect(newFeedback).toEqual(createdFeedback);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should add a list of feedbacks to database", function () { return __awaiter(void 0, void 0, void 0, function () {
            var feedbacks, createdfeedbacks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        feedbacks = [
                            {
                                id_user: "5f044c683bd89050951eb90f",
                                id_course: "5ecb3cb81bbb5d4508daed8e",
                                grade: 5,
                                positiveFeedback: "Sim",
                                negativeFeedback: "Não",
                            },
                            {
                                id_user: "5f044c683bd89050951eb90f",
                                id_course: "5ecb3cb81bbb5d4508daed8e",
                                grade: 5,
                                positiveFeedback: "Sim",
                                negativeFeedback: "Não",
                            },
                        ];
                        return [4 /*yield*/, feedback_1.default.create(feedbacks)];
                    case 1:
                        createdfeedbacks = _a.sent();
                        expect(createdfeedbacks).toHaveLength(2);
                        return [2 /*return*/];
                }
            });
        }); });
        // it("Should returns an error if a id is missing", async () => {
        //   const newFeedback = [
        //     {
        //       id_course: "5ecb3cb81bbb5d4508daed8e",
        //       grade: 5,
        //       positiveFeedback: "Sim",
        //       negativeFeedback: "Não",
        //     },
        //   ];
        //   await expect(Feedback.create(newFeedback)).rejects.toThrow(
        //     "Feedback validation failed: id_user: Path `id_user` is required"
        //   );
        // });
    });
    describe("feedback List", function () {
        it("Should return a list of feedbacks successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
            var feedbacks, feedbackList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        feedbacks = [
                            {
                                id_user: "5f044c683bd89050951eb90f",
                                id_course: "5ecb3cb81bbb5d4508daed8e",
                                grade: 5,
                                positiveFeedback: "Sim",
                                negativeFeedback: "Não",
                            },
                            {
                                id_user: "5f044c683bd89050951eb90f",
                                id_course: "5ecb3cb81bbb5d4508daed8e",
                                grade: 5,
                                positiveFeedback: "Sim",
                                negativeFeedback: "Não",
                            },
                        ];
                        return [4 /*yield*/, feedback_1.default.create(feedbacks)];
                    case 1:
                        feedbackList = _a.sent();
                        expect(feedbackList).toHaveLength(2);
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return an empty list when doesn't have an feedback", function () { return __awaiter(void 0, void 0, void 0, function () {
            var returnedfeedback;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, feedback_1.default.find()];
                    case 1:
                        returnedfeedback = _a.sent();
                        expect(returnedfeedback).toHaveLength(0);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("feedback By Id", function () {
        it("Shouldnt return a unexistant feedback", function () { return __awaiter(void 0, void 0, void 0, function () {
            var returnedfeedback;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, feedback_1.default.findOne(mongoose_1.Types.ObjectId())];
                    case 1:
                        returnedfeedback = _a.sent();
                        expect(returnedfeedback).toBeNull();
                        return [2 /*return*/];
                }
            });
        }); });
        it("Should return a feedback successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
            var feedback, _id, returnedfeedback;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        feedback = {
                            id_user: "5f044c683bd89050951eb90f",
                            id_course: "5ecb3cb81bbb5d4508daed8e",
                            grade: 5,
                            positiveFeedback: "Sim",
                            negativeFeedback: "Não",
                        };
                        return [4 /*yield*/, feedback_1.default.create(feedback)];
                    case 1:
                        _id = (_a.sent())._id;
                        return [4 /*yield*/, feedback_1.default.findOne(_id)];
                    case 2:
                        returnedfeedback = _a.sent();
                        if (returnedfeedback) {
                            expect(returnedfeedback.id_user).toBe(feedback.id_user);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
