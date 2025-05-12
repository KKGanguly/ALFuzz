const v0 = [1073741823];
function f1() {
    function f2() {
        return f2;
    }
    return f2;
}
v0[Symbol.toPrimitive] = f1;
const v5 = { __proto__: v0 };
const v6 = {};
try { v6.__lookupSetter__(v5); } catch (e) {}
