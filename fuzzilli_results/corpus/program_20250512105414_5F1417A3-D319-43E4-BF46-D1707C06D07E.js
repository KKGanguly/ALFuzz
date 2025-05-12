const v2 = new Set();
const v3 = v2.difference(v2);
let v5;
try { v5 = new Symbol(v3); } catch (e) {}
const v7 = v2[Symbol.iterator]();
let v8;
try { v8 = v7.reduce("14"); } catch (e) {}
function f9() {
    return v8;
}
const v10 = f9.toString(v5, v5);
v10.localeCompare(v10);
const v12 = v7.__proto__;
try { v12.reduce(Symbol); } catch (e) {}
