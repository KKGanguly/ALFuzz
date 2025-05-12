global = 1;
function f2(a3) {
    return global;
}
const v4 = f2();
function f6() {
    return v4;
}
f2(this.__defineGetter__("global", f6));
