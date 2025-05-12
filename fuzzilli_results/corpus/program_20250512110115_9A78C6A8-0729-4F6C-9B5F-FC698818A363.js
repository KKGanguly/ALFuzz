function f0() {
}
function f1() {
    const v2 = new f0();
    v2.x = v2;
    return f1;
}
function f3() {
    const v4 = new f0();
    function f5(a6) {
        return f1;
    }
    Object.defineProperty(v4, "x", { configurable: true, enumerable: true, set: f5 });
    return f5;
}
function f7(a8, a9) {
    return a9();
}
f7(4, f1);
f7(20, f3);
