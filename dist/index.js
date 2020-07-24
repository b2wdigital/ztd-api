"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mid = void 0;
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config"));
var db_1 = __importDefault(require("./config/db"));
var middlewares_1 = __importDefault(require("./middlewares"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
var app = express_1.default();
db_1.default(config_1.default.MONGO_DB_URL);
exports.mid = middlewares_1.default(app);
app.listen(config_1.default.PORT, function () {
    console.log("\u2728 server started on port " + config_1.default.PORT + "!");
});
