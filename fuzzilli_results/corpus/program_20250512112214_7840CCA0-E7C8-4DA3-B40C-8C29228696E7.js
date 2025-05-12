Reflect.get(Error(), "stack", 0);
function f6() {
    for (let i8 = 0;
        (() => {
            const v10 = i8 < 100000;
            const v11 = {};
            return v10;
        })();
        i8++) {
        const v15 = {};
        const v16 = { type: "stack" };
    }
    return Reflect;
}
f6();
