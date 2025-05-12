global = 1;
for (let v2 = 0; v2 < 5; v2++) {
    global += v2;
}
function f4() {
    return "global";
}
this.__defineGetter__("global", f4);
