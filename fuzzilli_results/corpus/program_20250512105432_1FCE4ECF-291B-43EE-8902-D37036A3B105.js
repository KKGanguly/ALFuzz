/Gffoo[z]*/sidgv;
/a[a]/;
/a(?=bbb|bb)c/msyv;
const v7 = [0,1];
function f8(a9) {
    const v11 = { length: 0 };
    Object.defineProperty(v11, "length", { writable: false });
    return v11;
}
const v18 = Symbol.species;
v7.constructor = { [v18]: f8 };
const v23 = Array.prototype.concat;
try { v23.call(); } catch (e) {}
const v28 = new Float32Array(2401);
const v31 = new Uint32Array(1024);
new BigUint64Array(4096);
function f35(a36, a37) {
    return a37;
}
Error.prepareStackTrace = Float32Array;
Error.prepareStackTrace = f35;
try {
    const v39 = /(invalid regexp)/;
    function f40(a41, a42) {
        v28.byteOffset;
        v31.length = 2401;
        return -6;
    }
    v39[Symbol.toPrimitive] = f40;
    throw Error(v39);
} catch(e47) {
    const v49 = e47.stack[0];
    const v50 = v49.getThis();
    v50.toString(v50, v49);
}
