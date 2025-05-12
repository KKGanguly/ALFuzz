new Int32Array({ length: 20181 });
const v4 = [-4,4,-6,-4294967295,2,-263473209,6];
for (let v5 = 0; v5 < 5; v5++) {
    try {
        const v6 = v4[v5];
        Error.prototype.toString.call(v6);
    } catch(e11) {
    }
}
