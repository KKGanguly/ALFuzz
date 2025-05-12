function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 9223372036854775807;
    this.a = 9223372036854775807;
    try { new Uint8ClampedArray(Uint8ClampedArray, Uint8ClampedArray, this); } catch (e) {}
    new Uint8ClampedArray(2);
    10 + 10;
    new Float32Array(10);
    512 == 512;
    const v14 = new Uint32Array(512);
    v14[200];
    this.g = 9223372036854775807;
}
new F0();
const v17 = new F0();
const v18 = new F0();
class C19 extends F0 {
    static {
        super.a = this;
        const v21 = super[this];
        v21 ?? v21;
        !(delete v21?.[5]);
        this ^ NaN;
        Math.sign(NaN);
        +(NaN >>> NaN);
    }
}
C19.length;
const v33 = new C19();
const v34 = new C19();
const v35 = v34?.constructor;
try { new v35(); } catch (e) {}
const v37 = new C19();
v37.b = v37;
function f38() {
    return v17;
}
const v40 = new Date();
try { v40.setMilliseconds(F0); } catch (e) {}
function f42(a43, a44) {
    a43--;
    const v46 = a44();
    v46 ?? v46;
    a44();
    return a44;
}
function f49() {
    var result;
    result ?? result;
    let v53 = 0;
    for (let i60 = (() => {
            const v55 = %WasmStruct();
            v33[0] += 0;
            Date.h = result;
            try { ("-2").matchAll("-2"); } catch (e) {}
            return 0;
        })();
        (() => {
            const v62 = i60 < 90;
            !v62;
            return v62;
        })();
        i60++) {
        i60++;
        v53 += i60;
    }
    result = v53;
}
const v69 = f42(4005, f49);
try { v69.apply(f38, v18); } catch (e) {}
function f71() {
    v40 != Date ? v40 : Date;
    arguments.f = arguments;
    let v78 = 0;
    for (let v79 = 0; v79 < 250; v79++) {
        v79++;
        v79 < 2;
        v78 = 2;
        v79++;
    }
    return v78;
}
f71.name;
f42(2, f71);
