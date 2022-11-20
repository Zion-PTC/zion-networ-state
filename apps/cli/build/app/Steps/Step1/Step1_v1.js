"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step1_v1 = exports.question1 = exports.File = exports.Folder = void 0;
const ink_1 = require("ink");
const react_1 = __importDefault(require("react"));
const index_js_1 = require("../../../class/index.js");
const Folder = () => (react_1.default.createElement(ink_1.Text, { color: "green" }, "Ooook"));
exports.Folder = Folder;
const File = () => (react_1.default.createElement(ink_1.Text, { color: "red" }, "Notter ok"));
exports.File = File;
const folder = new index_js_1.StepOption("folder", exports.Folder);
const file = new index_js_1.StepOption("file", exports.File);
const question = "What do you want to do?? =)";
exports.question1 = new index_js_1.StepConfiguration(question, [folder, file], "radio");
exports.Step1_v1 = (0, index_js_1.Step)(exports.question1);
