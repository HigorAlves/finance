import { initializeApp } from 'firebase/app'

import { CONFIG } from '~/utils/config'

const firebaseApp = initializeApp(CONFIG.firebase)
