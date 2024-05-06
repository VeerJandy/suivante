import { dataAttr, transition, useMobile } from '@suivante/react'
import type { HeaderVariants } from '@suivante/styles'
import { headerSlotStyle, headerStyle } from '@suivante/styles'
import type { ReactNode } from 'react'
import { useMemo, useState } from 'react'

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
      animate: { height: isOpen ? (isMobile ? '100vh' : 'auto') : 48 },
      transition,
      'data-open': dataAttr(isOpen),
      onMouseLeave: isMobile
        ? undefined
        : () => {
            if (!isOpen) return
            setContent(() => null)
            setIsOpen(() => false)
          }
    }),
    [isOpen, isMobile]
  )

  const headerWrapperProps = useMemo(
    () => ({
      className: headerSlotStyle(props).wrapper()
    }),
    []
  )

  const headerContentProps = useMemo(
    () => ({
      className: headerSlotStyle(props).content()
    }),
    []
  )

  return {
    state: {
      content,
      isOpen,
      isMobile,
      headerProps,
      headerWrapperProps,
      headerContentProps
    },
    functions: {
      setIsOpen: (isOpen?: boolean) => setIsOpen(prev => isOpen ?? !prev),
      setContent: (content?: ReactNode) => setContent(() => content ?? null)
    }
  }
}

export type UseHeaderReturn = ReturnType<typeof useHeader>
