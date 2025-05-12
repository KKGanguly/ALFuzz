function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
let v3 = F0.constructor;
with ("// Copyright 2014 the V8 project authors. All rights reserved.") {
    v3 = undefined;
}
