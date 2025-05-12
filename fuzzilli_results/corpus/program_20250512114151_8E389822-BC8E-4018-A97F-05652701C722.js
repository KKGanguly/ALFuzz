function f0() {
    const v6 = {
        g: 1.0,
        [1.0]: 427954804,
        set h(a4) {
            super.d /= a4;
        },
    };
    return v6;
}
const v7 = f0();
const v8 = f0();
const v9 = f0();
const v10 = v9.__defineGetter__;
try { v10(f0, v8); } catch (e) {}
const v12 = [5.0,-110476.1952240842];
const v13 = [1.0,-213.61382601854189,1000000.0,-1000.0,2.2250738585072014e-308,0.8088810540157808,1000000000000.0];
const v14 = [-249.91991319103613,0.2749053504365597,-1e-15,5.309254567368206e+307,-918241.5188038626,2.0,0.49958745507236857,7.487784971640515];
try { v14.flat(v10); } catch (e) {}
function f16() {
    return v12;
}
const v17 = [v14];
[v17,v13,v14,v13];
class C19 {
    static [v12];
}
const v22 = {
    value: v7,
    [Symbol]() {
        return v17;
    },
};
const v25 = new Int8Array(Symbol);
const t34 = v25.constructor;
new t34(C19, v9);
gc();
