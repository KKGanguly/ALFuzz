function f2(a3) {
    const v5 = new Proxy(Array, {});
    v5.length = v5;
    return Array;
}
f2(Array);
f2();
