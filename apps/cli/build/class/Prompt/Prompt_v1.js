"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prompt_v1 = void 0;
const ink_1 = require("ink");
const react_1 = __importStar(require("react"));
const Prompt_v1 = (question, type = "simple") => class extends react_1.Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: type
        });
        Object.defineProperty(this, "PromptWithUsrInput", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (props) => (react_1.default.createElement(ink_1.Text, null,
                question,
                " ",
                props.input))
        });
        Object.defineProperty(this, "PromptSimple", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (props) => {
                if (props) {
                }
                return react_1.default.createElement(ink_1.Text, null, question);
            }
        });
    }
    render() {
        let Element = (props) => (react_1.default.createElement(ink_1.Text, null,
            question,
            " ",
            props.input));
        if (this.type === "simple")
            Element = this.PromptSimple;
        if (this.type === "usrInput")
            Element = this.PromptWithUsrInput;
        return react_1.default.createElement(Element, { input: this.props.input });
    }
};
exports.Prompt_v1 = Prompt_v1;
