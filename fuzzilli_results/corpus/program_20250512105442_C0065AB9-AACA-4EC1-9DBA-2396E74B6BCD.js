function f0(a1, a2) {
    Object.defineProperty(a2, "toString", { value: f0 });
    function f3() {
        return a1;
    }
    let v4;
    try { v4 = f3.constructor(a2); } catch (e) {}
    return v4;
}
f0(m, selfOf);
function selfOf(a9) {
    return m;
}
function m() {
    return f0;
}
