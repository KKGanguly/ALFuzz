function F0() {
    if (!new.target) { throw 'must be called with new'; }
    try {
        throw Error();
    } catch(e4) {
        e4.stack;
    }
}
new F0();
new F0();
Reflect.get(Error(), "stack", 0);
