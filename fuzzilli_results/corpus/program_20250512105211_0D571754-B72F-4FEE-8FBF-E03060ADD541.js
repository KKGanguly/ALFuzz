function f0() {
    return f0;
}
const v1 = { get: f0, getPrototypeOf: f0 };
let v2 = [0.9213097754143807,2.0,2.2560390093742364e+307];
test_count_operation(v2, test_count_operation);
function test_count_operation() {
    v2 **= v2;
    return f0;
}
