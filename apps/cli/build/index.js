"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//// app
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const index_js_1 = require("./app/index.js");
(0, ink_1.render)(react_1.default.createElement(index_js_1.App, null));
