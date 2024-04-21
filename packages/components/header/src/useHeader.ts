import { dataAttr, durationMedium, easeMedium, useMobile } from '@suivante/react'
import type { HeaderVariants } from '@suivante/styles'
import { headerSlotsStyle, headerStyle } from '@suivante/styles'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

export interface UseHeader extends HeaderVariants {
  children: ReactNode
}

export const useHeader = (props: UseHeader) => {
  const isMobile = useMobile()

  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ReactNode | null>(null)

  const headerProps = useMemo(
    () => ({
      className: headerStyle(props),
      animate: { height: isOpen ? (isMobile ? '100vh' : 'fit-content') : 48 },
      transition: {
        ease: easeMedium,
        duration: durationMedium
      },
      'data-open': dataAttr(isOpen),
      onMouseLeave: () => {
        if (!isOpen) return
        setContent(() => null)
        setIsOpen(() => false)
      }
    }),
    [isOpen]
  )
  const headerWrapperProps = useMemo(
    () => ({
      className: headerSlotsStyle(props).wrapper()
    }),
    []
  )

  return {
    state: {
      content,
      isOpen,
      isMobile,
      headerProps,
      headerWrapperProps
    },
    functions: {
      setIsOpen: (isOpen?: boolean) => setIsOpen(prev => isOpen ?? !prev),
      setContent
    }
  }
}

export type UseHeaderReturn = ReturnType<typeof useHeader>
