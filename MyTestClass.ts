import SimpleLogger from "./decoratorsSimpleLogger";
import { LogMethod } from "./decoratorsLogMethod";
import { MyReadOnly } from "./decoratorsMyReadOnly";

@SimpleLogger
export class MyTestClass {
    public firstProp: string;
    public secondProp: number;

    constructor(firstProp: string, secondProp: number) {
        this.firstProp = firstProp;
        this.secondProp = secondProp;
    }

    @LogMethod
    public firstMethod(): void {
        console.log(`First Method with firstProp output: ${this.firstProp}`);
    }

    @LogMethod
    public secondMethod(): void {
        console.log(`Second Method with secondProp output: ${this.secondProp}`);
    }

    @MyReadOnly
    public get readonlyProperty(): string {
        return `${this.firstProp} - ${this.secondProp}`;
    }
}