"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogMethod = void 0;
function LogMethod(target, key, descriptor) {
    const originalmethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Method ${key} called with arguments: ${JSON.stringify(args)}`);
        return originalmethod.apply(this, args);
    };
    return descriptor;
}
exports.LogMethod = LogMethod;
