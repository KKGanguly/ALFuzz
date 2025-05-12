const v2 = new Int8Array(5);
function f4() {
    return 5;
}
const v5 = {};
v5.f = f4;
const v6 = {};
v6.f = f4;
v6.b = 5;
const v7 = {};
v7.h = v7;
v7.f = f4;
v7.b = 5;
v7.d = f4;
const v8 = {};
v8.b = v8;
v8.f = f4;
v8.b = 5;
v8.d = Int8Array;
const v10 = new Uint32Array(5);
try { v10.with(5, Uint32Array); } catch (e) {}
const v12 = v10[4];
v12 * v12;
Uint32Array.BYTES_PER_ELEMENT;
const v17 = new Uint32Array(512);
-5.0 === -5.0;
const v22 = [Int8Array];
let v23;
try { v23 = v22.pop(); } catch (e) {}
v23.prototype = v23;
const v24 = [512,v17];
const v25 = [Uint32Array];
try { v25.sort(-1000000000.0); } catch (e) {}
function f27() {
    for (let v28 = 0; v28 < 5; v28++) {
        v28 < __v_5;
    }
    return f27;
}
let v31;
try { v31 = f27(); } catch (e) {}
try { gc(); } catch (e) {}
const v34 = gc();
v34 ?? v34;
let v36;
try { v36 = v2.set(v5, 5); } catch (e) {}
v24.h = v36;
v5[512] -= -1000000000.0;
const v37 = v31 ?? v31;
v37 ?? v37;
