export { BASE_URL } from "./api/constants.mjs";

import { signUpListeners } from "./listeners/sign-up.mjs";
import * as storage from "././storage/index.mjs";

signUpListeners();
