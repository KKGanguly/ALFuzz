const v2 = test_count_operation();
function f3() {
    return v2;
}
test_count_operation(f3, test_count_operation, test_count_operation, v2, 65536);
function test_count_operation() {
    (65536).__defineGetter__("x", f3);
}
