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
exports.Step_v1 = exports.StepConfiguration_v1 = exports.StepOption_v1 = void 0;
const ink_1 = require("ink");
const react_1 = __importStar(require("react"));
// import { NoizState } from "../../app/app_v2";
const hooks_1 = require("../../hooks");
const index_1 = require("../index");
class StepOption_v1 {
    constructor(option, component) {
        const arr = [
            option,
            component,
        ];
        this.value = arr;
    }
}
exports.StepOption_v1 = StepOption_v1;
class StepConfiguration_v1 {
    constructor(question, options, type) {
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: type
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const arr = [
            question,
            options,
        ];
        this.value = arr;
    }
    get question() {
        return this.value[0];
    }
    get options() {
        return this.value[1].map(el => el.value);
    }
    get promptType() {
        let promptType;
        switch (this.type) {
            case "open":
                promptType = "usrInput";
                break;
            case "radio":
                promptType = "simple";
                break;
            case "multiple":
                promptType = "simple";
                break;
            default:
                promptType = "simple";
                break;
        }
        return promptType;
    }
}
exports.StepConfiguration_v1 = StepConfiguration_v1;
const Step_v1 = (config) => class StepClass extends react_1.Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "selected", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "● "
        });
        Object.defineProperty(this, "unselected", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "○ "
        });
        Object.defineProperty(this, "cursorSelect", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "▶︎ "
        });
        Object.defineProperty(this, "validate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "✔︎ "
        });
        Object.defineProperty(this, "unvalidate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "✖︎ "
        });
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: config
        });
        Object.defineProperty(this, "Question", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (0, index_1.Prompt)(config.value[0], config.promptType)
        });
        Object.defineProperty(this, "optionField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (icon) => (props) => {
                const cursor = props.active
                    ? this.cursorSelect
                    : "  ";
                // TODO #21 @ariannatnl aggiungere frammento vuoto
                // (`<></>`) e inserire 3 Text (provare), il primo
                // deve essere `dimmed` (grigio), il secondo
                // colorato acceso, e il terzo bianco.
                return (react_1.default.createElement(ink_1.Text, null,
                    cursor,
                    icon,
                    props.children));
            }
        });
        Object.defineProperty(this, "checker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (0, hooks_1.checkOptions)(config.options)
        });
        Object.defineProperty(this, "SelectedField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.optionField(this.selected)
        });
        Object.defineProperty(this, "UnselectedField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.optionField(this.unselected)
        });
        Object.defineProperty(this, "ValidateField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.optionField(this.validate)
        });
        Object.defineProperty(this, "UnvalidateField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: this.optionField(this.unvalidate)
        });
        Object.defineProperty(this, "Multiple", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                const options = this.config.options;
                (0, react_1.useEffect)(() => {
                    if (this.props.usrKey?.downArrow) {
                        let currentOrder = this.state.order;
                        StepClass.shiftFirst(currentOrder);
                        let currentActive = currentOrder[0];
                        if (currentActive === undefined)
                            return;
                        this.setState({
                            order: currentOrder,
                            active: currentActive,
                            selected: currentActive,
                        });
                    }
                    if (this.props.usrKey?.upArrow) {
                        let currentOrder = this.state.order;
                        StepClass.shiftLast(currentOrder);
                        let currentActive = currentOrder[0];
                        if (currentActive === undefined)
                            return;
                        this.setState({
                            order: currentOrder,
                            active: currentActive,
                            selected: currentActive,
                        });
                    }
                    if (this.props.usrKey?.return === true) {
                        this.props.handleSteps({
                            isCompleted: true,
                            RenderedSteps: this.Step,
                        });
                    }
                }, [this.props.usrKey]);
                return (react_1.default.createElement(react_1.default.Fragment, null, options.map((option, id) => {
                    let Element = this.UnselectedField;
                    const optiontext = option[0];
                    const isSelected = this.state.selected === id;
                    const isActive = this.state.active === id;
                    if (isSelected)
                        Element = this.SelectedField;
                    return (react_1.default.createElement(Element, { key: id, active: isActive }, optiontext));
                })));
            }
        });
        Object.defineProperty(this, "Step", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (props) => {
                return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
                    react_1.default.createElement(this.Question, { input: props.input }),
                    react_1.default.createElement(this.Multiple, null)));
            }
        });
        let counter = 0;
        let order = [];
        for (let options of config.options) {
            options;
            order.push(counter);
            counter++;
        }
        this.state = { active: 0, order, selected: 0 };
    }
    static shiftFirst(array) {
        const first = array.shift();
        if (first !== undefined)
            array.push(first);
        return array;
    }
    static shiftLast(array) {
        array.reverse();
        const last = array.shift();
        if (last !== undefined)
            array.push(last);
        array.reverse();
        return array;
    }
    handleSteps(props) {
        this.props.handleSteps(props);
    }
    componentDidUpdate() { }
    componentDidMount() { }
    render() {
        const { Step } = this;
        return (react_1.default.createElement(Step, { input: this.props.input, handleSteps: this.handleSteps }));
    }
};
exports.Step_v1 = Step_v1;
