import { MyTestClass } from "./MyTestClass";

const myTestClassExample = new MyTestClass('Output test string', 334);

myTestClassExample.firstMethod();
myTestClassExample.secondMethod();

console.log(myTestClassExample.readonlyProperty);

try {
    (myTestClassExample as any).readonlyProperty = 'New Value';
} catch (error) {
    console.error('Failed to modify readOnlyProperty: ', error);
}