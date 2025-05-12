const v1 = new Date();
v1.toUTCString();
const v4 = Error.captureStackTrace;
try { v4.call(); } catch (e) {}
