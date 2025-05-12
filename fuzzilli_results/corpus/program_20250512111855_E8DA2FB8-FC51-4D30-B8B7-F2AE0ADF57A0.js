const v0 = [];
v0[1] = 0;
function f2(a3, a4, a5) {
    const t3 = v0.__proto__;
    t3[0] = 1;
    return 1;
}
v0.forEach(f2);
Array(10000).pop();
