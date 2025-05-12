function f1() {
    Object.hasOwn(-256n);
    return f1;
}
f1.apply();
