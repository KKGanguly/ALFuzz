function f1() {
    return f1;
}
f1.a = "Z";
function f3(a4, a5, a6) {
    return 0;
}
function f7() {
    return Math.exp(0);
}
f3[Symbol.toPrimitive] = f7;
const t11 = Number.prototype;
t11.__proto__ = f3;
const v14 = Number.prototype;
v14.toFixed(v14);
