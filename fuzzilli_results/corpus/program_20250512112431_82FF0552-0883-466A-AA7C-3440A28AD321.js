gc();
const v4 = [135,135,135,135];
[Uint16Array];
function f9() {
    return gc;
}
this.__defineGetter__("global", f9);
let v12 = undefined;
v12 = global;
function f14(a15, a16) {
    return a16;
}
f14.a = 135;
try { new Symbol("global"); } catch (e) {}
Object.defineProperty(Math, Symbol.toPrimitive, { writable: true, configurable: true, enumerable: true, value: f14 });
function f21(a22) {
    return global;
}
f21();
try { f9(Math, ...Symbol, 562949953421312, ...v4); } catch (e) {}
gc(this);
