function f0(a1) {
    arguments.constructor.seal(arguments);
    arguments[0];
    return arguments;
}
const v6 = f0();
v6.f = v6;
