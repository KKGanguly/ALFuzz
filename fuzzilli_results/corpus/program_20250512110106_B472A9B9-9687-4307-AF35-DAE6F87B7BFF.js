function f1() {
    return {} instanceof 0;
}
try { f1(); } catch (e) {}
