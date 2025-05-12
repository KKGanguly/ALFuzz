function f1(a2) {
    return { __proto__: a2, 65537: WeakSet };
}
f1(f1());
