function f0() {
    return f0;
}
const v2 = new Uint8Array();
const v3 = v2.buffer;
Object.defineProperty(v3, "constructor", { configurable: true, value: f0 });
v3["slice"]();
