"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MyTestClass_1 = require("./MyTestClass");
const myTestClassExample = new MyTestClass_1.MyTestClass('Output test string', 334);
myTestClassExample.firstMethod();
myTestClassExample.secondMethod();
console.log(myTestClassExample.readonlyProperty);
try {
    myTestClassExample.readonlyProperty = 'New Value';
}
catch (error) {
    console.error('Failed to modify readOnlyProperty: ', error);
}
