export function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalmethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Method ${key} called with arguments: ${JSON.stringify(args)}`);
        return originalmethod.apply(this, args);
    };
    return descriptor;
}