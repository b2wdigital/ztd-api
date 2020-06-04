"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCourse = exports.getAllCourses = exports.getCourseById = exports.createCourse = void 0;
var courseService = __importStar(require("../services/course"));
exports.createCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dbResponse, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, courseService.create(req.body)];
            case 1:
                dbResponse = _a.sent();
                res.status(200).send(dbResponse);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(err_1.statusCode || 500).json({
                        error: "\uD83D\uDC7B " + err_1.name,
                        message: "" + err_1.message
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCourseById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, dbResponse, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, courseService.getById(id)];
            case 1:
                dbResponse = _a.sent();
                res.status(200).send(dbResponse);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                return [2 /*return*/, res.status(err_2.statusCode || 500).json({
                        error: "\uD83D\uDC7B " + err_2.name,
                        message: "" + err_2.message
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllCourses = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dbResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, courseService.list()];
            case 1:
                dbResponse = _a.sent();
                try {
                    res.send(dbResponse);
                }
                catch (err) {
                    return [2 /*return*/, res.status(err.statusCode || 500).json({
                            error: "\uD83D\uDC7B " + err.name,
                            message: "" + err.message
                        })];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.updateCourse = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, params, dbResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body, params = req.params;
                return [4 /*yield*/, courseService.update(params.id, body)];
            case 1:
                dbResponse = _a.sent();
                try {
                    res.send(dbResponse);
                }
                catch (err) {
                    return [2 /*return*/, res.status(err.statusCode || 500).json({
                            error: "\uD83D\uDC7B " + err.name,
                            message: "" + err.message
                        })];
                }
                return [2 /*return*/];
        }
    });
}); };
// export const updateInstructorCourse = async (req: Request, res: Response) => {
//   const { body, params } = req;
//   await courseModel.findByIdAndUpdate(params.id, body.instructors);
//   const dbResponse = await courseModel.findById(params.id);
//   try {
//     res.send(dbResponse);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
// export const updateInstructorName = async (req: Request, res: Response) => {
//   const { body, params } = req;
//   await courseModel.findByIdAndUpdate(params.id, body.name);
//   const dbResponse = await courseModel.findById(params.id);
//   try {
//     res.send(dbResponse);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
// export const deleteCourseById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const dbResponse = await courseModel.findByIdAndRemove(id);
//   try {
//     res.status(200).send(dbResponse);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };