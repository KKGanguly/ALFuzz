function f1(a2, a3) {
    return a3;
}
Error.prepareStackTrace = f1;
try {
    throw Error();
} catch(e6) {
    const v7 = e6.stack;
    v7[0].isPromiseAll(Uint8ClampedArray, e6, f1, v7, f1);
}
function f10() {
    function f11(a12) {
        const v14 = [,];
        v14.splice(f11, f10);
        v14[1] = 0;
        function f17(a18, a19, a20) {
            a20[2] = a20;
            return a12;
        }
        v14.forEach(f17);
        return f1;
    }
    const v22 = f11(f11);
    f11();
    return v22;
}
Uint8ClampedArray.constructor = f10;
const t27 = Uint8ClampedArray.constructor;
t27();
