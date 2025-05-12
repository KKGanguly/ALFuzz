test_count_operation(test_count_operation, test_count_operation);
function f2() {
}
function test_count_operation() {
    this.__defineSetter__("x", f2);
    this.__defineGetter__("x", f2);
    x = x++;
    return f2;
}
