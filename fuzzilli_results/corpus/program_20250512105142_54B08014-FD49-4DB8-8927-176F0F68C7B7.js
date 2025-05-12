function f0() {
    return f0;
}
const v1 = [15,35375,65536,128,9007199254740992,2];
const v2 = [7434,-1572487664,2147483647,-1443377262,1427752826,-30710];
const v3 = [-9.197377592044358,-1000000.0,-1000000000000.0,4.667031064110311,2.2250738585072014e-308,-7.208851947297915e+307,1.5045678611860751e+308,553802.3282595896,-1.7976931348623157e+308,2.0];
const v4 = [1.7215259669560618e+307,-1000000.0,-3.775771113303697e+307,-933.3474089565769];
function f5(a6, a7, a8) {
    a8[2];
    const v10 = {
        10: f0,
        ...v2,
        f: a6,
        ...a8,
        __proto__: a8,
        g: a8,
    };
    return v10;
}
const v11 = f5(v3, v4, v4);
const t20 = v11.constructor;
new t20(v11);
f5(v11, v3, v3);
f5(f5, v1, v3);
const v17 = Array.prototype;
const v18 = v17.lastIndexOf;
v18.apply(v17, v18);
const v22 = [5,,];
v22.toString();
function f24() {
    v22.length = 1;
    return 1;
}
const v26 = { valueOf: f24 };
v22.lastIndexOf(undefined, v26);
v22.lastIndexOf(5, v26);
let v31 = 5;
v31++;
const v34 = [v31,,];
function f36(a37, a38) {
    const v39 = a37.from(f36);
    a38.blink(v39, v39, a37);
}
const v42 = new Proxy(Array, { has: f36 });
v42.c = v42;
const v44 = Object.setPrototypeOf(v34, v42);
v44.c = v44;
Array.prototype.lastIndexOf.call(v34);
function f48(a49) {
    const v50 = [5,5,5,5,5];
    const v52 = new Proxy(Array, {});
    v52.b = v52;
    Object.setPrototypeOf(v50, v52)[0];
    const v55 = Array.prototype;
    try { v55.findLastIndex(v34); } catch (e) {}
    return v55;
}
f48(v17);
f48();
const v60 = Array().__proto__;
try { v60.findLastIndex(); } catch (e) {}
Object.defineProperty(v60, 9998, {});
