const v1 = WeakMap.toString;
let v2;
try { v2 = v1(); } catch (e) {}
const v3 = new WeakMap();
try { v3.set(v3); } catch (e) {}
for (const v5 in v1) {
    try { v2.setUint32(v5, v5, v5); } catch (e) {}
    const v7 = {};
}
