"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.default = (function (mongoDbUrl) {
    mongoose_1.default.connect(mongoDbUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    });
    mongoose_1.default.connection.once("connected", function () {
        console.log("Conectado com MongoDB.");
    });
    mongoose_1.default.connection.on("error", function (err) {
        console.error("\uD83D\uDCA5 Deu erro " + err);
    });
});
