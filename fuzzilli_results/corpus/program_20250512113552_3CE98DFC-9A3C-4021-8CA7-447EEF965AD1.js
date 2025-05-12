global = 1;
global = -2147483649;
function f4() {
    return -2147483649;
}
this.__defineGetter__("global", f4);
