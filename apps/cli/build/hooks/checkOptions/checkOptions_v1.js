"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOptions_v1 = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const checkOptions_v1 = (options) => (input) => {
    let response = () => react_1.default.createElement(ink_1.Text, null, "waiting");
    options.forEach(option => {
        if (input === option[0])
            response = option[1];
    });
    return response;
};
exports.checkOptions_v1 = checkOptions_v1;
