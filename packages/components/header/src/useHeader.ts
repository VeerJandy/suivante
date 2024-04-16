import type { HeaderVariants } from '@suivante/styles'
import { headerStyle } from '@suivante/styles'
import { ReactNode } from 'react'
import { useCallback } from 'react'

export interface UseHeader extends HeaderVariants {
  children: ReactNode
  isMobileServer: boolean
}

export const useHeader = (props: UseHeader) => {
  const getHeaderProps = useCallback(
    () => ({
      className: headerStyle(props)
    }),
    []
  )

  return {
    functions: {
      getHeaderProps
    }
  }
}
