function f0() {
    return f0;
}
const v1 = f0.prototype;
function f2() {
    return f0;
}
Object.defineProperty(v1, "valueOf", { configurable: true, get: f2 });
