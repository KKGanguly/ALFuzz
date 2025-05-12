selfOf.self_ = 5n;
selfOf(selfOf);
function f5() {
    selfOf(this);
}
function selfOf(a9) {
    a9.constructor = selfOf;
    a9.self_;
    const v11 = a9?.constructor;
    try { v11(selfOf); } catch (e) {}
}
function f13() {
}
Object.defineProperty(selfOf, 0, { configurable: true, get: f13 });
const v15 = { self_: 3 };
function f16(a17, a18) {
}
v15.constructor = f16;
f5.apply(v15);
