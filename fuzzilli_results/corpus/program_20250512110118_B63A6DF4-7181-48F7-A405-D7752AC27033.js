const v2 = new BigUint64Array(2);
const v3 = v2.indexOf(2);
function f4() {
    return v3;
}
const v5 = f4.bind();
const v6 = v5.constructor;
try { v6(v5); } catch (e) {}
