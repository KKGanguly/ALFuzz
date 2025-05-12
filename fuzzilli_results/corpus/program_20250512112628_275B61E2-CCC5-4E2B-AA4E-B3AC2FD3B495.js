function f0() {
    let v1 = "o";
    const v9 = {
        o(a5) {
            return a5;
        },
        0: "length",
        valueOf(a7) {
            [Map,v1] = "bigint";
            return "length";
        },
    };
    return v9;
}
f0();
const t14 = f0();
t14.g = f0;
%OptimizeMaglevOnNextCall(f0);
f0();
