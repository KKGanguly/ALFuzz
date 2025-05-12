function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = F0;
    this.g = -256;
    this.b = -256;
}
new F0();
new F0();
const v5 = new F0();
v5.b = v5;
let v6 = 1000;
v6++;
const v9 = new Float64Array(v6);
v9[493] = v9;
new BigUint64Array(255);
new BigUint64Array(13);
try { this.write(); } catch (e) {}
this.Worker;
Worker.prototype = 12;
try { ("").padStart(v9); } catch (e) {}
try { ("string").trim(); } catch (e) {}
const v29 = {
    o(a26, a27) {
        try {
        } catch(e28) {
        }
    },
    type: "string",
};
new Worker("", v29);
