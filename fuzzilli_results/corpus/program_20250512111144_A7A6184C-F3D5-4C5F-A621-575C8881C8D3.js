([Array]).slice();
class C8 {
    static #h = -1.5327638378470713e+308;
}
global = 1;
function f11(a12) {
    return global;
}
const v13 = f11();
function f15() {
    return v13;
}
this.__defineGetter__("global", f15);
const v18 = new C8();
function f19() {
}
function f20() {
    return v18;
}
function f24(a25) {
    const v27 = [,,];
    function f28() {
        return 4;
    }
    function f29(a30) {
        for (let i32 = 0; i32 < 90; i32++) {
            global += i32;
        }
    }
    Object.defineProperty(v27, 1, { enumerable: true, get: f28, set: f29 });
    v27[1] = 0;
    function f40(a41, a42, a43, a44) {
    }
    f40.arguments;
    v27[2] = 2;
    v27.__proto__;
}
f24();
f24(f24());
