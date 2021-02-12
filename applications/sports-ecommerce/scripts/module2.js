import { x as y } from "./module3.js";

export const x = 2;
export const z = 50;

export function showClass() {
  console.log(`From module3: ${y}`);
}

export default function defaultExport() {
  console.log("From the defaultExport");
}
