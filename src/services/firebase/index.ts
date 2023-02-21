import { initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'

import { CONFIG } from '~/utils/config'

export function initialize() {
  const firebaseApp = initializeApp(CONFIG.firebase)
  const auth = getAuth(firebaseApp)

  if (process.env.NODE_ENV === 'development') {
    connectAuthEmulator(auth, 'http://localhost:9099', {
      disableWarnings: true,
    })
    // FIRESTORE localhost, 8080
  }

  return {
    firebaseApp,
    auth,
  }
}
