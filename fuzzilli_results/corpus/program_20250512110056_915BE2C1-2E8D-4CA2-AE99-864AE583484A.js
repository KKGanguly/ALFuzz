function f1() {
    function f2(a3) {
        return a3;
    }
    return f2;
}
Symbol[Symbol.toPrimitive] = f1;
const v6 = this.URIError;
try { v6(Symbol); } catch (e) {}
