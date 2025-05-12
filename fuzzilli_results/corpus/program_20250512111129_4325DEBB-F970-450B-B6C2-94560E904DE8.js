function f1(a2) {
    arguments[0] = 506;
    arguments[0] = a2;
    return f1;
}
f1();
