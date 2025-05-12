const v3 = { type: "string" };
const v4 = new Worker("", v3);
const v5 = v4.getMessage;
try { new v5(v3, "", "string"); } catch (e) {}
