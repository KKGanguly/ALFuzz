function f0(a1) {
    arguments.__lookupGetter__.apply(arguments);
    return arguments;
}
f0();
