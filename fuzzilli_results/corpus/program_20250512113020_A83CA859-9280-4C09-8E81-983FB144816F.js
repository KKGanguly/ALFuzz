try {
    const v1 = Error.prototype;
    v1.name = v1;
    v1.toString.call(v1);
} catch(e4) {
}
