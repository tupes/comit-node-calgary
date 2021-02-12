import defaultExport, { x, showClass } from "./module2.js";
import("./module4.js").then((module4) => console.log(module4.x));

console.log(x);
showClass();
defaultExport();

export const circular = "circular";
