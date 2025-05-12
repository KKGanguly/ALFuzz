function f1() {
    return 5;
}
f1.prototype = 5;
Object.setPrototypeOf([f1], f1);
