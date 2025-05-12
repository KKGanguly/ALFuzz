const v1 = new Map();
test_count_operation();
function f4() {
    return test_count_operation;
}
function test_count_operation() {
    this.__defineGetter__("x", f4);
    return Map;
}
function f9(a10, a11, a12) {
    return { ...v1, __proto__: v1 };
}
f9(f9, f9(), f9);
function f16() {
    return f9;
}
this.__defineSetter__("x", f16);
