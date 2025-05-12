function f1(a2, a3, a4, a5) {
    const v10 = {
        toString(a7, a8, a9) {
            return this;
        },
        ...a5,
    };
    return v10;
}
f1(1308, 1308, 1308, f1(1308, 1308, 1308, 1308));
