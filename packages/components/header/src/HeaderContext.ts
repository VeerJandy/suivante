import { createContext } from '@suivante/react'

import type { UseHeaderReturn } from './useHeader'

export const [HeaderProvider, useHeaderContext] = createContext<UseHeaderReturn>({
  name: 'HeaderContext',
  strict: true,
  errorMessage:
    'useHeaderContext: `context` is undefined. Seems you forgot to wrap component within <Header />'
})
