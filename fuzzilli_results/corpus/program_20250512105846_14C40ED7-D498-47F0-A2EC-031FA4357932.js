function f0(a1) {
    arguments[0] = f0;
    return arguments[0];
}
f0();
