try {
    throw Error(/(invalid regexp)/);
} catch(e3) {
    e3.stack.matchAll(e3);
}
