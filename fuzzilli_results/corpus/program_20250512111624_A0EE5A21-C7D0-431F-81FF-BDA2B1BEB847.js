function f1() {
    this.y = 2147483647;
    this.x = 42;
    this.y = 87;
    return 42;
}
function f7(a8) {
    return f7;
}
Object.prototype.__defineSetter__("x", f7);
const v12 = new f1();
v12.y = undefined;
v12.__proto__ = Object;
f1.call(v12);
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
