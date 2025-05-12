const v1 = Object();
function f2() {
    return Object;
}
Object.defineProperty(v1, "z", { configurable: true, enumerable: true, get: f2 });
const t5 = Object();
t5.z = undefined;
