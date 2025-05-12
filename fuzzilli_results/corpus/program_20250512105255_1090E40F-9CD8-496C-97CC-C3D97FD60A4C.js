function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this?.__lookupGetter__;
    try { v5(); } catch (e) {}
}
const v7 = new F2(F2);
let v8 = "g";
let v9 = 617355015n;
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
let v17 = new Proxy(F10, Proxy);
try { v17.apply(F10, v7); } catch (e) {}
({"c":v17,"length":v8,...v9} = Array);
({}).propertyIsEnumerable(v8);
