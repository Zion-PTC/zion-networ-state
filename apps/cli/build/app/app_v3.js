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
exports.Noiz_v3 = void 0;
const ink_1 = require("ink");
const react_1 = __importStar(require("react"));
const index_1 = require("../hooks/index");
class Noiz_v3 extends react_1.Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "Html", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                const { usrKey } = (0, index_1.useBasicInput)();
                (0, react_1.useEffect)(() => {
                    console.log(usrKey?.downArrow);
                }, [usrKey]);
                usrKey;
                return react_1.default.createElement(ink_1.Box, { flexDirection: "column" });
            }
        });
    }
    render() {
        return react_1.default.createElement(this.Html, null);
    }
}
exports.Noiz_v3 = Noiz_v3;
