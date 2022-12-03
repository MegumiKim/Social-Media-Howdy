import { load } from "../storage/local.mjs";

/** Check if the name is same as the username
 * saved in the local storage
 *
 * @param {string} name name of the post's author
 * */
export function checkIfItsMe(name) {
  const myName = load("otherDetails").name;
  console.log(myName, name);
  let itsMe = false;

  if (name === myName) {
    itsMe = true;
  }
  return itsMe;
}
