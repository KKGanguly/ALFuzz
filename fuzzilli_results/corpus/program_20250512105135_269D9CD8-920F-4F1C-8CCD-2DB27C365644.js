const v2 = new Uint8ClampedArray(4);
v2[0] = 255;
v2[0];
function f5(a6, a7) {
    a6[0] = 0;
    return 4;
}
try { f5(); } catch (e) {}
try { f5(); } catch (e) {}
function f11(a12, a13) {
    a12[0] = a13;
    return a13;
}
const v15 = new Uint8ClampedArray(4);
try { f11(Infinity, Infinity); } catch (e) {}
f11(v15, -Infinity);
f11(v15, 0.5);
