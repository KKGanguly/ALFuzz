function f0() {
    return f0;
}
const v3 = this.__defineSetter__("x", f0);
for (let v4 = 0; v4 < 5; v4++) {
    f0[f0];
}
test_count_operation("x", v3, v3);
function f8() {
    return this;
}
function test_count_operation() {
    this.__defineSetter__("x", f8);
    return "x";
}
