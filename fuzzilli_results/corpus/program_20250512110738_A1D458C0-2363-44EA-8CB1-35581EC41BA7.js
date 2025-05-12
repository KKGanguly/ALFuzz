function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
let v2 = [-Infinity,-2.220446049250313e-16,-743.9769498797548];
class C3 extends F0 {
}
function f4(a5) {
    return v2 ^= a5;
}
C3.constructor = f4;
const v6 = C3.constructor;
v6(v2, v6, C3);
