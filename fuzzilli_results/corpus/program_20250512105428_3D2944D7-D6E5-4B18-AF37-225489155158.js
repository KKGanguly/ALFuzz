const v2 = /(invalid regexp)/;
function f3(a4, a5) {
    return -6;
}
v2[Symbol.toPrimitive] = f3;
Error(v2);
