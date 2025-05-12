function f1(a2, a3, a4) {
    return a4;
}
const v6 = Number.prototype;
v6.toExponential(0);
v6.__proto__ = f1;
const v8 = Number.prototype;
v8.prototype = v8;
