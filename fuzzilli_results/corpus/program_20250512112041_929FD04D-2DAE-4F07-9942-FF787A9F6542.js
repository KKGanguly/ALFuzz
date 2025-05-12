let v1;
try { v1 = Set.bind(Set); } catch (e) {}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this?.constructor;
    try { new v5(v1); } catch (e) {}
}
new F2();
new F2(Set);
new Uint8ClampedArray(v1);
