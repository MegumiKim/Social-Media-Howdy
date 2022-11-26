import { load } from "../storage/load.mjs";

export function checkIfItsMe(name) {
  const myName = load("otherDetails").name;

  let itsMe = false;

  if (name === myName) {
    console.log("its me");
    itsMe = true;
  } else {
    console.log("its not me");
  }
  return itsMe;
}
