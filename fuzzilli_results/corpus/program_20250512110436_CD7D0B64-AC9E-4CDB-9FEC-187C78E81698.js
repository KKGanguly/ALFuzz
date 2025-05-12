let v0 = 16;
function f1(a2, a3, a4, a5) {
    baz();
    return v0;
}
f1(f1, f1, f1, f1);
function baz() {
    let v10 = f1.arguments;
    v10[0] = v10;
    ({"c":v0,...v10} = v10);
    return baz;
}
