function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [-620668184,-9007199254740990,-62856,2096564227,-2030584508,-60134932,-9223372036854775807,9223372036854775807,-536870912];
v3[2] = v3;
const v4 = [61147,-9,729814782,-6153];
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v11 = this.constructor;
    try { new v11(a9, F5, a8, F5); } catch (e) {}
    a10[1] = a10;
    a8.e = a9;
}
new F5(v3, F5, v2, v4);
new F5(F0, v3, F0, v3);
new F5(F0, v2, F0, v4);
