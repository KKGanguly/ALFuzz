test_count_operation();
function f3() {
    return f3;
}
function test_count_operation() {
    return this.__defineSetter__("2147483647", f3);
}
