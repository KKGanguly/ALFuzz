const v1 = new WeakSet();
class C2 {
    static [WeakSet] = v1;
    valueOf(a4) {
        a4.h = this;
        gc({ execution: "sync", type: "major" });
        return gc;
    }
}
const v10 = new C2();
try { v10.valueOf(C2); } catch (e) {}
const v12 = new C2();
const v13 = v12?.constructor;
try { new v13(); } catch (e) {}
new C2();
new Date();
/(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10/yiv;
/a\Sc(?:(?=a))a\1*/d;
/(?:ab|cde)/gv.dotAll;
new Uint8ClampedArray(0);
127 >> 127;
new Uint8ClampedArray(127);
for (let i31 = (() => {
        function f() {
        }
        return f;
    })();
    !i31;
    ) {
}
for (let i36 = 0; i36 < 1000000; i36++) {
}
new Uint8ClampedArray(11);
function f44() {
    return f44;
}
f44.prototype = 1;
