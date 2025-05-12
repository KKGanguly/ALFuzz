function f1(a2, a3, a4, a5) {
    const v11 = {
        ["-65536"](a7, a8, a9, a10) {
        },
    };
    return v11;
}
const v12 = f1("-65536", f1, f1, f1);
function f14(a15, a16, a17) {
    try { a15.constructor(a15, v12, v12); } catch (e) {}
    return "-65536";
}
const t12 = Number.prototype;
t12.__proto__ = f14;
const v21 = (0).prototype;
const v22 = v21.constructor(v12);
const t15 = v21.constructor;
const v24 = new t15(v21);
v24.constructor(v22, 0);
