function f2(a3, a4, a5) {
    return { ...a4, __proto__: a4 };
}
const v7 = f2(f2, 1284433913, -9007199254740991);
f2(1284433913, v7);
f2(-9007199254740991, v7);
