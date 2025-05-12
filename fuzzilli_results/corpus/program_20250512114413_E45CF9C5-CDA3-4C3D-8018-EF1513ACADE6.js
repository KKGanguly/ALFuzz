let v1 = "p";
let v2 = 3.8682396736956193;
class C3 {
    static {
        ({"f":v1,"length":v2,} = "NaN");
        const v8 = { execution: gc, type: C3 };
        gc("major");
    }
    static 4;
    #c = "NaN";
    static #h = v2;
    static #g = v1;
}
const v10 = new C3();
new C3();
const v12 = new C3();
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = C3;
}
const v18 = new F13(v12, v10, "NaN");
new F13(v18, v18, v18);
new F13(v18, v12, C3);
new Uint8ClampedArray(64);
new Float64Array(14);
new Int8Array(849);
for (let i31 = (() => {
        function f() {
        }
        return f;
    })();
    !Int8Array;
    ) {
}
for (let i36 = 0; i36 < 1000000; i36++) {
}
