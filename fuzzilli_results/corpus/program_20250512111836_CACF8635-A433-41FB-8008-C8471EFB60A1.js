function f1(a2) {
    const v4 = {};
    const v6 = {};
}
const v16 = {
    valueOf() {
        const t0 = 0.1;
        t0.length = 0;
    },
};
function f17(a18, a19) {
    let v21 = 0;
    for (let i23 = 0; i23 < 90; i23++) {
        v21 += i23;
    }
    Array.prototype;
    function f31(a32, a33) {
        a32[0] = 0;
        return 4;
    }
    try { f31(); } catch (e) {}
    const v37 = new Error(Error);
    Reflect.get(v37, "stack");
    try { f31(); } catch (e) {}
    a18[0] = a19;
}
try { f17(Infinity, Infinity); } catch (e) {}
f17(4, -Infinity);
f17(4);
