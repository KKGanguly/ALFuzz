const v1 = new Uint8Array();
class C2 extends Uint8Array {
    static {
        Object.defineProperty(v1, v1, { writable: true, configurable: true, value: this });
        gc();
    }
}
