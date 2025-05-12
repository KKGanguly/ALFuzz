function f0(a1) {
    for (let v2 = 0; v2 < 1000; v2++) {
        const v3 = v2 ^ v2;
        v3 << v3;
    }
    return f0;
}
f0.call();
