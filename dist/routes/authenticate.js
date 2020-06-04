"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authenticate_1 = require("../controllers/authenticate");
var router = express_1.Router();
router.get("/github", authenticate_1.redirectGit);
exports.default = router;
