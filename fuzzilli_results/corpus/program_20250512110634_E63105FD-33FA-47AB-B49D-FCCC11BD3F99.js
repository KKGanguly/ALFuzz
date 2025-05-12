const v1 = ["pow"];
function f2(a3, a4, a5) {
    const v6 = { b: "pow", __proto__: a4, 5: v1, 1073741823: v1 };
    return a5;
}
f2("pow", f2, f2);
f2(v1, v1);
f2(v1, v1);
class C10 extends f2 {
}
f2(v1, v1);
new C10();
