import { setBodyLock } from '@suivante/react'
import { headerSlotStyle } from '@suivante/styles'
import type { ReactNode } from 'react'
import { useMemo } from 'react'

import { useHeaderContext } from './HeaderContext'

export interface UseHeaderButton {
  isHideWhenOpen?: boolean
  content?: ReactNode
  onClick?: () => unknown
  openByClick?: boolean
}

export const useHeaderButton = ({
  content: newContent,
  isHideWhenOpen,
  onClick,
  openByClick
}: UseHeaderButton) => {
  const {
    state: { isOpen, isMobile, content },
    functions: { setContent, setIsOpen }
  } = useHeaderContext()

  const headerButtonProps = useMemo(
    () => ({
      className: headerSlotStyle().button(),
      animate: {
        opacity: isHideWhenOpen && isOpen ? 0 : 1
      },
      [isMobile ? 'onClick' : openByClick ? 'onClick' : 'onMouseEnter']: () => {
        onClick?.()
        if (!newContent) {
          if (!isOpen) return
          setContent(null)
          setIsOpen(false)
          setBodyLock({
            isLockBody: false
          })
          return
        }
        if (isMobile) {
          setContent(isOpen ? null : newContent)
          setIsOpen()
          setBodyLock({
            isLockBody: !isOpen
          })
          return
        }

        if (!isOpen) {
          setContent(newContent)
          setIsOpen()
          return
        }

        if (content === newContent) {
          setContent(null)
          setIsOpen()
          return
        }
        setContent(newContent)
      }
    }),
    [isOpen, isMobile, content]
  )

  return {
    state: { headerButtonProps }
  }
}
