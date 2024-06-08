"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyReadOnly = void 0;
function MyReadOnly(target, propertyKey, descriptor) {
    if ('value' in descriptor) {
        descriptor.writable = false;
    }
    else {
        descriptor.set = function () {
            throw new Error(`Cannot set value of read-only property "${propertyKey}"`);
        };
    }
    return descriptor;
}
exports.MyReadOnly = MyReadOnly;
