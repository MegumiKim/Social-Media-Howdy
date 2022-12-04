import { load } from "../storage/local.mjs";

/** Check if the name is same as the username
 * saved in the local storage and returns a boolean value
 *
 * @param {string} name name of the post's author
 * */
export function checkIfItsMe(name) {
  const myName = load("otherDetails").name;
  let itsMe = false;

  if (name === myName) {
    itsMe = true;
  }
  return itsMe;
}
