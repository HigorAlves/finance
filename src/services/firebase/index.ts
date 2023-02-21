import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { CONFIG } from "~/utils/config";

const firebaseApp = initializeApp(CONFIG.firebase)
export const auth = getAuth(firebaseApp)
