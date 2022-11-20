"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBasicInput_v1 = void 0;
const ink_1 = require("ink");
const react_1 = require("react");
const useBasicInput_v1 = () => {
    const [answers, setAnswers] = (0, react_1.useState)([]);
    const [inputUpdate, setInputUpdate] = (0, react_1.useState)([]);
    const [usrKey, setUsrKey] = (0, react_1.useState)();
    const { exit } = (0, ink_1.useApp)();
    (0, ink_1.useInput)((input, key) => {
        setUsrKey(key);
        setInputUpdate([...inputUpdate, input]);
        if (key.return === true) {
            let input = inputUpdate.join("");
            setAnswers([...answers, input]);
            setInputUpdate([]);
        }
        if (key.escape === true)
            exit();
        if (key.delete === true)
            setInputUpdate(inputUpdate.slice(0, inputUpdate.length - 1));
    });
    return { inputUpdate, answers, usrKey };
};
exports.useBasicInput_v1 = useBasicInput_v1;
