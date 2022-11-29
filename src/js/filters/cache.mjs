import { saveToSessionStorage } from "../storage/save.mjs";

saveToSessionStorage("cache", "testItem");
let cache = sessionStorage.getItem("cache");

export function test() {
  console.log(cache);
}
