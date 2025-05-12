global = 1;
function f3() {
    return 1;
}
this.__defineGetter__("global", f3);
global = 1;
