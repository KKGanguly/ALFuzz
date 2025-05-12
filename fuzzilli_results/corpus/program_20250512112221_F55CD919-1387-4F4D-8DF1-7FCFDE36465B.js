function f2(a3, a4, a5) {
    let v6 = this;
    function f7(a8) {
        delete a8?.[-1];
    }
    v6.onmessage = f7;
    [v6] = a3;
    return f7;
}
const v12 = [7.192052412523336e+307,2.2250738585072014e-308,7.192052412523336e+307];
new Worker(f2, { arguments: v12, type: "function" });
