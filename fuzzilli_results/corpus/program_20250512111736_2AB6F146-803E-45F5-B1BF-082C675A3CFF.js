function f3() {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    const v7 = this?.__defineSetter__;
    try { new v7(1000, a6); } catch (e) {}
    a6 | a6;
    this.h = a6;
    this.a = a6;
}
F4.caller = F4;
const v10 = new F4(1769573139);
const v11 = new F4();
const v12 = new F4(0);
function f13(a14, a15, a16) {
    try { a16.findLast(0); } catch (e) {}
    return { ...v12, h: v11, c: 1000, __proto__: a16 };
}
const v19 = f13(1000, v11);
f13(1769573139, v10, v12).h;
f13(1000, v10, v19);
const v23 = f3();
v23 >>> v23;
f3();
const v26 = f3();
%OptimizeFunctionOnNextCall(f3);
const v27 = f3();
function f28(a29, a30) {
    a30();
    const v32 = a30();
    v32 ?? v32;
    return a30;
}
function f34() {
    var result;
    const v37 = {};
    v37.g = v37;
    v37.e = v27;
    const v38 = {};
    v38.h = v38;
    v38.e = v27;
    v38.f = undefined;
    const v39 = {};
    v39.f = undefined;
    v39.c = v26;
    const v40 = {};
    v40.e = v27;
    v40.f = undefined;
    v40.a = undefined;
    let v41 = 0;
    for (let i44 = (() => {
            0 & 0;
            return 0;
        })();
        (() => {
            -90;
            const v47 = i44 < 90;
            v47 || v47;
            return v47;
        })();
        i44++) {
        i44 / i44;
        v41 += i44;
    }
}
4005 >>> 4005;
f28(4005, f34);
function f56() {
    let v57 = 0;
    for (let v58 = 0; v58 < 250; v58++) {
        const t70 = [,0.1];
        t70.length = 0;
        !(v58 < 2);
        [,,];
        1 < 1;
        const v71 = [0,1];
        try { v71.unshift(v57); } catch (e) {}
        const v75 = Array.prototype.concat;
        let v76;
        try { v76 = v75.call(v71); } catch (e) {}
        try { v76.flat(); } catch (e) {}
        v57 = 2;
        let v79 = v58++;
        v79--;
    }
    return v57;
}
f28(2, f56);
