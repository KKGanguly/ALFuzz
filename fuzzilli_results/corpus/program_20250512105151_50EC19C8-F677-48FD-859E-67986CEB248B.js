const v2 = ["invalid",23];
for (let i4 = 0; i4 < v2.length; i4++) {
    try {
        const v10 = v2[i4];
        Error.prototype.toString.call(v10);
    } catch(e15) {
    }
}
