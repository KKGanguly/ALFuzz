const v0 = [];
function f1() {
    try {
        throw Error(/(invalid regexp)/);
    } catch(e5) {
        e5.stack.getThis();
    }
    return f1;
}
v0[Symbol.toPrimitive] = f1;
v0[1] = v0;
v0.constructor = {};
try { new Uint32Array(v0); } catch (e) {}
