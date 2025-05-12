function* f5(a6, a7, a8) {
    yield* a7;
}
function f14(a15, a16, a17, a18) {
    baz();
}
function baz() {
    f14.arguments[0];
}
for (let v24 = 0; v24 < 50; v24++) {
    f14("symbol", Object);
}
