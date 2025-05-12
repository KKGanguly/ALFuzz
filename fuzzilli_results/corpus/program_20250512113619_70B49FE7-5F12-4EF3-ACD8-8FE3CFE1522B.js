const v1 = [,];
v1[1] = 0;
v1[2] = 2;
function f4(a5, a6, a7) {
    a7.fill();
    const v9 = v1.__proto__;
    v9[0] = 1;
    return v9;
}
v1.forEach(f4);
