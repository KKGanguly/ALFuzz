function RunOneTruncationTest(a1, a2) {
    return a2;
}
RunOneTruncationTest(RunOneTruncationTest, RunOneTruncationTest);
function RunOneTruncationTest(a5, a6) {
    a5 | 0;
}
RunOneTruncationTest(RunOneTruncationTest);
%OptimizeMaglevOnNextCall(RunOneTruncationTest);
RunOneTruncationTest();
