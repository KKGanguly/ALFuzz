const v1 = { ..."endsWith" };
function f3() {
    return v1;
}
Object.defineProperty(selfOf, 0, { configurable: true, get: f3 });
function f4() {
    return selfOf;
}
function selfOf(a6) {
    return v1;
}
selfOf[0] = f4;
f4.apply(3, selfOf);
