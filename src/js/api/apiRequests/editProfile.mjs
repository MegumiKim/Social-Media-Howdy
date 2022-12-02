// import { BASE_URL } from "../constants.mjs";
// import { makeOptions } from "../makeOptions.mjs";
// import { load } from "../../storage/local.mjs";

// export async function editProfile(postData, url) {
//   // const name = load("otherDetails").name;
//   // const editProfileURL = `${BASE_URL}/profiles/${name}/media`;

//   try {
//     const token = load("accessToken");
//     const auth = `Bearer ${token}`;
//     const options = makeOptions("PUT", postData, auth);
//     const response = await fetch(url, options);
//     console.log(response);

//     const result = await response.json();
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
// }
