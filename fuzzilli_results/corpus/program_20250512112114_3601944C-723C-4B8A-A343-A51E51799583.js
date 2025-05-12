function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
const v3 = new F0();
new F0();
~9007199254740990;
~65535;
new WeakSet();
-(-1000000000000.0);
let v14 = -5.0;
v14--;
const v19 = Array.prototype.lastIndexOf;
try { v19(v19); } catch (e) {}
let v21;
try { v21 = v19.call(null); } catch (e) {}
v21 ?? v21;
const v24 = Array.prototype.lastIndexOf;
try { v24(v24); } catch (e) {}
let v26;
try { v26 = v24.call(); } catch (e) {}
v26 ?? v26;
const v31 = [5,,7];
function f32() {
    return 9007199254740990;
}
const v33 = { valueOf: f32 };
v31.lastIndexOf(undefined, v33);
5 - 5;
v31.lastIndexOf(5, v33);
5 * 5;
undefined ?? undefined;
const v44 = [5,,];
function f45() {
    return f45;
}
const v46 = { valueOf: f45 };
function f48(a49, a50) {
    return a50 in a49;
}
try { f48(5, -9007199254740991); } catch (e) {}
const v53 = { has: f48 };
const v54 = new Proxy(Array, v53);
v54.e = v54;
try { Object(65535); } catch (e) {}
const v57 = Object.setPrototypeOf(v44, v54);
v57.e = v57;
const v58 = Array.prototype;
try { v58.sort(null); } catch (e) {}
const v60 = v58.lastIndexOf;
try { v60(v53); } catch (e) {}
const v62 = v60.call(v44, undefined, v46);
function f63(a64) {
    function f65() {
        return v26;
    }
    function f66() {
        return a64;
    }
    return a64;
}
f63(v62);
const v68 = {};
try { v68(v3); } catch (e) {}
