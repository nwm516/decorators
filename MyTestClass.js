"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTestClass = void 0;
const decoratorsSimpleLogger_1 = __importDefault(require("./decoratorsSimpleLogger"));
const decoratorsLogMethod_1 = require("./decoratorsLogMethod");
const decoratorsMyReadOnly_1 = require("./decoratorsMyReadOnly");
let MyTestClass = class MyTestClass {
    constructor(firstProp, secondProp) {
        this.firstProp = firstProp;
        this.secondProp = secondProp;
    }
    firstMethod() {
        console.log(`First Method with firstProp output: ${this.firstProp}`);
    }
    secondMethod() {
        console.log(`Second Method with secondProp output: ${this.secondProp}`);
    }
    get readonlyProperty() {
        return `${this.firstProp} - ${this.secondProp}`;
    }
};
exports.MyTestClass = MyTestClass;
__decorate([
    decoratorsLogMethod_1.LogMethod
], MyTestClass.prototype, "firstMethod", null);
__decorate([
    decoratorsLogMethod_1.LogMethod
], MyTestClass.prototype, "secondMethod", null);
__decorate([
    decoratorsMyReadOnly_1.MyReadOnly
], MyTestClass.prototype, "readonlyProperty", null);
exports.MyTestClass = MyTestClass = __decorate([
    decoratorsSimpleLogger_1.default
], MyTestClass);
