0 ** 1000000000;
function f33() {
    return f33;
}
f33.prototype = 0;
function f35() {
    return {} instanceof f33;
}
try { f35(); } catch (e) {}
