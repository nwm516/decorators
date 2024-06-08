export function MyReadOnly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if ('value' in descriptor){
        descriptor.writable = false;
    } else {
        descriptor.set = function () {
            throw new Error(`Cannot set value of read-only property "${propertyKey}"`);
        };
    }
    return descriptor;
}