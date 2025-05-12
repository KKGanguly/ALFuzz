var result_z;
function f2(a3, a4, a5) {
    result_z = a4;
    return f2;
}
f2(8, 1);
f2(2, undefined, f2(4, 2));
