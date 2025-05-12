test_count_operation();
function f2() {
    return test_count_operation;
}
function test_count_operation() {
    this.__defineSetter__("x", f2);
    x++;
    return x;
}
