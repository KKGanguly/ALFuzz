test_count_operation();
function f3() {
    return test_count_operation;
}
function test_count_operation() {
    const v6 = this.Date;
    let v7;
    try { v7 = new v6(f3, f3, test_count_operation, test_count_operation, test_count_operation, -4294967296n); } catch (e) {}
    return v7;
}
