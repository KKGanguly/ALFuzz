function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = Symbol.f;
function f4(a5, a6, a7) {
    F0 / v3;
    return a5;
}
const v11 = [Symbol,v3];
new Worker(f4, { arguments: v11, type: "function" });
