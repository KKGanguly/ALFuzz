const v1 = new WeakMap();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2(v1, v1);
new F2(F2, WeakMap);
new F2(WeakMap, v6);
const v11 = new Uint8ClampedArray(4);
v11[0] = 255;
v11[0];
function f14(a15, a16) {
    return 255;
}
try { f14(); } catch (e) {}
try { f14(); } catch (e) {}
function f19(a20, a21) {
}
const v23 = new Uint8ClampedArray(4);
try { f19(Infinity, Infinity); } catch (e) {}
f19(v23, -Infinity);
f19(v23, 0.5);
new Int8Array(16);
new Int8Array(64);
new BigInt64Array(15, v1, Int8Array);
for (let i39 = (() => {
        function f38() {
            return f38;
        }
        return f38;
    })();
    !i39;
    ) {
}
for (let i44 = 0; i44 < 1000000; i44++) {
}
