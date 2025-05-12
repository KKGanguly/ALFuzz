function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = new F0();
const v4 = new F0();
class C5 extends F0 {
    valueOf(a7) {
        const v8 = %WasmArray();
        [a7,this,v3,v4];
        super.h = v8;
        for (let v10 = 0; v10 < 5; v10++) {
            v3["p"] = v10;
        }
        return v4;
    }
    #b;
}
new C5();
new C5();
const v14 = new C5();
const v15 = [v3,C5];
const v16 = [C5];
let v17 = [v16,v14];
class C18 extends F0 {
    constructor(a20, a21) {
        super();
        v17 = v16;
        new F0();
        new Uint8Array(v14, a21, C18);
    }
}
new C18(v14, v2);
try { v15(); } catch (e) {}
