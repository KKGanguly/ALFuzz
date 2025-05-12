const v2 = test_count_operation().read;
try { v2(v2, test_count_operation, v2); } catch (e) {}
function test_count_operation() {
    this.escape();
    return this;
}
