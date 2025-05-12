function f0() {
    for (let v1 = 0; v1 < 5; v1++) {
        const v3 = Symbol.dispose;
        const v5 = {
            [v3]() {
            },
        };
        using v6 = v5;
        v1 < __v_5;
    }
    return f0;
}
try { f0(); } catch (e) {}
