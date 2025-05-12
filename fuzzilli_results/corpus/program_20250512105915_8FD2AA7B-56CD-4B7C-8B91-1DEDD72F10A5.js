function f0(a1) {
    arguments[0] = arguments;
    return f0;
}
f0(f0);
