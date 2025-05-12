global = 2147483649;
function f3() {
    return global;
}
this.__defineGetter__("global", f3);
