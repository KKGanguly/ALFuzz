const v3 = ["invalid",23];
function f4(a5, a6, a7) {
    function f9(a10) {
        return a10 ??= a5;
    }
    this.onmessage = f9;
    return this;
}
const v13 = [1,"invalid",v3];
new Worker(f4, { arguments: v13, type: "function" });
function f18() {
    function f19(a20) {
        return a20;
    }
    return "function";
}
