const v1 = new Set();
const v4 = v1[Symbol.iterator]();
function f5() {
    return f5;
}
const t5 = v4.__proto__;
t5.next = f5;
