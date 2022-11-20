"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step2 = exports.question2 = exports.question2Option1 = exports.Step2_v1 = void 0;
exports.Step2_v1 = "Step2_v1";
const ink_1 = require("ink");
const react_1 = __importDefault(require("react"));
const index_1 = require("../../../class/index");
exports.question2Option1 = new index_1.StepOption("boo", () => react_1.default.createElement(ink_1.Text, null));
exports.question2 = new index_1.StepConfiguration("what about whatever?", [exports.question2Option1], "open");
exports.Step2 = (0, index_1.Step)(exports.question2);
