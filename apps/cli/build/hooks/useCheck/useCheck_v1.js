"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheck_v1 = void 0;
const react_1 = require("react");
const useCheck_v1 = (answers, checkCallback) => {
    const [botCheck, setBotCheck] = (0, react_1.useState)(checkCallback(""));
    (0, react_1.useEffect)(() => {
        const answer = answers.slice(answers.length - 1, answers.length);
        if (!answer)
            return;
        if (!answer[0])
            return;
        const bot = checkCallback(answer[0]);
        setBotCheck(bot);
    }, [answers]);
    return { botCheck };
};
exports.useCheck_v1 = useCheck_v1;
