function F0() {
    if (!new.target) { throw 'must be called with new'; }
    let v1 = this;
    let v2 = -12;
    v1.d = v2;
    v1.h = v2;
    ({"c":v1,"d":v2,"h":v1,...v1} = v1);
    v1.h += v2;
    v1[4294967296] = v2;
    const v3 = v2 << F0;
    try {
        v1.preventExtensions(v2, v3, v2, F0);
    } catch(e5) {
    }
    v1.b = v2;
    class C6 {
        #f = v1;
        static #c = F0;
    }
    new C6();
    new C6();
    new C6();
}
new F0();
const v11 = new F0();
new F0();
for (let i15 = 0; i15 < 6; i15++) {
    const v21 = %WasmStruct();
    new Proxy(v11, {});
}
new BigInt64Array(9);
new BigUint64Array(2830);
new Float64Array(1555);
const v34 = new Set();
const v37 = v34[Symbol.iterator]();
function f38() {
    return f38;
}
v37.__proto__;
Set >> F0;
const v42 = Symbol.matchAll;
v34[v42] = v42;
gc({ execution: "sync", type: "minor" });
