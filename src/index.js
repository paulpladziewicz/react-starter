"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const Application_1 = __importDefault(require("./components/Application/Application"));
const container = document.getElementById('application');
react_dom_1.default.render((0, jsx_runtime_1.jsx)(Application_1.default, {}), container);
