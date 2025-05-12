function f0(a1) {
    arguments.toString = a1;
    const v4 = this.AggregateError;
    try { v4(arguments, arguments); } catch (e) {}
    return v4;
}
f0();
