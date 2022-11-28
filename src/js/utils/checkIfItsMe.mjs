import { load } from "../storage/load.mjs";

export function checkIfItsMe(name) {
  const myName = load("otherDetails").name;

  let itsMe = false;

  if (name === myName) {
    itsMe = true;
  }
  return itsMe;
}
