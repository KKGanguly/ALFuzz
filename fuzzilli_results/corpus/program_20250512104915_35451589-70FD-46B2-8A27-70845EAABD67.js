function f0(a1, a2) {
    function f3() {
        const v5 = a2(this);
        return { fffffff: v5 };
    }
    return f3;
}
const v9 = f0(m, selfOf);
function selfOf(a11) {
    return a11.self_;
}
function m() {
    return m;
}
v9.apply({ self_: 3 });
const v19 = { self_: 3, uuu: 4 };
v9.apply(3, selfOf);
