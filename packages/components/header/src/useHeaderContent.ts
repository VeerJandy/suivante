import { variants } from '@suivante/react'
import { useMemo } from 'react'

export const useHeaderContent = () => {
  const headerContentProps = useMemo(
    () => ({
      ...variants.height
    }),
    []
  )

  return {
    state: { headerContentProps }
  }
}
