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
exports.Noiz_v2 = void 0;
const ink_1 = require("ink");
const react_1 = __importStar(require("react"));
const index_1 = require("../hooks/index");
const index_2 = require("./Steps/index");
const Step1_v1_1 = require("./Steps/Step1/Step1_v1");
const Step2_v1_1 = require("./Steps/Step2/Step2_v1");
const questions = [
    Step1_v1_1.question1,
    Step2_v1_1.question2,
];
questions.map(question => {
    if (!question.value[1][0]?.value)
        return;
    if (!question.value[1][1]?.value)
        return;
    const checkYesNo = (0, index_1.checkOptions)([
        question.value[1][0]?.value,
        question.value[1][1]?.value,
    ]);
    if (!question)
        return;
    if (!question.value[0])
        return;
    return checkYesNo(question.value[0]);
});
const checkYesNo = (0, index_1.checkOptions)([
    ["yes", Step1_v1_1.Folder],
    ["no", Step1_v1_1.File],
]);
class Noiz_v2 extends react_1.Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "Html", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                let { inputUpdate, answers, usrKey } = (0, index_1.useBasicInput)();
                const { botCheck } = (0, index_1.useCheck)(answers, checkYesNo);
                return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
                    answers.map((res, id) => (react_1.default.createElement(ink_1.Text, { key: id }, res))),
                    react_1.default.createElement(index_2.Step1, { input: inputUpdate, usrKey: usrKey }),
                    botCheck));
            }
        });
    }
    render() {
        return react_1.default.createElement(this.Html, null);
    }
}
exports.Noiz_v2 = Noiz_v2;
