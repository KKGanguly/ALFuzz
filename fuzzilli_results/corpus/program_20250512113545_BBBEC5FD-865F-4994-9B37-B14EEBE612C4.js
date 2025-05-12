const v1 = [448n];
const v2 = [v1];
v2[1] = 0;
function f4(a5, a6, a7) {
    const t4 = v2.__proto__;
    t4[0] = 1;
    return a7;
}
v2.forEach(f4);
v1["pop"]();
