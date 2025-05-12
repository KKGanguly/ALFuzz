function f0(a1) {
    function f3() {
        return a1;
    }
    function f4(a5) {
        return f3;
    }
    Object.defineProperty(arguments, 0, { get: f3, set: f4 });
    return f0;
}
Reflect.construct(f0, [Reflect]);
f0();
