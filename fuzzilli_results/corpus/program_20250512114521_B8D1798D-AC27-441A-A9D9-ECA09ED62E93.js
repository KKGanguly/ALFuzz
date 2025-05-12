function f1() {
    return undefined;
}
const v2 = f1.y;
for (let i4 = 0; i4 < 1000000; i4++) {
}
typeof v2 == "undefined";
undefined | 0;
