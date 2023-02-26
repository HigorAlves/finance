import { useEffect } from 'react'

import { onAuthStateChanged } from '@firebase/auth'

import { initialize } from '~/services/firebase'

export function useOnAuthStateChange() {
  const { auth } = initialize()

  useEffect(() => {
    onAuthStateChanged(auth, (data) => console.log(data))
  }, [auth])
}
