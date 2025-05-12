function f1() {
    this.y = f1;
    this.x = 42;
    this.y = -536870912;
}
new f1();
function f7(a8) {
}
Object.prototype.__defineSetter__("x", f7);
const v13 = new f1();
v13.__proto__ = Object;
Object.defineProperty(Object, "z", { writable: true, value: "y" });
